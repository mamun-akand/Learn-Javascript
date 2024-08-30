//Object Destructuring

let user = {
    id: 123,
    name: "Mamun",
    age: 24,
    education: {
        degree: "masters"
    }
};

// let id = user.id;
let { name } = user;
let { name: myName } = user; //name ta myName e dhukbe

console.log(name);
console.log(myName);

//nested object
let { education: { degree } } = user;
console.log(degree);


//Array Destructuring

let numbers = [1, 2, 3, 4, 5];

let [a, b] = numbers;
let [, x, , , z] = numbers;

console.log(a);
console.log(b);
console.log(x);
console.log(z);

