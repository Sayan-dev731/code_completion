
### **Phase 1: Generate and Run Unit Tests**

You need to identify the testing framework and generate tests for your controller.

1.  **Identify the Framework:**

      * Open your file explorer in VS Code.
      * Look for a folder named `FruitStore.Tests` (or similar). Open the `.csproj` file inside it.
      * Look for a package reference like `xunit`, `NUnit`, or `MSTest`.
      * **Action:** Note the name of this framework (e.g., "xUnit") for the documentation step.

2.  **Generate Controller Tests:**

      * Navigate to the **Test Project** folder.
      * Create a new file named `FruitControllerTests.cs` (if it doesn't already exist).
      * Open the file, press `Ctrl + I` (Windows) / `Cmd + I` (Mac) to open Copilot.
      * Type the following prompt:
        > "Generate valid unit tests for all methods in the FruitController class. Ensure the tests mock the data repository correctly."
      * **Accept** the generated code.

3.  **Run the Tests:**

      * Open the Terminal (`Ctrl + ~`).
      * Type the following command to run the tests:
        ```bash
        dotnet test
        ```
      * **Action:** Verify that the tests pass, especially the one that enumerates all fruits.

-----

### **Phase 2: Document in Contoso Data Editor**

Switch to the "Contoso Data Editor" application (this is likely a separate window or text box in your lab environment) and enter the following information as requested:

1.  **Unit Test Framework:**

      * Type the name of the framework you found in Phase 1 (e.g., **xUnit** or **MSTest**).

2.  **Command Used:**

      * Type the command you used to run the validation:
        ```bash
        dotnet test
        ```

-----

### **Phase 3: Clean, Commit, and Push**

You must carefully commit your work while excluding specific files (`bin`, `obj`, and files starting with `.`).

1.  **Configure Exclusions (.gitignore):**

      * Open (or create) the `.gitignore` file in the root directory.
      * Ensure it contains the following lines. If not, ask Copilot: *"Update .gitignore to exclude bin, obj, and all files starting with a dot."*
        ```text
        bin/
        obj/
        .*
        ```
      * *Self-Correction:* The instruction specifically says to exclude files starting with `_` (underscore) or `.` (dot) depending on interpretation, but standard practice for "files that start with ." (like `.vscode`) is to put `.*` in gitignore. The image text says `files that start with "."`.

2.  **Stage the Files:**

      * In the terminal, run:
        ```bash
        git add .
        ```
      * *Tip:* You can run `git status` to verify that no `bin` or `obj` folders are being staged.

3.  **Commit with Detailed Message:**

      * The instructions require the commit message to list files and their purpose. Run a command similar to this (adjusting filenames based on what you actually changed):
        ```bash
        git commit -m "Updated project files. FruitController.cs: Added API logic. FruitControllerTests.cs: Added unit tests. Readme.md: Added documentation."
        ```

4.  **Push to GitHub:**

      * Run the final command:
        ```bash
        git push
        ```

### **Summary Checklist**

  * [ ] Did the `dotnet test` command pass?
  * [ ] Did you write "xUnit" (or correct framework) and "dotnet test" in the Contoso Data Editor?
  * [ ] Did you verify `bin` and `obj` folders were NOT committed?
  * [ ] Did your commit message list the files and their purposes?
