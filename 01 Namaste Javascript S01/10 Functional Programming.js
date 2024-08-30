// To escpare repeating. "DRY = Dont Repeat Yourself"

const circleRadius = [3, 4, 5, 6];

let calculate = function (array, logic) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(logic(array[i]));
    }
    return result;
};

let area = function (radius) {
    return Math.PI * radius * radius;
};

let circumference = function (radius) {
    return 2 * Math.PI * radius;
};

let diameter = function (radius) {
    return 2 * radius;
};

console.log(calculate(circleRadius, area));
console.log(calculate(circleRadius, circumference));
console.log(calculate(circleRadius, diameter));