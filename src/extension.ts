import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
    const provider: vscode.CompletionItemProvider = {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            return callAzureOpenAI(linePrefix).then(suggestions => {
                return suggestions.map(suggestion => new vscode.CompletionItem(suggestion, vscode.CompletionItemKind.Text));
            });
        }
    };

    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('plaintext', provider));
}

async function callAzureOpenAI(prompt: string): Promise<string[]> {
    const response = await axios.post('https://api.openai.azure.com/v1/engines/davinci-codex/completions', {
        prompt: prompt,
        max_tokens: 50
    }, {
        headers: {
            'Authorization': `your secret key`,
            'Content-Type': 'application/json'
        }
    });

    return response.data.choices[0].text.split('\n').filter(line => line.trim() !== '');
}

export function deactivate() {}