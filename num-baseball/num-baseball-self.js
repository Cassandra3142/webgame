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

console.log(answer); // console창에 answer값 띄우기

const tries = []; // 시도 값 생성

function check(input) { //오류 조건 나열
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

function defeated() { // 3아웃 
  const message = document.createTextNode(`3아웃 입니다. 정답은 ${answer.join('')} 입니다.`);
  $logs.append(message);
}

let out = 0;

$form.addEventListener('submit', (event) => { //제출 시 이벤트
  event.preventDefault(); // 새로고침 방지 이벤트 초기화
  const value = $input.value; 
  $input.value = '';
  if(!check(value)) { // 오류가 아닐 시 return
    return;
  };
  if (answer.join('') === value) { // 정답 맞출 시 홈런
    $logs.textContent = '홈런!!';
    return;
  }
  if (tries.length >= 9) { // 시도 값이 9가 넘어가면 게임 종료
    const message = document.createTextNode(`틀렸습니다. 정답은 ${answer.join('')} 입니다.`);
    $logs.appendChild(message);
    return; 
  };

  let ball = 0;
  let strike = 0;
  for(k = 0; k < answer.length; k++) {
    const index = value.indexOf(answer[k]); // value에 있는 값이 불일치하면 -1 반환
    if (index > -1) { // 일치 하는가?
      if(index === k){ // 자릿수가 같은가?
        strike += 1 ; 
      } else {
        ball += 1 ;
      }
    }
  }
  if (strike === 0 && ball === 0) { // 스트라이크와 볼이 없을때 아웃 추가
    out += 1;
    $logs.append(`${value} : strike : ${strike}, ball : ${ball}, out : ${out}`,document.createElement('br'));
  } else {
    $logs.append(`${value} : strike : ${strike}, ball : ${ball}, out : ${out}`,document.createElement('br'));
  }
  if (out === 3) {
    defeated();
    return;
  }
    tries.push(value);
  });