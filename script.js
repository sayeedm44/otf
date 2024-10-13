function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Add logo only to the first page
  doc.addImage('logo.png', 'PNG', 10, 10, 30, 30);
  doc.text('Brio Elevators OTF Form', 50, 20);

  // Customer Details
  doc.text("Customer Details", 20, 40);
  doc.text("Sales Person: " + document.getElementById('salesPerson').value, 20, 50);
  doc.text("Team Leader Involved: " + document.getElementById('teamLeader').value, 20, 60);
  doc.text("Customer Name: " + document.getElementById('customerName').value, 20, 70);
  doc.text("Billing Address: " + document.getElementById('billingAddress').value, 20, 80);
  doc.text("City: " + document.getElementById('city').value, 20, 90);
  doc.text("Area: " + document.getElementById('area').value, 20, 100);
  doc.text("Final Quotation Number: " + document.getElementById('finalQuotation').value, 20, 110);
  doc.text("Shipping Address: " + document.getElementById('shippingAddress').value, 20, 120);
  doc.text("Contact Number: " + document.getElementById('contactNumber').value, 20, 130);
  doc.text("Email ID: " + document.getElementById('email').value, 20, 140);
  doc.text("Date of Payment Collected: " + document.getElementById('datePaymentCollected').value, 20, 150);
  doc.text("Order Taken Date: " + document.getElementById('orderTakenDate').value, 20, 160);
  doc.text("Promised Delivery: " + document.getElementById('deliveryMonths').value + " months", 20, 170);

  // Start new page for additional details
  doc.addPage();

  // Collect new data with increased spacing
  let currentY = 20; // Starting Y position for new page
  const spacing = 10; // Space between lines

  doc.text("Model: " + document.getElementById('model').value, 20, currentY);
  currentY += spacing;
  doc.text("Shaft: " + document.getElementById('shaft').value, 20, currentY);
  currentY += spacing;
  doc.text("Shaft Color: " + document.getElementById('shaftColor').value, 20, currentY);
  currentY += spacing;
  doc.text("Installation Type: " + document.getElementById('installationType').value, 20, currentY);
  currentY += spacing;
  doc.text("Shaft Width: " + document.getElementById('shaftWidth').value + " mm", 20, currentY);
  currentY += spacing;
  doc.text("Shaft Depth: " + document.getElementById('shaftDepth').value + " mm", 20, currentY);
  currentY += spacing;
  doc.text("Pit: " + document.getElementById('pit').value + " mm", 20, currentY);
  currentY += spacing;
  doc.text("Headroom: " + document.getElementById('headroom').value + " mm", 20, currentY);
  currentY += spacing;
  doc.text("Travel Height: " + document.getElementById('travelHeight').value + " mm", 20, currentY);
  currentY += spacing;
  doc.text("Floor to Floor Distance: " + document.getElementById('floorToFloorDistance').value + " mm", 20, currentY);
  currentY += spacing;
  doc.text("Payload: " + document.getElementById('payload').value + " kg", 20, currentY);
  currentY += spacing;
  doc.text("No of Floors: " + document.getElementById('floors').value, 20, currentY);
  currentY += spacing;

  // Cabin Details
  doc.text("Cabin Details", 20, currentY);
  currentY += spacing;

  const cabinType = [];
  if (document.getElementById('classic').checked) cabinType.push('Classic');
  if (document.getElementById('pro').checked) cabinType.push('Pro');
  if (document.getElementById('elegance').checked) cabinType.push('Elegance');
  doc.text("Cabin Type: " + cabinType.join(', '), 20, currentY);
  currentY += spacing;

  const glassWall = document.getElementById('glassYes').checked ? "Yes" : "No";
  doc.text("Glass Wall: " + glassWall, 20, currentY);
  currentY += spacing;

  const handrail = document.getElementById('handrailYes').checked ? "Yes" : "No";
  doc.text("Handrail: " + handrail, 20, currentY);
  currentY += spacing;

  const ceiling = [];
  if (document.getElementById('stripLight').checked) ceiling.push('Strip Light');
  if (document.getElementById('spotLight').checked) ceiling.push('Spotlight');
  doc.text("Ceiling: " + ceiling.join(', '), 20, currentY);
  currentY += spacing;

  doc.text("Cabin Flooring: " + document.getElementById('cabinFlooring').value, 20, currentY);
  currentY += spacing;

  // Door Details
  doc.text("Door Details", 20, currentY);
  currentY += spacing;
  doc.text("Door Type: " + document.getElementById('doorType').value, 20, currentY);
  currentY += spacing;
  doc.text("Door Opening: " + document.getElementById('doorOpening').value + " mm", 20, currentY);
  currentY += spacing;

  // Additional Features
  doc.addPage();
  currentY = 20; // Reset Y position for new page
  doc.text("Additional Features", 20, currentY);
  currentY += spacing;

  const safetyAlarm = document.getElementById('safetyAlarmYes').checked ? "Yes" : "No";
  doc.text("Safety Alarm: " + safetyAlarm, 20, currentY);
  currentY += spacing;

  const intercomPhone = document.getElementById('intercomPhoneYes').checked ? "Yes" : "No";
  doc.text("Intercom Phone: " + intercomPhone, 20, currentY);
  currentY += spacing;

  const voiceAnnouncer = document.getElementById('voiceAnnouncerYes').checked ? "Yes" : "No";
  doc.text("Voice Announcer: " + voiceAnnouncer, 20, currentY);
  currentY += spacing;

  // COP/LOP Details
  doc.addPage();
  currentY = 20; // Reset Y position for new page
  doc.text("COP/LOP", 20, currentY);
  currentY += spacing;

  const copLopOptions = [];
  if (document.getElementById('button').checked) copLopOptions.push('Button');
  if (document.getElementById('touchPanels').checked) copLopOptions.push('Touch Panels');
  if (document.getElementById('fullTouch').checked) copLopOptions.push('Full Touch Vision');
  doc.text("COP/LOP: " + copLopOptions.join(', '), 20, currentY);
  currentY += spacing;

  const copLopColor = [];
  if (document.getElementById('colorWhite').checked) copLopColor.push('White');
  if (document.getElementById('colorBlack').checked) copLopColor.push('Black');
  doc.text("COP/LOP Color: " + copLopColor.join(', '), 20, currentY);
  currentY += spacing;

  const authOptions = [];
  if (document.getElementById('rfid').checked) authOptions.push('RFID');
  if (document.getElementById('pin').checked) authOptions.push('PIN');
  doc.text("Authentication: " + authOptions.join(', '), 20, currentY);
  currentY += spacing;

  doc.text("Authentication Need: " + document.getElementById('authenticationNeed').value, 20, currentY);
  currentY += spacing;

  // Additional Remarks
  doc.text("Additional Remarks: " + document.getElementById('remarks').value, 20, currentY);

  // File naming convention
  const customerName = document.getElementById('customerName').value || "Customer";
  const city = document.getElementById('city').value || "City";
  const area = document.getElementById('area').value || "Area";
  const floors = document.getElementById('floors').value || "Floors";
  const model = document.getElementById('model').value || "Model";

  const fileName = `${customerName}-OTF-${city}-${area}-${floors}-${model}.pdf`.replace(/ /g, "_");

  doc.save(fileName);
}
