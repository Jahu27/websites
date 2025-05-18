<?php
//getConnect() // only use for here
//dbContains(query,oneRow?) check if db contains something in number on or more
//getValues(query,columns) //return array with  rows and selected columns
//updateData(query) add/update/remove data from query
//reload()


function getConnect(){
    $server  = "localhost";
    $user = "root";
    $password ="";
    $database = "schoolkeysmanager";

    $connection = mysqli_connect($server,$user,$password,$database);

    if($connection -> connect_errno) {
        return NULL;
    }
    return $connection;    
}

function dbContains($sql,$isOne){
    $resault = getConnect()->query($sql);
        $data = [];
        $i = 0;
        if($isOne){
            if($resault->num_rows == 1){
            return true;
             }
        }else{
            if($resault->num_rows > 0){
                return true;
            }
        }
    
    return false;


}

function getValues($sql,$columns = []) {
    $resault = getConnect()->query($sql);
        $data = [];
        $i = 0;
    while($row = $resault->fetch_assoc()){
            $tab = [];
            foreach($columns as $var){
                array_push($tab,$row[$var]);
            }
            $data[$i++] = $tab;
        }
    return $data;
}


function updateData($query) {
    
    getConnect()->query($query);
}








?>