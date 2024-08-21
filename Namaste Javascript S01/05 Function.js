//Function Statement or Function Declaration
function a() {
    //anything
}

// Function Expression (Anonymous)
var b = function () {
    console.log("b function")
}

// Function Expression (Named)
var b = function xyz() {
    console.log("b function")
}

// First Class Function/Citizens
function myFunc(one_function) { //function as para
    console.log(one_function);
}
function xyz() {
}
myFunc(xyz); //function pass


function abc() {
    return function () { //retun function
        console.log("Mamun");
    }
}
abc()();


//arrow_function
let greet = () => {
    console.log("Hello");
}
greet();

let sum = (a, b) => a + b;
console.log(sum(5, 7));
