document.getElementById('elevatorForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    const salesPerson = document.getElementById('salesPerson').value;
    const teamLeader = document.getElementById('teamLeader').value;

    // Create a new PDF instance
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Path to the logo image
    const logoUrl = 'logo.png'; // Path to the logo image

    // Load the logo image
    const img = new Image();
    img.crossOrigin = "anonymous"; // Allow cross-origin loading
    img.src = logoUrl;

    img.onload = function () {
        // Adjust the position and size of the logo (top-left with margin)
        const marginX = 10; // X margin
        const marginY = 10;  // Y margin
        const logoWidth = 50; // Adjust width
        const logoHeight = 25; // Adjust height

        // Add the logo to the top left
        doc.addImage(img, 'PNG', marginX, marginY, logoWidth, logoHeight);

        // Add heading for Customer Details
        doc.setFontSize(16);
        doc.text('Customer Details', marginX, logoHeight + marginY + 20);

        // Add table
        doc.setFontSize(12);
        doc.autoTable({
            head: [['Sales Person', 'Team Leader Involved']],
            body: [[salesPerson, teamLeader]],
            startY: logoHeight + marginY + 30,
            theme: 'grid'
        });

        // Save the PDF
        doc.save('elevator_details.pdf');
    };

    img.onerror = function () {
        console.error('Failed to load the logo image.');
    };
});
