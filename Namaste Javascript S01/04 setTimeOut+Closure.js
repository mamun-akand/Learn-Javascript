// javascript does not wait for any part of the code. it moves

//wrong

// function fun() {
//     for (let i = 1; i <= 5; i++) { //here var is the problem
//         setTimeout(function () { //js code will not wait here.
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Esraat");
// }
// fun();
// output:
// Esraat
// 6
// 6
// 6
// 6
// 6

//Right-01

// function fun() {
//     for (let i = 1; i <= 5; i++) { //here let is the solution
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Esraat");
// }
// fun();


//Right-02

function fun() {
    for (var i = 1; i <= 5; i++) {
        function temp(x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000);
        }
        temp(i);
    }
    console.log("Esraat");
}
// fun();


//Interview Part

function outest() {
    var c = 50;
    function outer(b) {
        var a = 10;
        function inner() {
            console.log(a, b, c);
        }
        return inner;
    }
    return outer;
}
var calling = outest();
calling("Liza")();



function garbage() {
    var a = 2, b = 5; //b is not used in inner-func so garbage collected
    function garbageInner() {
        console.log(a);
    }
    garbageInner();
}
garbage();

//Vivasoft 

const add = (function () {
    let counter = 0;
    return function () {
        counter += 1;
        return counter;
    };
})();

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3
