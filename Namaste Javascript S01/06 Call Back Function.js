//Call back function

setTimeout(function () {    //would run at last
    console.log("It is timeOut");
}, 5000);

function myFun(y) {
    console.log("myFun");
    y();
}

myFun(function y() { // y() is callback func
    console.log("y");
});


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



