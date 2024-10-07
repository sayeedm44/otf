function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const margin = 20; // Margin from the top
    let y = margin; // Initial Y position for text

    // Add logo and title only on the first page
    doc.addImage('logo.png', 'PNG', 10, 10, 30, 30);
    doc.text('Brio Elevators OTF Form', 50, 20);
    y += 30; // Move Y position down after adding logo and title

    // Function to add text and handle page breaks
    const addText = (text) => {
        const lineHeight = 10; // Height of each line of text
        if (y + lineHeight > doc.internal.pageSize.height - margin) {
            doc.addPage();
            y = margin; // Reset Y position for new page
            // Do not add logo and title on new pages
        }
        doc.text(text, 20, y);
        y += lineHeight; // Move down for next line
    };

    // Customer Details
    addText("Customer Details");
    addText("Sales Person: " + document.getElementById('salesPerson').value);
    addText("Team Leader Involved: " + document.getElementById('teamLeader').value);
    addText("Customer Name: " + document.getElementById('customerName').value);
    addText("Billing Address: " + document.getElementById('billingAddress').value);
    addText("City: " + document.getElementById('city').value);
    addText("Area: " + document.getElementById('area').value);
    addText("Final Quotation Number: " + document.getElementById('finalQuotation').value);
    addText("Shipping Address: " + document.getElementById('shippingAddress').value);
    addText("Referred By: " + document.getElementById('referredBy').value);
    addText("Contact Number: " + document.getElementById('contactNumber').value);
    addText("Alternate Contact Name: " + document.getElementById('altContactName').value);
    addText("Alternate Contact Number: " + document.getElementById('altContactNumber').value);
    addText("Email ID: " + document.getElementById('email').value);
    addText("Date of Payment Collected: " + document.getElementById('datePaymentCollected').value);
    addText("Order Taken Date: " + document.getElementById('orderTakenDate').value);
    addText("Promised Delivery: " + document.getElementById('deliveryMonths').value + " months");

    // Collect new data
    addText("No of Stops: " + document.getElementById('noOfStops').value);
    addText("Shaft Width: " + document.getElementById('shaftWidth').value + " mm");
    addText("Shaft Depth: " + document.getElementById('shaftDepth').value + " mm");
    addText("Travel Height: " + document.getElementById('travelHeight').value + " mm");
    addText("Pit: " + document.getElementById('pit').value + " mm");
    addText("Headroom: " + document.getElementById('headroom').value + " mm");
    addText("Payload: " + document.getElementById('payload').value + " kg");

    // Landing Door Type
    addText("Landing Door Type: " + document.getElementById('landingDoorType').value);

    // Cabin Type (checkboxes)
    const cabinType = [];
    if (document.getElementById('classic').checked) cabinType.push('Classic');
    if (document.getElementById('pro').checked) cabinType.push('Pro');
    if (document.getElementById('elegance').checked) cabinType.push('Elegance');
    addText("Cabin Type: " + cabinType.join(', '));

    // More fields (like Glass Wall, Handrail, Ceiling)
    const glassWall = document.getElementById('glassYes').checked ? "Yes" : "No";
    addText("Glass Wall: " + glassWall);

    const handrail = document.getElementById('handrailYes').checked ? "Yes" : "No";
    addText("Handrail: " + handrail);

    const ceiling = [];
    if (document.getElementById('stripLight').checked) ceiling.push('Strip Light');
    if (document.getElementById('spotLight').checked) ceiling.push('Spotlight');
    addText("Ceiling: " + ceiling.join(', '));

    // Order Details
    addText("Order Details");
    addText("Model: " + document.getElementById('model').value);
    addText("Shaft: " + (document.getElementById('shaftWith').checked ? "With Shaft" : "Without Shaft"));
    addText("Installation Type: " + (document.getElementById('indoor').checked ? "Indoor" : "Outdoor"));
    addText("No of Floors: " + document.getElementById('floors').value);

    // COP/LOP Details
    addText("COP/LOP");
    
    // Collect COP/LOP Details
    addText("COP/LOP: " + (document.getElementById('button').checked ? "Button" : "") + 
            (document.getElementById('touchPanels').checked ? ", Touch Panels" : "") + 
            (document.getElementById('fullTouch').checked ? ", Full Touch Vision" : ""));
    
    addText("Authentication: " + (document.getElementById('rfid').checked ? "RFID" : "") + 
            (document.getElementById('pin').checked ? ", PIN" : ""));
    
    addText("Authentication Need: " + document.getElementById('authenticationNeed').value);
    
    addText("Shaft Color: " + document.getElementById('shaftColor').value);

    // File naming convention
    const customerName = document.getElementById('customerName').value;
    const city = document.getElementById('city').value;
    const area = document.getElementById('area').value;
    const floors = document.getElementById('floors').value;
    const model = document.getElementById('model').value;

    const fileName = `${customerName}-OTF-${city}-${area}-${floors}-${model}.pdf`;

    doc.save(fileName);
}
