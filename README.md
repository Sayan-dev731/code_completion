Phase 1: Handle Invalid IDs in the API
The requirement is to return the specific text "No fruit with this id" when a user requests a non-existent ID.

Open the Controller File:

In VS Code, navigate to the Controllers folder.

Open FruitController.cs.

Locate the GET Method:

Find the method that handles GET /api/fruit/{id}. It will likely look like public ActionResult Get(int id).

Use Copilot to Modify the Logic:

Highlight the entire Get method.

Press Ctrl + I (Windows) or Cmd + I (Mac) to open the Copilot chat.

Enter the following prompt:

"Modify this method so that if the fruit with the specified ID is not found, it returns a NotFound result with the exact plain text body: 'No fruit with this id'."

Verify the Code:

Ensure the code looks similar to this:

C#

if (fruit == null)
{
    return NotFound("No fruit with this id");
}
Crucial: The text must match exactly as shown in the exhibit.

Phase 2: Enable Adding Fruits (POST Method)
You need to ensure the API supports adding fruits via a POST request, visible in Swagger.

Check for an Existing POST Method:

Still in FruitController.cs, look for a method decorated with [HttpPost].

If it is missing or incomplete, place your cursor inside the class (but outside other methods).

Generate the POST Method:

Press Ctrl + I.

Enter the prompt:

"Add an HttpPost method to this controller that accepts a Fruit object and adds it to the data store. It should return the created fruit."

Accept the Code:

Copilot should generate a method like public ActionResult Post(Fruit fruit). Click Accept.

Phase 3: Add Controller Documentation
The instructions explicitly state to add a description of functionality and usage details to the top of the file.

Go to the Top of the File:

Scroll to the very top of FruitController.cs, just above the class definition (public class FruitController ...).

Generate Documentation:

Press Ctrl + I.

Enter the prompt:

"Add a summary comment describing the functionality and usage of this controller."

Accept:

Copilot will insert a generic description (e.g., "API Controller for managing a list of fruits..."). Click Accept.

Phase 4: Run and Verify
Launch the Application:

Open the terminal (Ctrl + ~) and run dotnet watch or dotnet run.

Wait for the browser to open (usually to localhost:5112).

Test the Invalid ID:

In the browser address bar, type: http://localhost:5112/api/fruit/99 (or any random ID).

Verify: The page should display the plain text: "No fruit with this id".

Test Swagger:

Navigate to http://localhost:5112/swagger (or wherever your Swagger UI is hosted).

Verify: You should see a green POST button for /api/Fruit.

Click POST -> Try it out, enter some sample JSON for a fruit, and click Execute to ensure it works.
