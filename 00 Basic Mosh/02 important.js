
//Hoisting

// Function declaration vs Expression
// In function declaration: we can call the function before defining, but not in function expression.
// Because in javascript engine all the functions declarations are moved at top by default automatically. This is called Hoisting.


// Scope: Global and Local Scope 

let color = 'Red'; // Global Scope
{ // local scope
    let color = 'Green';
    console.log(color); //inside local scope, local precedes global
}
console.log(color); //getting Global one


// Var vs Let

// Var          : fucntion-scoped variable
// Let, const   : block-scoped variable

function test() {
    for (var i = 0; i < 3; i++) {
        console.log(i);
    }
    console.log(i); // here it works as it is "var". here "let" wont work.
}
test();