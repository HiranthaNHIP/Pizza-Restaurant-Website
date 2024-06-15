function validate() {
    
  var phone = document.forms["RSfrom"]["phone"].value;
  var person = document.forms["RSfrom"]["person"].selectedIndex;
  var date = document.forms["RSfrom"]["reservation-date"].value;
  var time = document.forms["RSfrom"]["time"].selectedIndex;
 
  if (document.getElementById('cname').value== "") {
    alert("Please provide your name!");
    document.RSfrom.name.focus();
    return false;
  }
  var phonePattern = /^\+94\d{9}$/; // srilakan phone number validation
  if (!phone.match(phonePattern)) {
    alert("Please enter a valid Contact number (+94XXXXXXXXX).");
    document.RSfrom.phone.focus();
    return false;
  }

  // Person validation
  if (person == "0") {
    alert("Please select the number of persons.");
    return false;
  }

  // Date validation
  if (date === "") {
    alert("Please select a reservation date.");
    return false;
  }

  // Time validation
  if (time =="0") {
    alert("Please select a reservation time.");
    return false;
  }

  // Message validation (optional)

  return true;
}

function formvalidate() {
    
  var name = document.forms["cuform"]["Name"].value;
  var email = document.forms["cuform"]["Email"].value;
  var Message = document.forms["cuform"]["Message"].value;
 
  if (name == "") {
    alert("Please provide your name!");
    document.cuform.Name.focus();
    return false;
  }
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid Email example@email.com.");
    document.cuform.Email.focus();
    return false;
  }

  // Person validation
  if (Message == "") {
    alert("Please Type a Message that you Want to send .");
    document.cuform.Message.focus();
    return false;
  }


  

  return true;
}





