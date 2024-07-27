//add in array
const array = [3, 4];
array.push(5, 6);   //insert at end
array.unshift(1, 2); //insert at beginning
array.splice(2, 0, 'a', 'b'); //insert middle
console.log(array);

//remove in array
const removeArray = [1, 2, 3, 4, 5];

let last = removeArray.pop();   //end
console.log(removeArray);
console.log(last);

let first = removeArray.shift(); //begining
console.log(removeArray);
console.log(first);

const removeArray2 = [1, 2, 3, 4, 5];
let middle = removeArray2.splice(2, 2); //middle
console.log(removeArray2);
console.log(middle);

//finding in array
const numbers = [1, 2, 3, 1, 4];
console.log(numbers.indexOf(1));
console.log(numbers.indexOf(1, 2));
console.log(numbers.indexOf(5)); //return -1 not found
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(1)); //return true

//Emptying array
let emptyArray = [1, 2, 3, 4, 5];
console.log(emptyArray);

// emptyArray = [];         //solution 1
// emptyArray.length = 0;   //solution 2
emptyArray.splice(0, emptyArray.length);
console.log(emptyArray);

//Combine and Slice Array
let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];
// let combinedArr = firstArr.concat(secondArr);
let combinedArr = [...firstArr, 'a', ...secondArr]; //spread operator for combining
console.log(combinedArr);

let sliceArr = [10, 20, 30, 40, 50];
let slicedOne = sliceArr.slice(2, 4);
console.log(slicedOne);

//iterating ar array
let iterArray = [3, 6, 9, 11];

for (let i = 0; i < iterArray.length; i++) {
    console.log(iterArray[i]);
}

for (let i of iterArray) {
    console.log(i);
}

iterArray.forEach(function (val, index) {
    console.log(index, val);
});

iterArray.forEach((val, index) => console.log(index, val)); //using arrow function

//Join and Split
let joinArray = [1, 2, 3];
let joined = joinArray.join('+');
console.log(joined);

let message2 = 'My First Message';
let splitted = message2.split(' ');
console.log(splitted);

let joinSplit = splitted.join('-');
console.log(joinSplit);

//Sorting
let sortArray = [3, 1, 2];
sortArray.sort();
console.log(sortArray);

sortArray.reverse();
console.log(sortArray);

let sortArray2 = [
    { id: 1, name: 'node.js' },
    { id: 2, name: 'javascript' }
];

sortArray2.sort(function (a, b) {
    // a<b  = -1
    // a>b  = 1
    // a==b = 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(sortArray2);

//Filter

let filterArray = [1, -2, 2, 3];

let filtered = filterArray.filter(function (val) {
    return val >= 0;
});
// let filtered = filterArray.filter(val => val >= 0); //arrow
console.log(filtered);

let mapped_value = filtered.map(function (val) {
    return '<li>' + val + '</li>';
});
console.log(mapped_value);

let html = '<ul>' + mapped_value.join(' ') + '</ul>';
console.log(html);




