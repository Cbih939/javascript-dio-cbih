/*document.getElementsByTagName('h1')

var heading1 = document.getElementsByTagName('h1')[0]

heading1

heading1.style.color = 'red'
*/

// contagem de números
var currentNumberWrapper = document.getElementById('currentNumberWrapper');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

// adicionando outras informações no sistema
