const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $logs = document.querySelector('#logs');

const numbers = []; //1번 ~ 9번 공
for (let n = 0; n < 9; n++) {
  numbers.push(n + 1);
}

const answer = []; //무작위로 공 네개 선택
for (let n = 0; n < 4; n++) {
  const index = Math.floor(Math.random() * numbers.length); // 0 ~ 8
  answer.push(numbers[index]); // numbers[0] ~ numbers[8] 중 무작위로 answer에 넣음
  numbers.splice(index,1); // numbers[index]에서 1개 제거 
}

console.log(answer);

const tries = [];

function check(input) {
  if(input.length !== 4) {
    return alert('숫자를 4개 입력하세요.');
  }
  if(new Set(input).size !== 4) {
    return alert('숫자가 중복되지 않게 입력하세요.');
  }
  if(tries.includes(input)) {
    return alert('이미 시도 한 값입니다.');
  }
  return true;
}

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = $input.value;
  $input.value = '';
  if(!check(value)) {
    return;
  };
  if (answer.join('') === value) {
    $logs.textContent = '홈런!!';
    return;
  };
  if (tries.length >= 9) {
    const message = document.createTextNode(`틀렸습니다. 정답은 ${answer.join('')} 입니다.`);
    $logs.appendChild(message);
    return; 
  };

  let ball = 0;
  let strike = 0;
  for(k = 0; k < answer.length; k++) {
    const index = value.indexOf(answer[k]);
    if (index > -1) {
      if(index === k){
        strike += 1 ;
      } else {
        ball += 1 ;
      }
    }
  }
    $logs.append(`${value} : strike : ${strike}, ball : ${ball}`,document.createElement('br'));
    tries.push(value);
  });