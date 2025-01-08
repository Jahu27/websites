let database = [
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

export function listUsers(){
  for(var i =0; i < database.length;i++){
      console.log(database[i].login + "\n" + database[i].password + "\n" + database[i].UUID + "\n=============" );
  }

}




