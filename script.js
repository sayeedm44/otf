// JavaScript file for Brio Elevators OTF Form

// Prevent default Enter key behavior in text areas to allow for new lines
const textAreas = document.querySelectorAll('textarea');
textAreas.forEach(textarea => {
    textarea.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            // Insert a new line at the cursor position
            textarea.value = textarea.value.substring(0, start) + '\n' + textarea.value.substring(end);
            textarea.selectionStart = textarea.selectionEnd = start + 1; // Move cursor to the new line
        }
    });
});

// Enable Enter key for new lines and Tab key for switching fields
document.querySelectorAll('input, select, textarea').forEach(element => {
    element.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
            event.preventDefault(); // Prevent default tab behavior
            const inputs = Array.from(document.querySelectorAll('input, select, textarea'));
            const index = inputs.indexOf(event.target);
            const nextIndex = (index + 1) % inputs.length; // Loop back to the start
            inputs[nextIndex].focus();
        }
    });
});

// Function to download the form data as a PDF
function downloadPDF() {
    // Get all form data
    const formData = {
        salesPerson: document.getElementById('salesPerson').value,
        teamLeader: document.getElementById('teamLeader').value,
        customerName: document.getElementById('customerName').value,
        area: document.getElementById('area').value,
        city: document.getElementById('city').value,
        billingAddress: document.getElementById('billingAddress').value,
        shippingAddress: document.getElementById('shippingAddress').value,
        location: document.getElementById('location').value,
        contactNumber: document.getElementById('contactNumber').value,
        email: document.getElementById('email').value,
        alternateContactName: document.getElementById('alternateContactName').value,
        alternateContactNumber: document.getElementById('alternateContactNumber').value,
        finalQuotation: document.getElementById('finalQuotation').value,
        datePaymentCollected: document.getElementById('datePaymentCollected').value,
        orderTakenDate: document.getElementById('orderTakenDate').value,
        deliveryMonths: document.getElementById('deliveryMonths').value,
        cashAccountCommitments: document.getElementById('cashAccountCommitments').value,
        model: document.getElementById('model').value,
        shaft: document.getElementById('shaft').value,
        shaftColor: document.getElementById('shaftColor').value,
        installationType: document.getElementById('installationType').value,
        shaftWidth: document.getElementById('shaftWidth').value,
        shaftDepth: document.getElementById('shaftDepth').value,
        pit: document.getElementById('pit').value,
        headroom: document.getElementById('headroom').value,
        travelHeight: document.getElementById('travelHeight').value,
        floorToFloorDistance: document.getElementById('floorToFloorDistance').value,
        payload: document.getElementById('payload').value,
        floors: document.getElementById('floors').value,
        cabinType: document.getElementById('cabinType').value,
        glassWall: document.getElementById('glassWall').value,
        cabinDesignA: document.getElementById('cabinDesignA').value,
        cabinDesignB: document.getElementById('cabinDesignB').value,
        cabinDesignC: document.getElementById('cabinDesignC').value,
        cabinDesignDoor: document.getElementById('cabinDesignDoor').value,
        handrail: document.getElementById('handrail').value,
        ceiling: document.getElementById('ceiling').value,
        SafetyAlarm: document.getElementById('SafetyAlarm').value,
        IntercomPhone: document.getElementById('IntercomPhone').value,
        VoiceAnnouncer: document.getElementById('VoiceAnnouncer').value,
        copLop: document.getElementById('copLop').value,
        copLopColor: document.getElementById('copLopColor').value,
        authentication: document.getElementById('authentication').value,
        authenticationNeed: document.getElementById('authenticationNeed').value,
        remarks: document.getElementById('remarks').value,
        buildingPhotos: document.getElementById('buildingPhotos').value,
        pitPhotos: document.getElementById('pitPhotos').value,
        headroomPhotos: document.getElementById('headroomPhotos').value,
        SelectedCOPLOP: document.getElementById('SelectedCOPLOP').value,
        SelectedCabin: document.getElementById('SelectedCabin').value,
        remainingPhotos: document.getElementById('remainingPhotos').value
    };

    // Generate the PDF using a library like jsPDF
    const doc = new jsPDF();

    // Add logo to the PDF
    const logoImg = new Image();
    logoImg.src = 'logo.png';
    logoImg.onload = () => {
        doc.addImage(logoImg, 'PNG', 10, 10, 40, 20); // Adjust the position and size of the logo

        doc.setFontSize(22);
        doc.text('Brio Elevators OTF Form', 70, 20); // Title positioning

        // Populate the PDF with form data
        doc.setFontSize(12);
        let y = 30; // Starting y position for text
        for (const key in formData) {
            doc.text(`${key.replace(/([A-Z])/g, ' $1')}: ${formData[key]}`, 10, y);
            y += 10; // Move down for the next line
        }

        // Save the PDF with the specified filename format
        const filename = `${formData.customerName}-OTF-${formData.city}-${formData.area}-${formData.floors}-${formData.model}.pdf`;
        doc.save(filename);
    };
}
