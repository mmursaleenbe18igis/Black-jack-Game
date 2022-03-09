// Variables Declaration
var firstcard = getrendomcard();
var secondcard = getrendomcard();
var Cards =[] ;
var result = 0;
var isAlive;
var blackjack;

// Function for gitting random number
function getrendomcard(){
    card =  Math.floor(Math.random() * 13)+1;
    if (card > 10){
        return 10;
    }
    else if(card === 1){
        return 11;
    }
    else{
        return card;
    }
}

// Function for startgame work when we click start button 
function StartGame(){
    if (result === 0){
    firstcard = getrendomcard();
    secondcard = getrendomcard();
    Cards = [firstcard,secondcard];
    result = firstcard + secondcard;
    isAlive = true;
    blackjack = false;
    randomGame()
    }
}


// the whole Mind of the game and run through Startgame() function
function randomGame(){
    cardEl = document.getElementById('cardEl');
    sumEl = document.getElementById('sumEl');
    cardEl.innerHTML = "Cards: "
    messageEl = document.getElementById('messageEl');
    for(i=0;i<Cards.length;i++){
    cardEl.innerHTML += Cards[i] + " " ;
    }
    sumEl.innerHTML = "Sum: " + result;
    if(result > 21){
        message = "You're out of the game!"
        isAlive = false;
    }
    else if(result === 21) {
        message = "You've got blackjack"
        blackjack = true;
    } else {
        message = "Do you want to draw a new card?"
    }
    messageEl.innerHTML = message;

}

// Funtion for gitting new card
function NewCard(){
    if (isAlive === true && blackjack === false){
        let card = getrendomcard();
        Cards.push(card);
        result += card;
        randomGame()
    }
}

// Exit the Game
function ExitGame(){
    messageEl = document.getElementById('messageEl');
    messageEl.innerHTML = "Thank you <br/> Want Play again?";
    cardEl = document.getElementById('cardEl');
    sumEl = document.getElementById('sumEl');
    cardEl.innerHTML = "Cards: ";
    sumEl.innerHTML = "sum: ";
    Cards = []; 
    result = 0;
    isAlive = true;
    blackjack = false;
}


