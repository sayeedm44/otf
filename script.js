document.getElementById('elevatorForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    const elevatorType = document.getElementById('elevatorType').value;
    const brickWalls = document.getElementById('brickWalls').value;

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
        // Adjust the position and size of the logo (top-right with margin)
        const marginX = 150; // X margin
        const marginY = 10;  // Y margin
        const logoWidth = 50; // Adjust width
        const logoHeight = 25; // Adjust height

        // Add the logo to the top right
        doc.addImage(img, 'PNG', marginX, marginY, logoWidth, logoHeight);

        // Add the form content below the logo
        doc.setFontSize(12);
        doc.text(20, 60, `Elevator Type: ${elevatorType}`);
        doc.text(20, 70, `Number of Brick Walls: ${brickWalls}`);

        // Save the PDF
        doc.save('elevator_details.pdf');
    };

    img.onerror = function () {
        console.error('Failed to load the logo image.');
    };
});
