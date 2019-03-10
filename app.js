var score, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    
    if(gamePlaying) {
            
    
    //1. Random Number
    var dice = Math.floor(Math.random() * 6 + 1);
    //2. Result
    document.querySelector('.dice').style.display = 'block';
    
    switch(dice) {
        case 1:
            document.querySelector('.dice').src = "dice-1.png";
            break;
        case 2: 
            document.querySelector('.dice').src = "dice-2.png";
            break;
        case 3:
            document.querySelector('.dice').src = "dice-3.png";
            break;
        case 4:
            document.querySelector('.dice').src = "dice-4.png";
            break;
        case 5:
            document.querySelector('.dice').src = "dice-5.png";
            break;
        case 6:
            document.querySelector('.dice').src = "dice-6.png";
            break;
    }
    
    //3. Update the score, if dice was not a 1.
    
    if(dice == 1) {
        document.querySelector('#current-' + activePlayer).textContent = 0;
        roundScore = 0;
        if (activePlayer == 0) {
            activePlayer = 1;
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.add('active');
            document.querySelector('.dice').style.display = 'none';
        } else {
            activePlayer = 0;
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
            document.querySelector('.dice').style.display = 'none';
        }
       } else {
           document.querySelector('#current-' + activePlayer).textContent = roundScore = dice + roundScore;
       }
    }

});


document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gamePlaying) {
            
   if(activePlayer == 0) {
       document.querySelector('#score-0').textContent = score[0] = roundScore + score[0];
       roundScore = 0;
       document.querySelector('.player-0-panel').classList.remove('active');
       document.querySelector('.player-1-panel').classList.add('active');
       activePlayer = 1;
       document.querySelector('#current-0').textContent = 0;
       document.querySelector('.dice').style.display = 'none';
   } else if(activePlayer == 1) {
       document.querySelector('#score-1').textContent = score[1] = roundScore + score[1];
       roundScore = 0;
       document.querySelector('.player-1-panel').classList.remove('active');
       document.querySelector('.player-0-panel').classList.add('active');
       activePlayer = 0;
       document.querySelector('#current-1').textContent = 0;
       document.querySelector('.dice').style.display = 'none';
   } 
    if(score[0] >= 10) {
    document.querySelector('#name-0').textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('winner');
    gamePlaying = false;
} else if(score[1] >= 10){
    document.querySelector('#name-1').textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('winner');
    gamePlaying = false;
    }
    }

});




document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0; 
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    score = [0,0];
}