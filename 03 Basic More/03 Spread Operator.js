// spread operator 

let ara = [1, 2, 3];
// let ara2 = [ara[0], ara[1], ara[2], 4, 5];
let ara2 = [...ara, 4, 5];
console.log(ara2);

// let araCopy = ara;       //it copies the address. if araCopy changes, then ara will be changed too.
let araCopy2 = [...ara];    // now it is independently new array
console.log(araCopy2);

let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let numbers = [...num1, ...num2];
console.log(numbers);

// spread operator in object
let obj1 = {
    x: 1,
    y: 2
}
let obj2 = {
    a: 1,
    b: 2
}
let finalObj = {
    ...obj1,
    ...obj2
}
console.log(finalObj);
