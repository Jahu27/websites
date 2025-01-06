let databse = [
  {
    login: "ADMIN" ,
    password: "AD141",
    UUID: 0
  },




];

function addUser(){

}


function removeUser(){

}

export default function listUsers(){
  for(var i =0; i < databse.length;i++){
      console.log(databse[i].login + "\n" + databse[i].password + "\n" + databse[i].UUID + "\n=============" );
  }

}




