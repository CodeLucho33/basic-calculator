let num1 = 8
let num2 = 2
document.getElementById(num1-el).textContent = num1;
document.getElementById(num2-el).textContent = num2;

function add(){
let sumOp = num1 +num2;
document.getElementById('sum-el').textContent = sumOp;
}
function substract(){
    let substractOp = num1- num2;
    document.getElementById('sum-el').textContent = substractOp;
}
function multiply(){
    let multiplyOp = num1*num2;
    document.getElementById('sum-el').textContent = multiplyOp;
}
function divide(){
    let divideOp = num1/num2
    document.getElementById('sum-el').textContent = divideOp;
}