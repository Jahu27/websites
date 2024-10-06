var cards=['A',1,2,3,4,5,6,7,8,9,10,'J','Q','K']
var playerCards=[]
var croupierCards=[]
var coins = 1000;
var betValue =0;


$("#bets button").click(function(t){
    amount = $(t).attr("value")
  alert(amount);
});


function start(){
    $("#setGame").css("display", "none");
    $("#table").css("display", "block");
}


function random(){
    var number = Math.floor(Math.random()*15)




    return number
}
function createCard(number){
    


}
$("#playerAmount").html( );