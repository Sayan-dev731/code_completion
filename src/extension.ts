import * as vscode from 'vscode';
import { OpenAIClient, AzureKeyCredential } from '@azure/openai';

let openAIClient: OpenAIClient | null = null;

async function getCompletion(prompt: string): Promise<string> {
    const config = vscode.workspace.getConfiguration('codeHelper');
    const apiKey = config.get<string>('apiKey') || '';
    const endpoint = config.get<string>('endpoint') || '';
    const deploymentId = config.get<string>('deploymentId') || '';

    if (!apiKey || !endpoint || !deploymentId) {
        throw new Error('Please configure your Azure OpenAI settings in the extension settings.');
    }

    if (!openAIClient) {
        openAIClient = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));
    }

    const result = await openAIClient.getCompletions(deploymentId, {
        prompt,
        max_tokens: 100,
        temperature: 0.7,
    });

    return result.choices[0].text.trim();
}

export function activate(context: vscode.ExtensionContext) {
    console.log('Code Helper is now active!');

    const askAICommand = vscode.commands.registerCommand('extension.askAI', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found.');
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection) || 'Write code for me';

        try {
            const completion = await getCompletion(text);
            editor.edit(editBuilder => {
                editBuilder.insert(selection.end, `\n${completion}`);
            });
        } catch (error) {
            vscode.window.showErrorMessage(`Error: ${error.message}`);
        }
    });

    const workspaceInfoCommand = vscode.commands.registerCommand('extension.showWorkspaceInfo', () => {
        const folders = vscode.workspace.workspaceFolders;
        if (folders) {
            vscode.window.showInformationMessage(`Workspace Folders: ${folders.map(f => f.name).join(', ')}`);
        } else {
            vscode.window.showInformationMessage('No workspace folders open.');
        }
    });

    context.subscriptions.push(askAICommand, workspaceInfoCommand);
}

export function deactivate() {
    console.log('Code Helper has been deactivated.');
}
