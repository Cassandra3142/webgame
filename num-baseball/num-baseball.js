const $form = document.querySelector('#form');
const $input = document.querySelector('#input');
const $logs = document.querySelector('#logs');

const numbers = []; //1번 ~ 9번 공
for (let n = 0; n < 9; n++) {
  numbers.push(n + 1);
}

const answer = []; //무작위로 공 네개 선택
for (let n = 0; n < 4; n++) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.slice(index,1);
}

console.log(answer);