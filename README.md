Phase 2: Update the Product Page (Product.razor)
The goal is to ensure that clicking a fruit takes you to a details page that looks like the exhibit and uses the same data fetching method as the Home page.

Open the File:

Open Product.razor (likely in Components > Pages).

Define the Route:

Ensure the top of the file has the correct route to match the URL shown in the image (localhost:5112/fruit/4).

Add this directive at the top if it's missing:

C#

@page "/fruit/{Id:int}"
Use Copilot to Generate the Logic:

Highlight the code block (or the whole file) and press Ctrl + I.

Type the following prompt to ensure strict adherence to the requirements:

"Implement this page to display details for a specific fruit (Name, Description, Price, Stock, Origin). It must retrieve data using the same service mechanism used in Home.razor. Match the layout shown in the 'Pear' exhibit."

Verify the Code:

Data Injection: Check that it injects the same service (e.g., @inject FruitService Service or similar).

Parameters: Ensure it has a [Parameter] public int Id { get; set; }.

Display: Ensure the HTML displays:

Name (Large header)

Description (Paragraph)

Price (e.g., "Price: 1.29")

Stock (e.g., "Stock: True")

Origin (e.g., "Origin: France")

Accept the changes.

Phase 3: Run and Verify
Run the App:

Open your terminal in VS Code (Ctrl + ~).

Type dotnet watch or dotnet run and press Enter.

Check Home Page:

Scroll down the list of fruits. You should see more items than before (the "additional 10").

Check Product Page:

Click on any fruit (e.g., "Pear").

Verify the URL changes to /fruit/X.

Verify the details (Price, Stock, Origin) are visible as shown in the screenshots.
