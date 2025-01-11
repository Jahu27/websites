let database = [];



function addUserToBase(){

}


function removeUserFromBase(){

}

function getUserByLogin(arrayData = [],loginName){
    for(let i =0; i< arrayData.length; i++){
      if(arrayData[i].login == loginName){
          console.log("data founded")
          return arrayData[i];

      }
    }
}
function logPlayer(arrayData =[],loginName,Password){
  
    for(let i =0; i< arrayData.length; i++){
      if(arrayData[i].login == loginName && arrayData[i].password == Password){
          
          return true;

      }
    }
    return false;


}


async function readJSON() {
  try{
      const response = await fetch("./userBase.Json");
      const data = await response.json();
      database = data;
  } catch(error){
      console.error('Error in getting data ',error);
  }
        
}




async function base() {
  await readJSON();

  
  
}
async function base(login) {
  await readJSON();
 
  
  
}
async function base(login,password) {
  await readJSON();
  let correct = logPlayer(database,login,password)
  
  
}


export {base,logPlayer};


