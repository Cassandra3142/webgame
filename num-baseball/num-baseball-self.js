const $form = document.querySelector('#form'); // form 변수 선언하기
const $input = document.querySelector('#input'); // input 변수 선언하기
const $logs = document.querySelector('#logs'); // log 변수 선언하기

const numbers = []; // numbers 변수 선언하기 (배열 1 ~ 9)
for (let n = 0; n < 9; n++) { // 반복문 0 ~ 8 (9회)
  numbers.push(n + 1); // numbers에 n+1값 을 넣기
}

const answer = []; // answer 변수 선언하기 
for (let n = 0; n < 4; n++) { // 반복문 0 ~ 3 (4회)
  const index = Math.floor(Math.random() * numbers.length); // 0 ~ 8
  answer.push(numbers[index]); // numbers[0] ~ numbers[8] 중 무작위로 answer에 넣음
  numbers.splice(index,1); // numbers[index]에서 1개 제거 
}

console.log(answer); // console창에 answer값 띄우기

const tries = []; // tries 변수 선언

function check(input) { // 오류 체크 함수 생성
  if(input.length !== 4) { //input의 길이가 4가 아닐때
    return alert('숫자를 4개 입력하세요.'); 
  }
  if(new Set(input).size !== 4) { // 숫자가 중복 되지 않는가?
    return alert('숫자가 중복되지 않게 입력하세요.');
  }
  if(tries.includes(input)) { // tries에 이미 있는 값인가?
    return alert('이미 시도 한 값입니다.');
  }
  return true;
}

function defeated() { // 실패 함수 생성
  const message = document.createTextNode(`3아웃 입니다. 정답은 ${answer.join('')} 입니다.`); // message 변수 선언
  $logs.append(message); // log 변수에 message변수 넣기
}

let out = 0;

$form.addEventListener('submit', (event) => { //제출 시 이벤트
  event.preventDefault(); // 새로고침 방지 이벤트 초기화
  const value = $input.value; // value 변수 선언
  $input.value = ''; // input.value값 제거
  if(!check(value)) { // 오류가 아닐 시 return
    return;
  };
  if (answer.join('') === value) { // 정답 맞출 시 홈런
    $logs.textContent = '홈런!!'; // log 변수에 홈런 text 넣기
    return;
  }
  if (tries.length >= 9) { // 시도 값이 9가 넘어가면 게임 종료
    const message = document.createTextNode(`틀렸습니다. 정답은 ${answer.join('')} 입니다.`); // message 변수 선언
    $logs.appendChild(message); // log 변수에 message 변수 넣기
    return; 
  };

  let ball = 0; // ball 변수 선언
  let strike = 0; // strike 변수 선언
  for(k = 0; k < answer.length; k++) { // 반복문 0 ~ answer길이(4)미만
    const index = value.indexOf(answer[k]); // value에 있는 값이 불일치하면 -1 반환
    if (index > -1) { // 일치 하는가?
      if(index === k){ // 자릿수가 같은가?
        strike += 1 ; // 스트라이크 1개 추가
      } else { //일치 하지 않을 시
        ball += 1 ; // 볼 1개 추가
      }
    }
  }
  if (strike === 0 && ball === 0) { // 스트라이크와 볼이 없을때 아웃 추가
    out += 1; // 아웃 1개 추가
    $logs.append(`${value} : strike : ${strike}, ball : ${ball}, out : ${out}`,document.createElement('br'));
  } else {
    $logs.append(`${value} : strike : ${strike}, ball : ${ball}, out : ${out}`,document.createElement('br'));
  }
  if (out === 3) { // 아웃이 3개 일때
    defeated(); // 실패 함수 실행
    return;
  }
    tries.push(value); // tries 변수에 value 추가
  });