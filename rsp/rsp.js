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
  if(computerChoice === 'rock') { // 바위 일때
    computerChoice = 'scissors'; // 가위로 바꿔 줌
  } else if (computerChoice === 'scissors') { // 가위 일때
    computerChoice = 'paper'; // 보로 바꿔 줌
  } else if (computerChoice ==='paper') { // 보 일때
    computerChoice = 'rock'; // 주먹으로 바꿔 줌
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = 'auto 200px'
}

let intervalId = setInterval(changeComputerChoice,50);

let clickable = true;
const clickBtn = () => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;
    // 점수 계산 및 화면 표시
    setTimeout(() =>{
      clickable = true;
      intervalId = setInterval(changeComputerChoice,50);
    },1000);
  }
};

$rock.addEventListener('click', clickBtn);
$scissors.addEventListener('click', clickBtn);
$paper.addEventListener('click', clickBtn);