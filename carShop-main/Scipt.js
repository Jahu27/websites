function selection(){
    var select = document.getElementById("cars");
    var value = select.value;

    switch (value){
        case "all":
            var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    divs[i].style.display = "block";
                }
            break

            case "Renault":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("Renault")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

            case "niss":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("Nissan")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

            case "Merc":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("Merc")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

            case "audi":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("audi")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

            }
 }



 datas = [ 
   
    {
       "typ": "RS 5 Coupé",
       "moc": "Moc: 331 kW",
       "poj": "4163 cm(3)",
       "cen": "25000"
    },
    {
        "typ": "Audi A8 S8 TFSI",
        "moc": "Moc: 420 kW",
        "poj": "3993 cm3",
        "cen": "50000"
     },
     {
        "typ": "Audi R8 GT",
        "moc": "Moc: 456 kW",
        "poj": "5,2L",
        "cen": "100000"
     },
     {
        "typ": "Renault Austral",
        "moc": "Moc: 146 kW",
        "poj": "5,2L",
        "cen": "23000"
     },
     {
        "typ": "Renault Koleos",
        "moc": "Moc: 116 Kw",
        "poj": "65L",
        "cen": "20000"
     },
     {
        "typ": "megane e-tech electric",
        "moc": "Moc: 160 kW",
        "poj": "56 l",
        "cen": "24000"
     },
     {
        "typ": "Nissan Qashqai Acenta",
        "moc": "Moc: 140 kW",
        "poj": "1332cm(3)",
        "cen": "32000"
     },
     {
        "typ": "Nissana Juke",
        "moc": "Moc: 39kwh",
        "poj": "56 l",
        "cen": "26700"
     },
     {
        "typ": "Nissan X-Trail",
        "moc": "Moc: 150 kW",
        "poj": "62L",
        "cen": "3200"
     },
     {
        "typ": "Mercedes Glc 4MATIC",
        "moc": "Moc: 150 kW + 100 kW",
        "poj": "58L",
        "cen": "4200"
     },
     {
        "typ": "Mercedes limuzyna Klasy A",
        "moc": "Moc: 160kW",
        "poj": "63L",
        "cen": "32000"
     },
     
     {
        "typ": "Coupé Klasy E",
        "moc": "Moc: 170kW",
        "poj": "60L",
        "cen": "52000"
     },


     

   
]


function getData(code){
   sessionStorage.setItem("typ", datas[code].typ );
   sessionStorage.setItem("power", datas[code].moc );
   sessionStorage.setItem("poj", datas[code].poj);
   sessionStorage.setItem("cena", datas[code].cen );
   
  location.href = "Vechile.html";
  
}
var cena = 0 ;

function data(){
   var type = sessionStorage.getItem("typ")
   var P = sessionStorage.getItem("power")
   var cap = sessionStorage.getItem("poj")
   var price = sessionStorage.getItem("cena")
   
   document.getElementById("typA").innerText = "Model: " + type;
   document.getElementById("mocA").innerText = "Moc: " + P;
   document.getElementById("pojA").innerText = "Pojemność: " + cap;
   document.getElementById("cenA").innerText = "Cena: " + price;

   cena = Number(price);

}

window.onload = (event) => {
  data();

 };
 onchange = function (e) {  document.getElementById("cenA").innerText = "Cena: " + cena}
 var s1 =0;
 var s2 = 0;
 

  var id = ""

 function changeer(id){
   var idp = id

   switch(id){
      case "ub":
         if(s1 ==0){
            s1 = 1 ;
            cena +=1000;
            document.getElementById("cenA").innerText = "Cena: " + cena;
            break;
         }
         else{
            s1=0
            cena -=1000;
            document.getElementById("cenA").innerText = "Cena: " + cena;
            break;
         }
         case "akc":
            if(s2 ==0){
               s2 =1  ;
               cena +=700;
               document.getElementById("cenA").innerText = "Cena: " + cena;
               break;
            }
            else{
               s2=0
               cena -=700;
               document.getElementById("cenA").innerText = "Cena: " + cena;
               break;
            }   

   }





   

 }
 var les = document.getElementById("le").checked
 var p = document.getElementById("ca").checked
 function check(co){
   switch(co){
      case 'le':
         document.getElementById("le").checked = true;
         document.getElementById("ca").checked = false;
         break;
      case 'cas':
         document.getElementById("le").checked = false;
         document.getElementById("ca").checked = true;
         break;

   

   }
 }


 function accept(){
  var ra = Math.floor(Math.random() * 20) +1 ;
 
   alert("auto zostanie dostarczone dnia " + ra + " sierpnia");
   location.href = "index.html";
 }


   






 