
let computerMove = '';
let result = '';
const TOKEN = 'AKSH';
let INPUT = '';
// let playerClass = '';
let devMode = false;


document.querySelector('.js-token-input').addEventListener('keydown',function(event){
  if(event.key === 'Enter'){

    document.querySelector('.js-token-input')
      .classList.add('token-input-enterPressed');
  }
});

document.querySelector('.js-token-input')
  .addEventListener('keyup',function(event){

    if(event.key === 'Enter'){
      document.querySelector('.js-token-input').classList.remove('token-input-enterPressed');

      INPUT = document.querySelector('.js-token-input').value;

      devToken(INPUT);
    }

  });

function devToken(INPUT){

  if(INPUT === TOKEN){
    document.querySelector('.js-dev')
      .innerHTML = 'DEV Mode on';

    document.querySelector('.js-dev-button')
      .classList.add('js-dev-button-active');

    document.querySelector('.js-dev-button-active')
      .innerHTML = 'Dev Off';

      devMode = true;
      handleMove(playerMove);
  }else{
    devMode = false;
    handleMove(playerMove);
  }

}


let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  loses:0,
  ties:0
};

updateScoreElement();
// if(score === null){
//   score = 
// }

function handleMove(playerMove){
  if(devMode){
    devGame(playerMove);
  }else{
    playGame(playerMove);

  }

}

function devRemoveStyle(){
  devMode = false;
  
  document.querySelector('.js-dev')
  .innerHTML = '';

  document.querySelector('.js-dev-button-active')
  .innerHTML = '';

  document.querySelector('.js-dev-button')
  .classList.remove('js-dev-button-active');


}

function devGame(playerMove){
  pickComputerMove();

if(playerMove === 'scissors'){

if(computerMove === 'rock'){
  result = 'You win.';
} else if(computerMove === 'paper'){
  result = 'You win.';
} else if(computerMove === 'scissors'){
  result = 'Dev cant tie, Win.';
}

}

if(playerMove === 'rock'){

if(computerMove === 'rock'){
  result = 'Dev cant tie, Win.';
} else if(computerMove === 'paper'){
  result = 'You win.';
} else if(computerMove === 'scissors'){
  result = 'You win.';
}

}

if(playerMove === 'paper'){

if(computerMove === 'rock'){
  result = 'You win.';
} else if(computerMove === 'paper'){
  result = 'Dev cant tie, Win.';
} else if(computerMove === 'scissors'){
  result = 'You win.';
}

}


if(result === 'You win.'){
score.wins += 1;
} else if(result === 'You lose.'){
score.loses += 1;
} else if(result === 'Dev cant tie, Win.'){
score.wins += 1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `You picked: <img src="/images/${playerMove}-emoji.png" class="move-icon"> Computer Picked: <img src="images/${computerMove}-emoji.png" class="move-icon">`

}

function playGame(playerMove){

pickComputerMove();

if(playerMove === 'scissors'){

if(computerMove === 'rock'){
  result = 'You lose.';
} else if(computerMove === 'paper'){
  result = 'You win.';
} else if(computerMove === 'scissors'){
  result = 'Tie.';
}

}

if(playerMove === 'rock'){

if(computerMove === 'rock'){
  result = 'Tie.';
} else if(computerMove === 'paper'){
  result = 'You lose.';
} else if(computerMove === 'scissors'){
  result = 'You win.';
}

}

if(playerMove === 'paper'){

if(computerMove === 'rock'){
  result = 'You win.';
} else if(computerMove === 'paper'){
  result = 'Tie.';
} else if(computerMove === 'scissors'){
  result = 'You lose.';
}

}


if(result === 'You win.'){
score.wins += 1;
} else if(result === 'You lose.'){
score.loses += 1;
} else if(result === 'Tie.'){
score.ties += 1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `You picked: <img src="/images/${playerMove}-emoji.png" class="move-icon"> Computer Picked: <img src="images/${computerMove}-emoji.png" class="move-icon">`


}

function updateScoreElement(){

document.querySelector('.js-score')
.innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;


}



function pickComputerMove() {
const randomNumber = Math.random();


if(randomNumber >=0 && randomNumber < 1/3){
computerMove = 'rock';
  
} else if(randomNumber >= 1/3 && randomNumber < 2/3){
computerMove = 'paper';
} else if(randomNumber >= 2/3 &&     randomNumber < 1){
computerMove = 'scissors';
}


}


function scoreReset(){
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = 'Result will be displayed here';
  document.querySelector('.js-moves').innerHTML = 'Moves will be displayed here';
}








