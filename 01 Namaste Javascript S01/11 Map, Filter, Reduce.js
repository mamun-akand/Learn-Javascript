// Higher-Order Function: Map, Filter, Reduce  

// Map
let ara = [4, 5, 6, 7];

// double 
function doubleLogic(x) {
    return 2 * x;
}
let output1 = ara.map(doubleLogic);
console.log(output1);

//triple
function tripleLogic(x) {
    return 3 * x;
}
let output2 = ara.map(tripleLogic);
console.log(output2);

//binary
function binaryLogic(x) {
    return x.toString(2);
}
let output3 = ara.map(binaryLogic);
console.log(output3);

//tricky map: Joining First and Last Name
const users = [
    { firstName: "Esraat", lastName: "Liza", age: 23 },
    { firstName: "Mamun", lastName: "Akand", age: 23 },
    { firstName: "Zareef Al", lastName: "Rayyan", age: 23 },
];
let outputt = users.map((x) => x.firstName + " " + x.lastName);
console.log(outputt);




// Filter
let arr = [3, 4, 5, 6, 7, 8];

//Odd
function isOdd(x) {
    return x % 2;
}
let output4 = arr.filter(isOdd);
console.log(output4);

//Even
function isEven(x) {
    return x % 2 == 0;
}
let output5 = arr.filter(isEven);
console.log(output5);

//greater than 5
function greaterThan5(x) {
    return x > 5;
}
let output6 = arr.filter(greaterThan5);
console.log(output6);

//Tricky Filter
//['Esraat', 'Mamun', 'Yousuf']
const users3 = [
    { firstName: "Esraat", lastName: "Liza", age: 23 },
    { firstName: "Mamun", lastName: "Akand", age: 24 },
    { firstName: "Zareef Al", lastName: "Rayyan", age: 5 },
    { firstName: "Yousuf", lastName: "Hassan", age: 24 },
    { firstName: "Hassan", lastName: "Rayyan", age: 15 },
];
let outputt3 = users3.filter((x) => x.age >= 18).map((y) => y.firstName);

console.log(outputt3);




//Reduce
let arra = [4, 5, 8, 9, 6, 7];

//sum
let result = arra.reduce(function (sum, val) {
    sum = sum + val;
    return sum;
}, 0);  // 0 is initial val of sum
console.log(result);

//max
let result2 = arra.reduce(function (max, val) {
    if (val > max) max = val;
    return max;
}, 0);  // 0 is initial val of sum
console.log(result2);


//Tricky Reduce-1
// {5: 1, 23: 1, 24: 2}

const users2 = [
    { firstName: "Esraat", lastName: "Liza", age: 23 },
    { firstName: "Mamun", lastName: "Akand", age: 24 },
    { firstName: "Zareef Al", lastName: "Rayyan", age: 5 },
    { firstName: "Yousuf Hassan", lastName: "Rayyan", age: 24 },
];
let outputt2 = users2.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age]++;
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(outputt2);

//Tricky Reduce-2
//['Esraat', 'Mamun', 'Yousuf']
const users4 = [
    { firstName: "Esraat", lastName: "Liza", age: 23 },
    { firstName: "Mamun", lastName: "Akand", age: 24 },
    { firstName: "Zareef Al", lastName: "Rayyan", age: 5 },
    { firstName: "Yousuf", lastName: "Hassan", age: 24 },
    { firstName: "Hassan", lastName: "Rayyan", age: 15 },
];
let outputt4 = users4.reduce(function (acc, curr) {
    if (curr.age >= 18) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);
console.log(outputt4);


