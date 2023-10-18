const numberId = document.getElementById('number');
const decrease = document.getElementById('decrease-button');
const increase = document.getElementById('increase-button');

const numberContent = numberId.textContent 
let number = parseInt(numberContent)

decrease.addEventListener('click', function() {
    number = number - 1
    numberId.textContent = number
});

increase.addEventListener('click', function() {
    number = number + 1
    numberId.textContent = number
});