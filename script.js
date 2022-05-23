'use script';
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
highscore = 0;
let msg = function (display) {
  document.querySelector('.message').textContent = display;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    msg('NO NUMBER !!!');
  } else if (guess === secretNumber) {
    document.querySelector('.highscore').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').style.width = '25em';
    msg('You Got it. WINNER !');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      guess > secretNumber ? msg('TOO HIGH !') : msg('TOO LOW !');
    } else {
      document.querySelector('.score').textContent = 0;
      msg('YOU LOSE BC.');
    }
  }
});

// this can also work by following code just call onclick function in button in html
// function getnum() {
//   console.log(document.querySelector('.guess').value);
// }

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  msg('Start guessing...');
  document.querySelector('body').style.backgroundColor = 'rgb(138, 146, 94)';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
