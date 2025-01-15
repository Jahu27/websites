import {logPlayer,readUserJSON,readKeysJSON} from "./base.js";
let Base = [];
let name , password; 




async function init() {
    Base = await readUserJSON(Base);
    name = document.getElementById("log").value;
    password = document.getElementById("pass").value;
    console.log(logPlayer(Base,name,password))
    
    
    
}







window.init = init;  