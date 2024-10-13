function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Check if logo exists
  doc.addImage('logo.png', 'PNG', 10, 10, 30, 30);
  doc.text('Brio Elevators OTF Form', 50, 20);

  // Sales Team Section
  doc.text("Sales Team", 20, 40);
  doc.text("Sales Person: " + document.getElementById('salesPerson').value, 20, 50);
  doc.text("Team Leader Involved: " + document.getElementById('teamLeader').value, 20, 60);

  // Customer Details Section
  doc.text("Customer Details", 20, 80);
  doc.text("Customer Name: " + document.getElementById('customerName').value, 20, 90);
  doc.text("Area: " + document.getElementById('area').value, 20, 100);
  doc.text("City: " + document.getElementById('city').value, 20, 110);
  doc.text("Billing Address: " + document.getElementById('billingAddress').value, 20, 120);
  doc.text("Shipping Address: " + document.getElementById('shippingAddress').value, 20, 130);
  doc.text("Contact Number: " + document.getElementById('contactNumber').value, 20, 140);
  doc.text("Email ID: " + document.getElementById('email').value, 20, 150);
  doc.text("Alternate Contact Name: " + document.getElementById('altContactName').value || 'N/A', 20, 160);
  doc.text("Alternate Contact Number: " + document.getElementById('altContactNumber').value || 'N/A', 20, 170);
  doc.text("Final Quotation Number: " + document.getElementById('finalQuotation').value, 20, 180);
  doc.text("Date of Payment Collected: " + document.getElementById('datePaymentCollected').value, 20, 190);
  doc.text("Order Taken Date: " + document.getElementById('orderTakenDate').value, 20, 200);
  doc.text("Promised Delivery in Months from Signing the Drawing: " + document.getElementById('deliveryMonths').value, 20, 210);
  doc.text("Cash & Account Commitments: " + document.getElementById('cashAccountCommitments').value || 'N/A', 20, 220);

  // New page for Order Details
  doc.addPage();
  
  // Order Details Section
  doc.text("Order Details", 20, 20);
  doc.text("Model: " + document.getElementById('model').value, 20, 30);
  doc.text("Shaft: " + document.getElementById('shaft').value, 20, 40);
  doc.text("Shaft Color: " + document.getElementById('shaftColor').value, 20, 50);
  doc.text("Installation Type: " + document.getElementById('installationType').value, 20, 60);
  doc.text("Shaft Width (mm): " + document.getElementById('shaftWidth').value, 20, 70);
  doc.text("Shaft Depth (mm): " + document.getElementById('shaftDepth').value, 20, 80);
  doc.text("Pit (mm): " + document.getElementById('pit').value, 20, 90);
  doc.text("Headroom (mm): " + document.getElementById('headroom').value, 20, 100);
  doc.text("Travel Height (mm): " + document.getElementById('travelHeight').value, 20, 110);
  doc.text("Floor to Floor Distance (mm): " + document.getElementById('floorToFloorDistance').value, 20, 120);
  doc.text("Payload (kg): " + document.getElementById('payload').value, 20, 130);
  doc.text("No of Floors: " + document.getElementById('floors').value, 20, 140);

  // New page for Cabin Details
  doc.addPage();
  
  // Cabin Details Section
  doc.text("Cabin Details", 20, 20);
  doc.text("Cabin Type: " + document.querySelector('input[name="cabinType"]:checked')?.value || 'N/A', 20, 30);
  doc.text("Glass Wall: " + (document.getElementById('glassYes')?.checked ? "Yes" : "No"), 20, 40);
  doc.text("Cabin Design:", 20, 50);
  doc.text("A side: " + (document.getElementById('cabinDesignA').value || 'N/A'), 20, 60);
  doc.text("B side: " + (document.getElementById('cabinDesignB').value || 'N/A'), 20, 70);
  doc.text("C side: " + (document.getElementById('cabinDesignC').value || 'N/A'), 20, 80);
  doc.text("Door Side: " + (document.getElementById('cabinDesignDoor').value || 'N/A'), 20, 90);
  doc.text("Handrail: " + (document.getElementById('handrailYes')?.checked ? "Yes" : "No"), 20, 100);
  doc.text("Ceiling: " + (document.querySelector('input[name="ceiling"]:checked')?.value || 'N/A'), 20, 110);
  doc.text("Cabin Flooring: " + document.getElementById('cabinFlooring').value, 20, 120);
  doc.text("Door Type: " + document.getElementById('doorType').value, 20, 130);
  doc.text("Door Opening (mm): " + document.getElementById('doorOpening').value, 20, 140);

  // New page for Additional Features
  doc.addPage();

  // Additional Features Section
  doc.text("Additional Features", 20, 20);
  doc.text("Safety Alarm: " + (document.getElementById('safetyAlarmYes')?.checked ? "Yes" : "No"), 20, 30);
  doc.text("Intercom Phone: " + (document.getElementById('intercomPhoneYes')?.checked ? "Yes" : "No"), 20, 40);
  doc.text("Voice Announcer: " + (document.getElementById('voiceAnnouncerYes')?.checked ? "Yes" : "No"), 20, 50);

  // New page for COP/LOP Details
  doc.addPage();

  // COP/LOP Details Section
  doc.text("COP/LOP Details", 20, 20);
  doc.text("COP/LOP: " + (document.getElementById('button')?.checked ? "Button" : "Other"), 20, 30);
  doc.text("COP/LOP Color: " + (document.getElementById('copLopColor')?.value || 'N/A'), 20, 40);
  doc.text("Authentication: " + (document.getElementById('rfid')?.checked ? "RFID" : "Other"), 20, 50);
  doc.text("Authentication Need: " + document.getElementById('authenticationNeed').value, 20, 60);

  // New page for Additional Remarks
  doc.addPage();

  // Additional Remarks Section
  doc.text("Additional Remarks", 20, 20);
  doc.text("Please provide any other details or special cases: " + document.getElementById('remarks').value, 20, 30);

  // File naming convention
  const customerName = document.getElementById('customerName').value || "Customer";
  const city = document.getElementById('city').value || "City";
  const area = document.getElementById('area').value || "Area";
  const floors = document.getElementById('floors').value || "Floors";
  const model = document.getElementById('model').value || "Model";

  const fileName = `${customerName}-OTF-${city}-${area}-${floors}-${model}.pdf`.replace(/ /g, "_");

  doc.save(fileName);
}
