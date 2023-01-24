



const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

buttonNode.addEventListener('click', function(){
    const inputValue = inputNode.value;

    if(!inputValue) {
        return;
    }

    const answer = inputNode.value;
    let output = 'Правильный ответ';

    if (answer !== 'да') {
        output = 'Ответ неправильный';
    }

    outputNode.innerHTML = output;

});