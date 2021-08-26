const candidate = Array(45).fill().map((element,index) => {
  return index + 1;
})

const shuffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length); // 무작위로 인덱스 뽑기
  const spliceArray = candidate.splice(random,1); // 뽑은 값은 배열에 들어가 있음
  const value = spliceArray[0]; // 배열에 들어 있는 값을 꺼내어
  shuffle.push(value); // shuffle 배열에 넣기
}

console.log(shuffle);

const winBalls = shuffle.slice(0,6).sort((a,b) => a - b);
const bonusBall = shuffle[6];

console.log(winBalls,bonusBall);

const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

function colorBalls (number, $ball) {
  if (number < 10) {
    $ball.style.backgroundColor = 'green';
    $ball.style.color = 'white'
  } else if (number < 20) {
    $ball.style.backgroundColor = 'blue';
    $ball.style.color = 'white'
  } else if (number < 30) {
    $ball.style.backgroundColor = 'yellow';
  } else if (number < 40) {
    $ball.style.backgroundColor = 'orange';
    $ball.style.color = 'white'
  } else if (number < 50) {
    $ball.style.backgroundColor = 'red';
    $ball.style.color = 'white'
  }
}

const showBall = (number, $target) => {
  const $ball = document.createElement('div');
  $ball.className = 'ball';
  $ball.textContent = number;
  colorBalls(number, $ball);
  $target.appendChild($ball);
}

const $myBall = document.querySelector('#myball');
const $form = document.querySelector('form');
const $input = document.querySelector('.input');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const input4 = document.querySelector('.input4');
const input5 = document.querySelector('.input5');
const input6 = document.querySelector('.input6');
const rank = document.querySelector('#rank');

$form.addEventListener('submit',(event) => {
  event.preventDefault();

  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const value3 = Number(input3.value);
  const value4 = Number(input4.value);
  const value5 = Number(input5.value);
  const value6 = Number(input6.value);

  input1.value = '';
  input2.value = '';
  input3.value = '';
  input4.value = '';
  input5.value = '';
  input6.value = '';

  const myBalls = [value1, value2, value3, value4, value5, value6];

  console.log(myBalls);

  for(let k = 0 ; k < 6 ; k++) {
    showBall(myBalls[k],$myBall);
  }

  for(let i = 0 ; i < 6 ; i++) { // 결과 공 뽑기
    setTimeout(() => {
      showBall(winBalls[i], $result)
    },(i + 1) * 1000);
  }
  setTimeout(() => { // 보너스 공 뽑기
    showBall(bonusBall,$bonus)
  },7000);

  const resultRank = [];
  resultRank.push(myBalls.filter(x => winBalls.includes(x)));
  const bonusRank = [];
  bonusRank.push(myBalls.indexOf(bonusBall));
  console.log(resultRank);
  console.log(resultRank[0].length);
  console.log(bonusRank);

  if (resultRank[0].length === 6) {
    rank.append('축하합니다. 1등에 당첨되셨습니다.');
  } else if(resultRank[0].length === 5 && bonusRank > -1) {
    rank.append('축하합니다. 2등에 당첨되셨습니다.');
  } else if (resultRank[0].length === 5) {
    rank.append('축하합니다. 3등에 당첨되셨습니다.');
  } else if (resultRank[0].length === 4) {
    rank.append('축하합니다. 4등에 당첨되셨습니다.');
  } else if (resultRank[0].length === 3) {
    rank.append('축하합니다. 5등에 당첨되셨습니다.');
  } else {
    rank.append('꽝!!! 아쉽습니다 다음에 도전해주세요.');
  }
})
