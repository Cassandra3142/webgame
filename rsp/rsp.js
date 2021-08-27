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

const scoreTable = {
  rock: 0,
  scissors : 1,
  paper : -1,
};

let clickable = true;
let score = 0;
const clickBtn = () => {
  if (clickable) {
    clearInterval(intervalId);
    clickable = false;
    const myChoice = event.target.textContent === '바위'
      ? 'rock'
      : event.target.textContent === '가위'
        ? 'scissors'
        : 'paper';
    const myScore = scoreTable[myChoice];
    const computreScore = scoreTable[computerChoice];
    const diff = myScore - computreScore;
    let message ;
    if([2,-1].includes(diff)) {
      score += 1;
      message = '승리';
    } else if ([-2,1].includes(diff)) {
      score -= 1;
      message = '패배';
    } else {
      message = '무승부'
    }
    $score.textContent = `${message} 총 : ${score}점`;
    setTimeout(() =>{
      clickable = true;
      intervalId = setInterval(changeComputerChoice,50);
    },1000);
  }
};

$rock.addEventListener('click', clickBtn);
$scissors.addEventListener('click', clickBtn);
$paper.addEventListener('click', clickBtn);