document.getElementById("elevatorForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const salesPerson = document.getElementById("salesPerson").value;
    const teamLeader = document.getElementById("teamLeader").value;

    // Create a new jsPDF instance
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add the title
    doc.setFontSize(20);
    doc.text("Brio Elevators OTF Form", 14, 22);

    // Add customer details
    doc.setFontSize(12);
    doc.text("Customer Details", 14, 35);
    doc.autoTable({
        head: [['Field', 'Value']],
        body: [
            ['Sales Person', salesPerson],
            ['Team Leader Involved', teamLeader],
        ],
        startY: 40,
    });

    // Save the PDF
    doc.save("Brio_Elevators_OTF_Form.pdf");
});
