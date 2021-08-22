let numOne = '';
let numTwo = '';
let operator = '';

const $result = document.querySelector('#result');
const $operator = document.querySelector('#operator');

function onClickNumber(event) {
  if(!operator) {
    numOne += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
  if(operator) {
    $result.value = '';
    numTwo += event.target.textContent;
    $result.value += event.target.textContent;
    return;
  }
}

const onClickOperator = (event) => {
  if(numOne) {
      operator = event.target.textContent;
      $operator.value = event.target.textContent;
  }
  if(numTwo) {
    if(operator == '+') {
      $result.value = parseInt(numOne) + parseInt(numTwo);
    } else if (operator == '-') {
      $result.value = parseInt(numOne) - parseInt(numTwo);
    } else if (operator == 'x') {
      $result.value = parseInt(numOne) * parseInt(numTwo);
    } else if (operator == '/') {
      $result.value = parseInt(numOne) / parseInt(numTwo);
    }
    numOne = $result.value;
    numTwo = '';
  }
}

document.querySelector('#num-1').addEventListener('click',onClickNumber);
document.querySelector('#num-2').addEventListener('click',onClickNumber);
document.querySelector('#num-3').addEventListener('click',onClickNumber);
document.querySelector('#num-4').addEventListener('click',onClickNumber);
document.querySelector('#num-5').addEventListener('click',onClickNumber);
document.querySelector('#num-6').addEventListener('click',onClickNumber);
document.querySelector('#num-7').addEventListener('click',onClickNumber);
document.querySelector('#num-8').addEventListener('click',onClickNumber);
document.querySelector('#num-9').addEventListener('click',onClickNumber);
document.querySelector('#plus').addEventListener('click',onClickOperator);
document.querySelector('#minus').addEventListener('click',onClickOperator);
document.querySelector('#divide').addEventListener('click',onClickOperator);
document.querySelector('#multiply').addEventListener('click',onClickOperator);
document.querySelector('#clear').addEventListener('click',() => {
  numOne = '';
  numTwo = '';
  operator = '';
  $result.value = '';
  $operator.value = '';
});
document.querySelector('#calculate').addEventListener('click',() => {
  if(numTwo) {
    if(operator == '+') {
      $result.value = parseInt(numOne) + parseInt(numTwo);
    } else if (operator == '-') {
      $result.value = parseInt(numOne) - parseInt(numTwo);
    } else if (operator == 'x') {
      $result.value = parseInt(numOne) * parseInt(numTwo);
    } else if (operator == '/') {
      $result.value = parseInt(numOne) / parseInt(numTwo);
    }
    numOne = $result.value;
    operator = '';
    numTwo = '';
  } else {
    alert('숫자를 입력하세요.')
  }
  
});
