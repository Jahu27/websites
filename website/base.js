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
  console.log(arrayData.length)
    for(let i =0; i< arrayData.length; i++){
      if(arrayData[i].login == loginName && arrayData[i].password == Password){
          
          return true;

      }
    }
    return false;


}


async function readUserJSON() {
  
  try{
    let Base;
      const response = await fetch("./userBase.Json");
      const data = await response.json();
      Base = data;
      return Base;
  } catch(error){
      console.error('Error in getting data ',error);
  }
        
}






async function readKeysJSON() {
    try{
        let Base;
        const response = await fetch("./keysBase.Json");
        const data = await response.json();
        Base= data;
        return Base;
    } catch(error){
        console.error('Error in getting data ',error);
    }
          
}



export {logPlayer,readUserJSON,readKeysJSON,getUserByLogin};


