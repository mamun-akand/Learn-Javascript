//Call back - Learn With Sumit
function display(some) {
    console.log(some);
}
function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    if (callback) callback(sum);
    return sum;
}
let total = calculator(6, 4, display);
// console.log(total);

