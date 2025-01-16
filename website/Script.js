import {logPlayer,readUserJSON,readKeysJSON,getUserByLogin} from "./base.js";
let Base = [];
let name , password; 
let user = 



async function init() {
    Base = await readUserJSON();
    name = document.getElementById("log").value;
    password = document.getElementById("pass").value;
    if(logPlayer(Base,name,password)){
        console.log("You logged");
        window.location.replace("Keys.html");
        user = getUserByLogin(Base,name)

    }
    
    
    
}

async function loadKeys(){
    Base = await readKeysJSON();
    for(let i =0; i< Base.lenght; i++){
        if(user.school == Base[i].school){
            console.log(Base[i].school);
        }
    }



}






window.loadKeys = loadKeys;
window.init = init;  