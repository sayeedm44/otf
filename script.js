function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Add logo and title on every page
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
  doc.text("Referred By: " + document.getElementById('referredBy').value, 20, 130);
  doc.text("Contact Number: " + document.getElementById('contactNumber').value, 20, 140);
  doc.text("Alternate Contact Name: " + document.getElementById('altContactName').value, 20, 150);
  doc.text("Alternate Contact Number: " + document.getElementById('altContactNumber').value, 20, 160);
  doc.text("Email ID: " + document.getElementById('email').value, 20, 170);
  doc.text("Date of Payment Collected: " + document.getElementById('datePaymentCollected').value, 20, 180);
  doc.text("Order Taken Date: " + document.getElementById('orderTakenDate').value, 20, 190);
  doc.text("Promised Delivery: " + document.getElementById('deliveryMonths').value + " months", 20, 200);

   // Collect new data
  doc.text("No of Stops: " + document.getElementById('noOfStops').value, 20, 80);
  doc.text("Shaft Width: " + document.getElementById('shaftWidth').value + " mm", 20, 90);
  doc.text("Shaft Depth: " + document.getElementById('shaftDepth').value + " mm", 20, 100);
  doc.text("Travel Height: " + document.getElementById('travelHeight').value + " mm", 20, 110);
  doc.text("Pit: " + document.getElementById('pit').value + " mm", 20, 120);
  doc.text("Headroom: " + document.getElementById('headroom').value + " mm", 20, 130);
  doc.text("Payload: " + document.getElementById('payload').value + " kg", 20, 140);

  // Landing Door Type
  doc.text("Landing Door Type: " + document.getElementById('landingDoorType').value, 20, 150);

  // Cabin Type (checkboxes)
  const cabinType = [];
  if (document.getElementById('classic').checked) cabinType.push('Classic');
  if (document.getElementById('pro').checked) cabinType.push('Pro');
  if (document.getElementById('elegance').checked) cabinType.push('Elegance');
  doc.text("Cabin Type: " + cabinType.join(', '), 20, 160);

  // More fields (like Glass Wall, Handrail, Ceiling)
  const glassWall = document.getElementById('glassYes').checked ? "Yes" : "No";
  doc.text("Glass Wall: " + glassWall, 20, 170);

  const handrail = document.getElementById('handrailYes').checked ? "Yes" : "No";
  doc.text("Handrail: " + handrail, 20, 180);

  const ceiling = [];
  if (document.getElementById('stripLight').checked) ceiling.push('Strip Light');
  if (document.getElementById('spotLight').checked) ceiling.push('Spotlight');
  doc.text("Ceiling: " + ceiling.join(', '), 20, 

  // Order Details
  doc.text("Order Details", 20, 210);
  doc.text("Model: " + document.getElementById('model').value, 20, 220);
  doc.text("Shaft: " + (document.getElementById('shaftWith').checked ? "With Shaft" : "Without Shaft"), 20, 230);
  doc.text("Installation Type: " + (document.getElementById('indoor').checked ? "Indoor" : "Outdoor"), 20, 240);
  doc.text("No of Floors: " + document.getElementById('floors').value, 20, 250);

  // COP/LOP Details
  doc.text("COP/LOP", 20, 260);


  // File naming convention
      const customerName = document.getElementById('customerName').value;
      const city = document.getElementById('city').value;
      const area = document.getElementById('area').value;
      const floors = document.getElementById('floors').value;
      const model = document.getElementById('model').value;

      const fileName = `${customerName}-${city}-${area}-${floors}-${model}.pdf`;

      doc.save(fileName);
 
