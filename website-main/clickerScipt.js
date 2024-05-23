
var mined = 0;
var p1 = "linear-gradient(to left, purple,  rgb(255, 0, 247), rgb(255, 0, 85))";
var p2 = "linear-gradient(to left, purple,  pink, red)";
var p3 = "linear-gradient(to left, white,  yellow, grey)";



var MineUpgrade = 1;
var autoMiner = 0 ;
var priceUp = 300;
var aCost = 50;




window.onload = function(){
    document.getElementById("Pointamount").innerText = "You have a " + mined + " $";
    document.getElementById("costs").innerText = "Cost "+ priceUp + "$";
    document.getElementById("l").innerText = "Mining Level: " + MineUpgrade;
    document.getElementById("aCost").innerText = "Cost " + aCost + "$"
    document.getElementById("mLvl").innerText = "Mining level " + MineUpgrade;
    document.getElementById("aM").innerText = "Mine addional " + autoMiner;


}
function back(){
    window.location.assign("index.html");
}

function actionFortune(){
  mined += autoMiner * 0.5


}



function bAutoMiner(){
if(mined >= aCost){
    mined -= aCost;
    autoMiner +=1;
    document.getElementById("Pointamount").innerText = "You have a " + mined + " $";
    aCost = aCost * 2 - 15
    document.getElementById("aCost").innerText = "Cost " + aCost + "$"
    document.getElementById("aM").innerText = "Mine Addional " + autoMiner;
    


} else{
    return false;
}


}


 





function mine(){
mined += MineUpgrade;
wait(15000);
document.getElementById("Pointamount").innerText = "You have a " + mined + " $";




}





function mineupg(){
   priceUp = 300 * MineUpgrade + (20 * autoMiner);
   document.getElementById("costs").innerText = priceUp + "$";

   if(mined >= priceUp){
    mined = mined - priceUp;
    MineUpgrade +=1
    document.getElementById("Pointamount").innerText = "You have a " + mined + " $";
    priceUp = 300 * MineUpgrade + (20 * autoMiner);
    document.getElementById("l").innerText = "Mining Level: " + MineUpgrade;
    document.getElementById("mLvl").innerText = "Mining level " + MineUpgrade;
    document.getElementById("costs").innerText = priceUp + "$";
   }
   else{
    console.log("You don't have enough $");
   }
    
}


function wait(ms){

    const date = Date.now();
    let currentDate = null;

    do{
        currentDate = Date.now

    }while(currentDate - date < ms);

    


}
function changeTheme(){
    
   document.body.style.backgroundImage = "linear-gradient(to left, purple,  blue, aqua)";
}

function otherTheme(value){

switch(value){
 case "first":
    document.body.style.backgroundImage = p1;
    break;
 case "second":
        document.body.style.backgroundImage = p2;
        break;
case "third":
      document.body.style.backgroundImage = p3;
        break;      



}
    
}


