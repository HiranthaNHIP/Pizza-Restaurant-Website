<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="assets/images/rightsymbole.webp">
  <link rel="stylesheet" href="assets/css/backbutton.css">
  <title>confirmation</title>
</head>

<body>
  <!--this php flie use to got the values from html froms and store in the varibles after that we can insert that data to the database -->

  <?php
  include 'connection.php'; // include database connection file to this file to make database connection


  $cname = "";
  $phone = "";
  $numofguest = "";
  $resdate = "";
  $restime = "";
  $message = "";
  // html eken gatta values post method eka hara varibles walata asign karagannawa
  $cname = $_POST['name'];
  $phone = $_POST['phone'];
  $numofguest = $_POST['person'];
  $resdate = $_POST['reservation-date'];
  $restime = $_POST['time'];
  $message = $_POST['message'];


  // after that we can pass that varibles to html query to insert data to the database

  $sql = "INSERT INTO reservation (cName,	cPhone, numofguest, resDate,resTime,message) VALUES ('$cname', '$phone', '$numofguest', '$resdate','$restime','$message')";

  if (mysqli_query($conn, $sql)) {

    $imagePath = 'assets/images/done.png';
    echo '<img src="' . $imagePath . '" style="width: 100%;" alt="Your Image Description">';
  } else {
    $imagePath = 'assets/images/error.png'; 

    echo '<img src="' . $imagePath . '" style="width: 100%;" alt="Your Image Description">';
  }
  mysqli_close($conn);








  ?>


  <a href="reservation.html"><button style="position: relative;bottom: 250px;left:550px; ">
      <span class="transition"></span>
      <span class="gradient"></span>
      <span class="label">Back</span>
    </button>
  </a>

</body>

</html>