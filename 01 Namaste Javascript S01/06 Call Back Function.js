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



