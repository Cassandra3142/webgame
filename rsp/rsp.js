const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');
const IMG_URL = './rsp.png';
$computer.style.background = `url(${IMG_URL}) -464px 0`;
$computer.style.backgroundSize = 'auto 200px';

// const scissorsX = '0px';
// const rockX = '-220px';
// const paperX = '440px';

const rspX = { // 위의 변수들을 객체로 묶어서 표현
  scissors : '0px',
  rock : '-220px',
  paper : '-440px',
}

let computerChoice = 'scissors';
const changeComputerChoice = () => {
  if(computerChoice === 'rock') {
    computerChoice = 'scissors';
  } else if (computerChoice === 'scissors') {
    computerChoice = 'paper';
  } else if (computerChoice ==='paper') {
    computerChoice = 'rock';
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = 'auto 200px'
  setTimeout(changeComputerChoice, 50);
}

setTimeout(changeComputerChoice, 50);