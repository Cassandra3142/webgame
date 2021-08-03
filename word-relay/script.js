const number = Number(prompt('몇 명이 참가하나요?'));

alert(number);

const yesOrNo = confirm('맞나요?');
const $Input = document.querySelector('input');
const $Button = document.querySelector('button');
const $word = document.querySelector('#word');
const $order = document.querySelector('#order');
let word ; // 제시어
let newWord ; // 새로 입력 단어

function onClickButton () { // 제시어가 비어 있는가?
    if (!word) { // 제시어가 비어있는 경우
        word = newWord;
        $word.textContent = word;
        $Input.value = '';
        const order = Number($order.textContent);
        if(order + 1 > number) {
            $order.textContent = 1 ;
        } else {
            $order.textContent = order + 1;
        };
    } else { // 제시어가 있는 경우
        if(word[word.length - 1] === newWord[0]) { // 올바른가?
            word = newWord; //입력한 단어가 제시어가 된다.
            $word.textContent = word;
            $Input.value = '';
            const order = Number($order.textContent);
            if(order + 1 > number) {
                $order.textContent = 1 ;
            } else {
                $order.textContent = order + 1;
            } ;
        } else { // 올바르지 않은가?

        }
    }
}

function onInput (event) {
    newWord = event.target.value;
}

$Input.addEventListener('input',onInput);
$Button.addEventListener('click',onClickButton);