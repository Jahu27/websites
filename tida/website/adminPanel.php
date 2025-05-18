<?php
session_start();
include("dataBaseManager.php");
 unset($but);
?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Forms Page - Personal Creator, Add Class, Add School</title>
<link rel='stylesheet' href="admin.css">
</head>
<body>
    
    
  <div class="container">
    <h1>Data Entry Forms</h1>

    <form method='POST' autocomplete="off" novalidate>
      <h2>Personal Creator</h2>
      <label for="pc-name">Name</label>
      <input type="text" id="pc-name" name="name" placeholder="Enter your name" required />

      <label for="pc-password">Password</label>
      <input type="password" id="pc-password" name="password" placeholder="Enter password" required />

      <label for="pc-school">School</label>
      <select id="pc-school" name="school" required>
        <option value="" disabled selected>Select a school</option>
        <?php
            $data = getValues("Select * from schools",['school_name','school_id']);
            foreach($data as $row){
                echo("<option value={$row[1]} >{$row[0]}</option>");
            }
        ?>
      </select>

      <button type="submit" name='cbutton' value="personel">Create Personal</button>
    </form>

    <form method='POST' autocomplete="off" novalidate>
      <h2>Add Class</h2>
      <label for="ac-school">School</label>
      <select id="ac-school" name="school" required>
        <option value="" disabled selected>Select a school</option>
         <?php
            $data = getValues("Select * from schools",['school_name','school_id']);
            foreach($data as $row){
                echo("<option value={$row[1]} >{$row[0]}</option>");
            }
        ?>
      </select>

      <label for="ac-classname">Class Name</label>
      <input type="text" id="ac-classname" name="className" placeholder="Enter class name" required />

      <button type="submit" name='cbutton' value='class'>Add Class</button>
    </form>

    <form method='POST' autocomplete="off" novalidate>
      <h2>Add School</h2>
      <label for="as-name">Name</label>
      <input type="text" id="as-name" name="name" placeholder="Enter school name" required />

      <button type="submit" name='cbutton' value = 'school'>Add School</button>
    </form>
  </div>
  <div class="container">
    <button class="back-button" onclick="location.replace('Keys.php');">&larr; Back</button>
  
    
  </div>
</body>
</html>



<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $but = $_POST['cbutton'];

    if($but == "personel"){
        if(!isset($_POST['name']) || !isset($_POST['school']) || !isset($_POST['password'])){
           echo("<script>alert('Valid data')</script>");
            unset($but);
            header("Refresh:0");
        }else{
         $name = $_POST['name'];
        $pass = $_POST['password'];
        $school = $_POST['school'];
        updateData("insert into personel(name,password,school) values('{$name}','{$pass}',{$school})");
        header("Refresh:0");
        }

    }else if($but == "class"){
        if(!isset($_POST['className']) || !isset($_POST['school'])){
            echo("<script>alert('Valid data')</script>");
            unset($but);
        }else{
            $school  = $_POST['school'];
            $class = $_POST['className'];
            updateData("Insert into keymanager(class,school) values('{$class}',{$school})");
             header("Refresh:0");
        }
    }else if($but == "school"){
        if(!isset($_POST['name'])){
            echo("<script>alert('Valid data')</script>");
            unset($but);
            header("Refresh:0");
        }else{
        $name = $_POST['name'];
         $highestID= getValues("Select school_id from schools ORDER BY school_id DESC limit 1",['school_id'])[0][0];

            $highestID+=1;
         updateData("Insert into schools(school_id,school_name) values({$highestID},'{$name}')");
         header("Refresh:0");
        }
    }

}

?>

