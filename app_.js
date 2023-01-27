
var firstNumber = document.getElementById('firstNumber');
var secondNumber = document.getElementById('secondNumber');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var multiply = document.getElementById('multiply');
var result = document.getElementById('result');
plus.addEventListener('click', function () {
    result.innerHTML = +firstNumber.value + +secondNumber.value;
});
minus.addEventListener('click', function () {
    result.innerHTML = +firstNumber.value - +secondNumber.value;
});
multiply.addEventListener('click', function () {
    result.innerHTML = +firstNumber.value * +secondNumber.value;
});