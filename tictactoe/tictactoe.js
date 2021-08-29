// const data = [];
// for (let i = 0 ; i < 3 ; i ++) {
//   data.push([]);
// }

// let turn = 'O';

// const $table = document.createElement('table');
// document.body.append($table);
// for (let i = 0 ; i < 3 ; i ++) {
//   const $tr = document.createElement('tr');
//   for (let i = 0 ; i < 3 ; i ++) {
//     const $td = document.createElement('td');
//     $td.addEventListener('click', (event) => {
//       if(event.target.textContent) {
//         return;
//       }
//       event.target.textContent = turn
//       if(turn === 'O') {
//         turn = 'X';
//       } else if (turn === 'X') {
//         turn = 'O';
//       }
//     })
//     $tr.append($td);
//   }
//   $table.append($tr);
// }

const { body } = document;
const $table = document.createElement('table');
const $result = document.createElement('div');
const rows = [];
let turn = 'O';

const callBack = (event) => {
  if (event.target.textContent !== '') {
    console.log ('빈칸이 아닙니다.');
  } else {
    console.log ('빈칸입니다.');
    event.target.textContent = turn;
    if (turn === 'X') {
      turn = 'O';
    } else if (turn === 'O') {
      turn = 'X';
    }
  }
};

for (let i = 0; i < 3; i++) {
  const $tr = document.createElement('tr');
  const cells = [];
  for (let j = 0; j < 3; j++) {
    const $td = document.createElement('td');
    $td.addEventListener('click',callBack);
    cells.push($td);
    $tr.appendChild($td);
  }
  rows.push(cells);
  $table.appendChild($tr);
}

body.appendChild($table);
body.appendChild($result);
