function doPost(e) {
  const params = e.parameter;
  const name = params.name || "No name";
  const userEmail = params.email || "No email";
  const message = params.message || "No message";


  const subject = "Nouveau message du formulaire de contact";
  const body = "Nom: " + name + "\nEmail: " + userEmail + "\nMessage: " + message;


  const destination = "youcefboualili0@gmail.com"; 


  MailApp.sendEmail(destination, subject, body);

  
  return ContentService.createTextOutput("Message sent successfully.");
}
