const number = parseInt(prompt('몇 명이 참가하나요?'), 10);

alert(number);

const yesOrNo = confirm('맞나요?');
const $Input = document.querySelector('input');
const $Button = document.querySelector('button');
const $word = document.querySelector('#word');
let word ; // 제시어
let newWord ; // 새로 입력 단어

function onInput () {
    newWord = event.target.value;
}

function onClickButton () { // 제시어가 비어 있는가?
    if (!word) { // 제시어가 비어있는 경우
        word = newWord
        $word.textContent = word;
        $Input.value = ' '
    } else { // 제시어가 있는 경우

    }
}

$Input.addEventListener('input',onInput);
$Button.addEventListener('click',onClickButton);