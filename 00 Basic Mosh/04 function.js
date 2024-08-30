// Function declaration 
walk(); // it will work, explained in code line 20 
function walk() {
    console.log('Let\'s walk');
}

// Function expression
let run = function running() {  //named function expression
    console.log('Let\'s run named');
}
run();

let run2 = function () {        //annonymous: no name of function
    console.log('Let\'s run announymous');
}
run2();

//Hoisting

// Function declaration vs Expression
// In function declaration: we can call the function before defining, but not in function expression.
// Because in javascript engine all the functions declarations are moved at top by default automatically. This is called Hoisting.

// arguments
function sum(a, b) { //no need of a,b, here working with arguments
    let total = 0;
    for (let val of arguments) {
        total += val;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5));

// rest operator 
function sum(discount, ...prices) { //...prices is rest operators 
    let total = 0;
    for (let val of prices) {
        total += val;
    }
    return total * (1 - discount);
}
console.log(sum(0.2, 2, 3, 4, 5));


// getter and setter + Try and Catch 

const person2 = {
    first_name: 'Esraat',
    last_name: 'Zahan',
    get full_name() {
        return this.first_name + ' ' + this.last_name;
    },

    set full_name(givenName) {
        if (typeof givenName !== 'string')
            throw new Error('Value is not string');

        let parts = givenName.split(' ');
        if (parts.length != 2)
            throw new Error('Enter First and Last Name')

        this.first_name = parts[0];
        this.last_name = parts[1];
    }
};
console.log(person2.full_name);

try {
    person2.full_name = 'Liza Esraat'; // No Error
}
catch (thrownError) {
    alert(thrownError);
}
console.log(person2.full_name);






