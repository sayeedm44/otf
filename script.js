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

  // Order Details
  doc.text("Order Details", 20, 210);
  doc.text("Model: " + document.getElementById('model').value, 20, 220);
  doc.text("Shaft: " + (document.getElementById('shaftWith').checked ? "With Shaft" : "Without Shaft"), 20, 230);
  doc.text("Installation Type: " + (document.getElementById('indoor').checked ? "Indoor" : "Outdoor"), 20, 240);
  doc.text("No of Floors: " + document.getElementById('floors').value, 20, 250);

  // COP/LOP Details
  doc.text("COP/LOP", 20, 260);
 
