// this codes are used to link sms gateway API
document.getElementById("submitbtn").addEventListener("click", function () {
 
    var phone = document.forms["RSfrom"]["phone"].value;
    var person = document.forms["RSfrom"]["person"].selectedIndex;
    var date = document.forms["RSfrom"]["reservation-date"].value;
    var time = document.forms["RSfrom"]["time"].selectedIndex;
   
    if (document.getElementById('cname').value== "") {
      
      document.RSfrom.name.focus();
     
    }
    var phonePattern = /^\+94\d{9}$/; // Replace with the appropriate pattern
    if (!phone.match(phonePattern)) {
     
      document.RSfrom.phone.focus();
      
    }
  
    // Person validation
    if (person == "0") {
      document.RSfrom.person.focus();
    }
  
    // Date validation
    if (date === "") {
        document.RSfrom.reservation-date.focus();
    }
  
    // Time validation
    if (time =="0") {
        document.RSfrom.time.focus();
    }
 else
 {
      // Get values from input fields or other sources
  var apiKey = "olmPneTktY6FDnUIJPE2";
  var user_id = "25275";
  var numbers = document.getElementById("telephone").value; 
  var sender_id = "NotifyDEMO";
  var name = document.getElementById("cname").value; 
  var Date = document.getElementById("Date").value; 
  var Time = document.getElementById("Time").value; 
  
  var message = "Dear "+name+ ",\r\n\r\nCongratulations! Your table reservation at Authur's Pizza has been successfully confirmed for "+Date+" at "+Time+" We are waiting provide you with a wonderful dining experience\r\n\r\nIf you have any special requests Please Contact us on\r\n0752228800\r\n\r\nThank you for choosing us.\r\n\r\nBest regards,\r\n\Arthur's Pizza " ;

  //  API URL
  var url = "https://app.notify.lk/api/v1/send" +
      "?user_id=" + user_id +
      "&api_key=" + apiKey +
      "&sender_id=" + sender_id +
      "&to=" + numbers +
      "&message=" + encodeURIComponent(message);

  // Send the HTTP POST request
  fetch(url, {
      method: "POST"
  })
  .then(response => {
      if (response.ok) {
          return response.text();
      } else {
          throw new Error("Error sending OTP: " + response.statusText);
      }
  })
  .then(data => {
      // Handle the response data as needed
      console.log("Response: " + data);
      alert("OTP Sent Successfully!");
  })
  .catch(error => {
      // Handle any errors that occurred during the fetch
      console.error("Error sending OTP: " + error.message);
      alert("Error sending OTP: " + error.message);
  });

 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  
});
