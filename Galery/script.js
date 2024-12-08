img = [["pn1.jpg","Przedstawia malunek Kosmos"],["pn2.jpg","Przedstawia Drzewo skaury a w tle góry"]
     ,["pn3.jpg","Przedstawia góre i gwieżdiste niebo"]];


document.getElementById("pict").src = "images/"+img[0][0];
document.getElementById("descp").innerHTML = img[0][1];

currentIndex = 0;


function next(){

    
    currentIndex = (currentIndex + 1) % img.length;
    
    document.getElementById("pict").src = "images/"+img[currentIndex][0];
    document.getElementById("descp").innerHTML = img[currentIndex][1];
}
function previous(){

    
    currentIndex = (currentIndex -1) % img.length;
    if(currentIndex < 0){
        currentIndex = 3-1
    }
    document.getElementById("pict").src = "images/"+img[currentIndex][0];
    document.getElementById("descp").innerHTML = img[currentIndex][1];

}