
const numberRandom = Math.trunc(Math.random()*20)+1
document.querySelector('.number').textContent = '?'

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',
 function(){
    const guess = Number(document.querySelector('.guess').value)
    document.querySelector('.message').textContent = 'Bạn đã nhập đúng số'
    console.log(guess , typeof guess)
    if(guess === numberRandom){
        document.querySelector('.message').textContent = 'Bạn đã nhập đúng số'
        document.querySelector('.score').textContent = score
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('body').style.width = '30rem'
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if(!guess){
        if(score > 1){
            document.querySelector('.message').textContent = 'Nhập số đê'
            score--;
            document.querySelector('.score').textContent = score
        } else{
            document.querySelector('.message').textContent = 'You lost the game'
            document.querySelector('.score').textContent = 0
        }
    } else if(guess > numberRandom){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too high!'
            score--;
            document.querySelector('.score').textContent = score
        } else{
            document.querySelector('.message').textContent = 'You lost the game'
            document.querySelector('.score').textContent = 0
        }
    } else if(guess < numberRandom){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too low!'
            score--;
            document.querySelector('.score').textContent = score
        } else{
            document.querySelector('.message').textContent = 'You lost the game'
            document.querySelector('.score').textContent = 0
        }
    }else{
        if(score > 1){
            document.querySelector('.message').textContent = 'Bạn đã nhập sai số'
            score--;
            document.querySelector('.score').textContent = score
        } else{
            document.querySelector('.message').textContent = 'You lost the game'
            document.querySelector('.score').textContent = 0
        }
    }
});
document.querySelector('.lai').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
