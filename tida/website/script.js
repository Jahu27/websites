obj = document.getElementById('entryData');
function change(key){

   
    document.getElementsByName('classKey')[0].value = key.id;
    if(obj.classList.contains("invisible")){
         obj.classList.remove("invisible");

    }


}


