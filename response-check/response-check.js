const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

let startTime;
let endTime;

$screen.addEventListener('click',(event) => {
  if(event.target.classList.contains('waiting')) {
    $screen.classList.remove('waiting');
    $screen.classList.add('ready');
    $screen.textContent = '초록색이 되면 클릭하세요';
    setTimeout(function() {
      startTime = new Date();
      $screen.classList.remove('ready');
      $screen.classList.add('now');
      $screen.textContent = '클릭하세요'
    }, Math.floor(Math.random() * 1000) + 2000);
  } else if (event.target.classList.contains('ready')) {
    $screen.classList.remove('ready');
    $screen.classList.add('waiting');
    $screen.textContent = '클릭해서 시작하세요'
    alert('성급했습니다.')
  } else if (event.target.classList.contains('now')) {
    endTime = new Date();
    $result.textContent = `${endTime - startTime} ms`;
    $screen.classList.remove('now');
    $screen.classList.add('waiting');
    $screen.textContent = '클릭해서 시작하세요'
  }
})