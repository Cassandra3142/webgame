const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

let startTime;
let endTime;
const records = [];
let timeoutId;

$screen.addEventListener('click',(event) => {
  if(event.target.classList.contains('waiting')) {
    $screen.classList.remove('waiting');
    $screen.classList.add('ready');
    $screen.textContent = '초록색이 되면 클릭하세요';
    timeoutId = setTimeout(function() {
      startTime = new Date();
      $screen.classList.remove('ready');
      $screen.classList.add('now');
      $screen.textContent = '클릭하세요'
    }, Math.floor(Math.random() * 1000) + 2000);
  } else if (event.target.classList.contains('ready')) {
    clearTimeout(timeoutId);
    $screen.classList.remove('ready');
    $screen.classList.add('waiting');
    $screen.textContent = '성급하셨군요. 빨간색에서는 클릭을 하지마세요';
  } else if (event.target.classList.contains('now')) {
    endTime = new Date();
    const current = endTime - startTime;
    records.push(current);
    const average = records.reduce((a,c) => a + c) / records.length;
    $result.textContent = `현재 : ${current} ms, 평균 : ${average}`;
    startTime = null;
    endTime = null;
    $screen.classList.remove('now');
    $screen.classList.add('waiting');
    $screen.textContent = '클릭해서 시작하세요'
    const topFive= records.sort((x,y) => x - y).slice(0,5);
    topFive.forEach((top,index) => {
      $result.append(
        document.createElement('br'),
        `${index + 1}위 : ${top}ms`,
      );
    })
  }
})


