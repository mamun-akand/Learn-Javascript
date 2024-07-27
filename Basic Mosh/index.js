console.log('Esraat Zahan Liza');

//variable
var name = 'Liza';
let nameSecond = 'Esraat';
const PI = 3.14;
console.log(PI);
let myAge;
console.log(myAge);

//array
let myArray = ['Red', 'Green', 105];
myArray[4] = 'Esraat';
console.log(myArray);

//Function
function greet(name) {
    console.log('Hello ' + name);
}
greet('Liza');

function square(num) {
    return num * num;
}
console.log(square(2));

let x = 1;
console.log(x != 1);

// Falsy(False): undefined, Null, 0, '', False, NaN
// Truthy: the rest of falsy is truthy


// if-else
let val = 10;

if (val < 10) {
    console.log('Less');
} else if (val == 10) {
    console.log('Equal');
} else {
    console.log('Greater');
}

// Switch Case
switch (val <= 10) {
    case true:
        console.log('Less or Equal');
        break;
    case false:
        console.log('Greater');
        break;
}

// for, while, do-while loop
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

let j = 0;
while (j <= 5) {
    console.log(j);
    j++;
}

let k = 0;
do {
    console.log(k);
    k++;
} while (k <= 3);

// for-in, for-of(ES6)
let anArray = ['Red', 'Green', 'Blue'];
for (let i in anArray) {
    console.log(i + ' ' + anArray[i]);
}
for (let i of anArray) {
    console.log(i); // i will carry the direct value
}

// Template Literals
let myName = 'John';
let message = // text are organized.
    `
    Hi ${myName}
    
    Thank you so much for joining the meeting
    
    Best regards
    Mamun
    `

console.log(message);

