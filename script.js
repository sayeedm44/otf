// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("elevatorForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the form
        const salesPerson = document.getElementById("salesPerson").value;
        const teamLeader = document.getElementById("teamLeader").value;

        // Debugging: Log the values to the console
        console.log("Sales Person:", salesPerson);
        console.log("Team Leader Involved:", teamLeader);

        // Create a new jsPDF instance
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Load the logo image
        const logo = new Image();
        logo.src = 'logo.png'; // Path to your logo file

        // Wait for the image to load before adding it to the PDF
        logo.onload = function () {
            // Add the logo to the PDF
            doc.addImage(logo, 'PNG', 10, 10, 50, 20); // Adjust the position and size as needed

            // Add the title
            doc.setFontSize(20);
            doc.text("Brio Elevators OTF Form", 14, 40); // Adjust Y position after logo

            // Add customer details
            doc.setFontSize(12);
            doc.text("Customer Details", 14, 55); // Adjust Y position after title

            // Check if autoTable is available
            if (typeof doc.autoTable === "function") {
                doc.autoTable({
                    head: [['Field', 'Value']],
                    body: [
                        ['Sales Person', salesPerson],
                        ['Team Leader Involved', teamLeader],
                    ],
                    startY: 60, // Adjust start position to avoid overlapping
                });
            } else {
                console.error("autoTable is not a function. Please check jsPDF and autoTable library.");
            }

            // Save the PDF
            doc.save("Brio_Elevators_OTF_Form.pdf");
        };
    });
});
