// ...rest operator when used in function parameter

function myFunc(...parameters) {
    console.log(parameters);
}
myFunc(1, 2, 3, 4);

function myFunc2(a, b, ...parameters) {
    console.log(a);
    console.log(b);
    console.log(parameters);
}
myFunc2(1, 2, 3, 4);


// Default parameter

function myFunc3(x = 10) {
    console.log(x);
}
myFunc3(5); //5
myFunc3(undefined); //10
myFunc3(null); //null


