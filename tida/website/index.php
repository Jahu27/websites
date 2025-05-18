<?php
session_start();
if(isset($_SESSION["id"])){
  session_unset();
  header("Location: index.php");
}
unset($_SESSION["name"]);


include("dataBaseManager.php");



?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

    <link rel="stylesheet" href="ui.css">

</head>
<body>
    
    <div id = "loginBody">
       <form method="POST" action="index.php" >
        <label for="log">Login</label>
        <input type="text" required id="log" name="log"><br>
        
        <label for="pass">Password</label>
        <input type="password" required id="pass" name="pass"><br>
        <input type="submit" value="LOG IN"> 
       </form>
       


    </div>
    
    
</body>





</html>
<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){
 
  $login = $_POST["log"];
  $password = $_POST["pass"];
  $sql = "Select * from personel where name like '{$login}' and password like '{$password}'";
  if(dbContains($sql,true)){
    
    $data = getValues($sql,["school","name"]);
    $_SESSION["id"] = $data[0][0];
    $_SESSION["name"] = $data[0][1];
    header("Location: Keys.php");
    
  }

  
  }





?>