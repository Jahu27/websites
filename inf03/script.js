
var userName = "";
var surname = "";
var mail = "";
var report = "";

var isAgreement

function send(){
userName = document.getElementById("name").value;
surname = document.getElementById("surname").value;
mail = document.getElementById("mail").value;
report =  document.getElementById("report").value;
isAgreement = document.getElementById("agreement").checked;
var info = document.getElementById("info")
if(!isAgreement){
    
    info.innerHTML = "Musisz sie zapoznać najpierw z regulaminem"
    info.style.color = "red";


} else{

    info.innerHTML = userName.toUpperCase() + " " + surname.toUpperCase() + "<br> Treść twojej sprawy " + report
    info.style.color  = "navy"
}

}

function reset(){
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("report").value = "";
    document.getElementById("agreement").checked = false;
}