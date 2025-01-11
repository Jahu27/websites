import { base,logPlayer} from "./base.js";
let BaseKeys = [];
let name , password; 

async function readJSON() {
    try{
        const response = await fetch("./keysBase.Json");
        const data = await response.json();
        BaseKeys = data;
    } catch(error){
        console.error('Error in getting data ',error);
    }
          
}




async function init() {
    name = document.getElementById("log").Value;
    password = document.getElementById("pass").Value;
    await readJSON();
    base()
    
    
}







export {};    