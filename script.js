// Function to download the form data as a PDF
async function downloadPDF() {
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

    const { jsPDF } = window.jspdf; // Use the jsPDF library

    // Create a new PDF document
    const doc = new jsPDF();

    // Create a promise to load the logo image
    const logoImg = new Image();
    logoImg.src = 'logo.png';
    
    logoImg.onload = () => {
        doc.addImage(logoImg, 'PNG', 10, 10, 40, 20); // Adjust position and size of logo

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
