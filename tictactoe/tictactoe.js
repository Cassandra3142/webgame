const data = [];
for (let i = 0 ; i < 3 ; i ++) {
  data.push([]);
}

const { body } = document;
const $table = document.createElement('table');
const $result = document.createElement('div');
const rows = [];
let turn = 'O';

const winCheck = (target) => {
  let rowIndex;
  let cellIndex;
  rows.forEach((row,ri) => {
    row.forEach((cell,ci) => {
      if (cell === target) {
        rowIndex = ri;
        cellIndex = ci;
      }
    });
  });
  //세칸 다 채워졌나??
  let hasWinner = false;
  //가로 줄 검사
  if(
    rows[rowIndex][0].textContent === turn &&
    rows[rowIndex][1].textContent === turn &&
    rows[rowIndex][2].textContent === turn
  ){
    hasWinner = true;
  }
  //세로줄 검사
  if(
    rows[0][cellIndex].textContent === turn &&
    rows[1][cellIndex].textContent === turn &&
    rows[2][cellIndex].textContent === turn
  ){
    hasWinner = true;
  }
  //대각선 검사
  if(
    rows[0][0].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][2].textContent === turn
  ){
    hasWinner = true;
  }
  if (
    rows[0][2].textContent === turn &&
    rows[1][1].textContent === turn &&
    rows[2][0].textContent === turn
  ){
    hasWinner = true;
  }
  return hasWinner;
}

const callBack = (event) => {
  if (event.target.textContent !== '') { //빈칸이 아닐 시에
    console.log ('빈칸이 아닙니다.');
    return;
  }
  //빈칸일 시에
  console.log ('빈칸 입니다.')
  event.target.textContent = turn;
  //승부 판단하기
  const hasWinner = winCheck(event.target);
  if (hasWinner) {
    $result.textContent = `${turn}님이 승리!`;
    $table.removeEventListener('click',callBack);
  }
  //무승부인지 확인하기

  let draw = true;
  rows.forEach((row) => {
    row.forEach((cell) => {
      if(!cell.textContent) {
        draw = false;
      }
    });
  });
  if (draw) {
    $result.textContent = '무승부';
    return;
  }
  turn = turn === 'X' ? 'O' : 'X';
};

for (let i = 0; i < 3; i++) {
  const $tr = document.createElement('tr');
  const cells = [];
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement('td');
    cells.push($td);
    $tr.appendChild($td);
  }
  rows.push(cells);
  $table.appendChild($tr);
  $table.addEventListener('click',callBack);
}

body.appendChild($table);
body.appendChild($result);
