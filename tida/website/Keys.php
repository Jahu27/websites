<?php
session_start();
include("dataBaseManager.php");
if(!isset($_SESSION["id"])){
    
    header("Location: index.php");
}

$id = $_SESSION["id"];


function load(){
    $id = $_SESSION["id"];
    $sql = "Select * from keymanager where school like $id";
    $resault = "";
    if(!dbContains($sql,false)){
        echo"ERROR;";
        
    }
    $start = "<table border = 1><tr ><th>Class </th><th>given to</th><th>status </th><th>time </th> </tr>  ";
    $date = getValues($sql,['class','givenTo','keyStatus','keyTime']);
    $end = "</table>";
    foreach($date as $dt){
        $resault.=$start."<tr id = '$dt[0]' onclick='change(this)'><td>{$dt[0]}</td><td>{$dt[1]}</td><td>{$dt[2]}</td><td>{$dt[3]}</td> </tr> ".$end;

    }

        echo($resault);
        
}



?>


<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php
    $temp = getValues("Select school_name from schools where school_id like {$id}",['school_name']);
    echo($temp[0][0]);
    
    ?>
    </title>
    <link rel="stylesheet" href="key.css">
</head>
<body>    
    <button onclick ="location.replace('index.php')">Logout </button>
    <?php
        if($_SESSION['name'] == "Admin"){
            echo("<button onclick='location.replace(\"adminPanel.php\")'>Admin Panel </button>");
        }
        load();
    ?>

<div id="entryData" class="invisible">
        <form method="POST" > 
            <input type="text" name="classKey" > ;
            <input type="text" name = "name" placeholder="Name">;
            <button type="Submit" name = "cbutton" value = "lock">lock key </button> 
            <button type ="Submit" name="cbutton" value="unlock">Unlock Key </button>
        </form>
</div>
    <form method="POST">
      <button type="submit" name='cbutton' value="reset">Reset Keys </button>
    </form>

<script src="script.js"> </script>
</body>
</html>


<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(isset($_POST['cbutton'])){
        $but = $_POST['cbutton'] ;
        if($but == "reset"){
        $keys = getValues("Select * from keymanager ",['class']);
        $sql = "";
        foreach($keys as $ckey){
            $sql = "UPDATE keymanager set givenTo = NULL, keyStatus = NULL, keyTime= NULL where class like '{$ckey[0]}';";    
            updateData($sql); 
            
             
        }
        header("Location: Keys.php");
        
       
        }else if ($but =="lock"){
            $dateTime = date('Y-m-d H:i:s');
            $name = $_POST['name'];
            $status = "unavalible";
            $key = $_POST['classKey'];
            $sql = "UPDATE keymanager set givenTo = '{$name}', keyStatus = '{$status}', keyTime= '{$dateTime}' where class like '{$key}'";
            updateData($sql);
            header("Location: Keys.php");
            
        }else if($but == "unlock"){
            $key = $_POST['classKey'];
            $dateTime = date('Y-m-d H:i:s');
            $sql = "UPDATE keymanager set  keyStatus = 'Avalible', keyTime= '{$dateTime}' where class like '{$key}'";
            updateData($sql);
            header("Location: Keys.php");
        }
    
         
        }
         
   
     
     
}


?>