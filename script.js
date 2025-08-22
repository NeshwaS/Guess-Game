// 'use strict';



let secretNumber =  Math.trunc(Math.random()*20)+1
let score = 20;
let Highscore = 0;


// document.querySelector('.number').textContent='?';

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    if (!guess){
        document.querySelector('.message').textContent = "No Number!";
    } 
      else if(guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        
        if(score > Highscore) {
           Highscore = score;
           document.querySelector('.highscore').textContent = Highscore;
        }
       } else if(guess !== secretNumber) {
        if (score > 1) {
           document.querySelector('.message').textContent =
            guess > secretNumber ? 'To high' : 'To low'
           score--;
           document.querySelector('.score').textContent = score;
        }
      else {
            document.querySelector('.message').textContent = "You Lose!"
            document.querySelector('.score').textContent = 0;
        }    
    } 
 
});

 
document.querySelector('.again').addEventListener('click', function () {
    score = 20; 
    secretNumber = Math.trunc(Math.random()*20)+1
    document.querySelector('.message').textContent = 'start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222'; 
    document.querySelector('.number').style.width = '15rem';
});




























