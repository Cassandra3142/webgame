const number = Number(prompt('몇 명이 참가하나요?'));

if (!number) {
    alert('취소되었습니다.')
} else {

    alert(number);

    const yesOrNo = confirm(`${number}명 맞나요?`);
    const $button = document.querySelector('button');
    const $input = document.querySelector('input');
    const $word = document.querySelector('#word');
    const $order = document.querySelector('#order');
    let word;
    let newWord;

    function onInput(event) {
        newWord = event.target.value;   
    }

    function onClickButton() {
        if(!word || word[word.length - 1] === newWord[0]) {
            if(newWord.length !== 3) {
                alert('3글자로 입력하세요.')
            } else {
                word = newWord;
                $word.textContent = word;
                const order = Number($order.textContent);
                if(order + 1 > number) {
                    $order.textContent = 1;
                } else {
                    $order.textContent = order + 1
                }
            }
        } else {
            alert('틀렸습니다.')
        }
        $input.value = '';
        $input.focus();
    }


    $input.addEventListener('input',onInput);
    $button.addEventListener('click',onClickButton);

}
