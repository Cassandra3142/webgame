let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber = (event) => {
    //operator가 존재 하지 않을 경우
    if(!operator) {
        numOne += event.target.textContent;
        $result.value += event.target.textContent;
        return;
    }
    //operator가 존재할 경우
    if (!numTwo) {
        $result.value = '';
        numTwo += event.target.textContent;
        $result.value += event.target.textContent;
    }
};

const onClickOperator = (event) => {
    if(numOne) {
        operator = event.target.textContent;
        $operator.value =event.target.textContent;
    } else {
        alert('첫번째 숫자를 먼저 입력하세요');
    }
}

document.querySelector('#num-0').addEventListener('click',onClickNumber);
document.querySelector('#num-1').addEventListener('click',onClickNumber);
document.querySelector('#num-2').addEventListener('click',onClickNumber);
document.querySelector('#num-3').addEventListener('click',onClickNumber);
document.querySelector('#num-4').addEventListener('click',onClickNumber);
document.querySelector('#num-5').addEventListener('click',onClickNumber);
document.querySelector('#num-6').addEventListener('click',onClickNumber);
document.querySelector('#num-7').addEventListener('click',onClickNumber);
document.querySelector('#num-8').addEventListener('click',onClickNumber);
document.querySelector('#num-9').addEventListener('click',onClickNumber);
document.querySelector('#plus').addEventListener('click', onClickOperator);
document.querySelector('#minus').addEventListener('click', onClickOperator);
document.querySelector('#divide').addEventListener('click', onClickOperator);
document.querySelector('#multiply').addEventListener('click', onClickOperator);
document.querySelector('#calculate').addEventListener('click', () => {
    if(numTwo) {
        if(operator == '+') {
            $result.value = parseInt(numOne) + parseInt(numTwo);
        } else if(operator == '-') {
            $result.value = parseInt(numOne) - parseInt(numTwo);
        } else if(operator == 'x') {
            $result.value = parseInt(numOne) * parseInt(numTwo);
        } else if(operator == '/') {
            $result.value = parseInt(numOne) / parseInt(numTwo);
        }
    } else {
        alert('두번째 값을 입력하세요')
    }
});
document.querySelector('#clear').addEventListener('click', () => {
    numOne = '';
    operator = '';
    numTwo = '';
    $operator.value = "";
    $result.value = "";
});