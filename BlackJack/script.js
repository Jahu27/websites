//Varibles
var cards=[2,3,4,5,6,7,8,9,10,"J","Q","K","A"]
var playerCards=[]
var croupierCards=[]
var coins = 1000;
var betValue = 0;
var card_Types=["hearts","diamonds","spades","clubs"]
var card_images=["heart.jpg","diamonds.jpg","club.jpg","spade.jpg"]
var playedCard = {'0':[],'1':[],'2':[],'3':[]};
var inGame = false


function startGame(){
console.log(playedCard)
$('svg').remove();
this.playerCards = []
this.croupierCards = []


}


$("#playerCoins").html("You have: " + coins +  " Coins");
//setting bet
$("#bets button").click(function(){
    var amount = parseInt(this.value);
    if(coins - amount >= 0){
        betValue += amount
        coins -= amount
    }    
    $("#playerCoins").html("You have: " + coins +  " Coins");
    $("#betValue").html(`you set: ${betValue} bet`);
});

$("#resetBet").click(function(){
    coins +=betValue
    betValue = 0;
    $("#betValue").html(`you set: ${betValue} bet`);
    $("#playerCoins").html("You have: " + coins +  " Coins");
})

$("#options button:nth-child(1)").click(function() 
{

    if(playerCards.length < 6 ) {
    if(getAmount(false) <= 21) {
         cardAdder(false,false)}
            if(getAmount(false) > 21){
                $("#options button:nth-child(1)").attr("disabled",true) 
            }
   
    }});
$("#options button:nth-child(2)").click(function (){
    $("#options button:nth-child(1)").attr("disabled",true) 
    $("#options button:nth-child(2)").attr("disabled",true)
    croupierSystem();
    setTimeout(function(){winning()},5000);
    
})
//starting game with 2 diffrent card for each + croupier should have 1 card hidden 
function startDraw(){

    cardAdder(true,true);
    cardAdder(true,false);
    cardAdder(false,false);
    cardAdder(false,false);
}

function start(){
    if(betValue ==0){
            $("#noBet").html("fist add some bet to start")
        }
    else{

        startGame()
        $("#options button:nth-child(1)").removeAttr("disabled") 
        $("#options button:nth-child(2)").attr("disabled")
        $("#setGame").css("display", "none");
        $("#options button:nth-child(1)").removeAttr("disabled")
        $("#table").css("display", "block");
        $("#crAmount").html("");
        startDraw()
       
        

        
    }
   

}

function getAmount(isCroupier){
    var sum = 0
    if(isCroupier){
        croupierCards.forEach(e => sum+=parseInt(e))

        
    }
    else{
        playerCards.forEach(e => sum+=parseInt(e))

    }
    return sum;
} 

//function which setting add card to no makeing a duplicates(method croupier gonna hide visualy number of first card)  
function cardAdder(isCroupier,firstCard){ 
    var cardNumb = random(13)
    var imageNumb = random(4);

    while(playedCard[imageNumb.toString()].includes(cards[cardNumb])){
        if (playedCard[imageNumb.toString()].includes(cards[cardNumb])){
            
            imageNumb = random(4);
            cardNumb = random(13);
        }    
        else{
            break;
        }
    }
       playedCard[imageNumb.toString()].push(cards[cardNumb]);

    var card = createCard(cardNumb,imageNumb,firstCard);
    if(isCroupier){
        croupierCards.push(cardValue(cardNumb))
        $("#card").append(card);
        
     
    

    }else{
        playerCards.push(cardValue(cardNumb))
        $("#plCard").append(card);
        console.log(playerCards)
        
    }
    $("#playerAmount").html("Your card amount " + getAmount(false));


}


//Creating cards with number and image 
function createCard(number , image_number,blocked) {
    
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100");
    svg.setAttribute("height", "180");
  
    
    const card = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    card.setAttribute("x", "0"); 
    card.setAttribute("y", "0"); 
    card.setAttribute("width", "100");
    card.setAttribute("height", "180");
    card.setAttribute("fill", "white");
    card.setAttribute("stroke", "black"); 

    svg.appendChild(card);
  

   
  
    if(!blocked){
        const topLeftText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        topLeftText.setAttribute("x", "10");
        topLeftText.setAttribute("y", "20");
        topLeftText.setAttribute("font-size", "16px");
        topLeftText.setAttribute("fill", "black");
        topLeftText.textContent = cards[number]
        svg.appendChild(topLeftText);
      
        const bottomRightText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        bottomRightText.setAttribute("x", "90");
        bottomRightText.setAttribute("y", "170");
        bottomRightText.setAttribute("font-size", "16px");
        bottomRightText.setAttribute("fill", "black");
        bottomRightText.setAttribute("text-anchor", "end");
        bottomRightText.textContent = cards[number]
        svg.appendChild(bottomRightText);

    }
    const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttribute("x", "10");
    image.setAttribute("y", "30");
    image.setAttribute("width", "80");
    image.setAttribute("height", "120");
  

    image.setAttribute("href", "pics/" +card_images[image_number]); 
    svg.appendChild(image);
  
    return svg;
  }


  function random(max){
    var number = Math.floor(Math.random()*max)

    return number
}


function cardValue(number){
var value ;

if (number <9){
    value = cards[number]
} else{
    switch(cards[number]){
        case 'J':
            value = 10;
            break;

        case 'Q':
            value = 10;
            break;

        case 'K':
            value = 10;
            break;

        case 'A':
           value = 11
           break;
        }    
    }

   return value;
}
function croupierSystem(){
    var min = 18
    var crAm = getAmount(true)
    
    while(crAm < min) {
        if(crAm  < min){
            cardAdder(true,false);
            crAm = getAmount(true)
        } else if(crAm == min-3){
            cardAdder(true,false);
            crAm = getAmount(true)
        }
    }
    
     $("#crAmount").html("Value of cards: " + crAm )
  



    
    
   
}

function winning(){
    var datas = winningCodintion();
    var whoWinned = datas[0]
    var isBlackJack = datas[1]
    console.log(whoWinned + " " + isBlackJack)
    $("#options button:nth-child(1)").removeAttr("disabled") 
    $("#options button:nth-child(2)").removeAttr("disabled")
    $("#setGame").css("display", "block");
    $("#table").css("display", "none");
    if(whoWinned =="player"){
        coins += (2*betValue)
        
    }
    betValue = 0

    $("#playerCoins").html("You have: " + coins +  " Coins");
    $("#betValue").html(`you set: ${betValue} bet`);
  

}
//no arguments
function winningCodintion(){
var datas =[]
var croupierCardsValue = getAmount(true)
var playerCardValue = getAmount(false)
if(playerCardValue == 21 &&  playerCards.length == 2){
   
    datas.push("player",true)
}else if(croupierCardsValue ==21 &&  croupierCards.length == 2 ){
    
    datas.push("croupier",true)

}

if(playerCardValue >21 && croupierCardsValue > 21 || (playerCardValue == croupierCardsValue) && playerCardValue <22 ){
    
    datas.push("draw",false)
}

else if((playerCardValue > croupierCardsValue && playerCardValue<22) ||( playerCardValue < croupierCardsValue  && croupierCardsValue > 21)){

    datas.push("player",false)
} else if((playerCardValue < croupierCardsValue && croupierCardsValue<22) || (playerCardValue > croupierCardsValue  && playerCardValue > 21 )){
  
    datas.push("croupier",false)

   
}

return datas
}
