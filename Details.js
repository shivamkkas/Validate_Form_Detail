function validateForm() {
  let F_name = document.getElementById("firstname").value;
  let L_name = document.getElementById("lastname").value;
  let D_birth = document.getElementById("dob").value;
  let email = document.getElementById("mail").value;
  let message = document.getElementById("review").value;
  var fullName = F_name + " " + L_name;


  var displayText = "Hello, " + fullName + ".\n\n" +
    "You've submitted the form which concludes that your\n\n" +
    "Email Id is " + email + " and your DOB is " + D_birth + ".\n\n" +
    "We've received your message, which is\n\n" +
    "`" + message + "`.\n\n" +
    "Thank you";
  if (F_name != "" && D_birth != "" && email != "" && message != "") {
    alert(displayText)
  }


}