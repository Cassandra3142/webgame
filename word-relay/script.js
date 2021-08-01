const number = parseInt(prompt('몇 명이 참가하나요?'), 10);

alert(number);

const yesOrNo = confirm('맞나요?');
const $Input = document.querySelector('input');
const $Button = document.querySelector('button');

function wording () {
    console.log(event.target.value);
}

function onClick () {
    console.log('버튼클릭');
}

$Input.addEventListener('input',wording);
$Button.addEventListener('click',onClick);