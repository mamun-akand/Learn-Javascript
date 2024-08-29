"use strict"; //to go to strict mode

// "This" keyword in Global space

console.log(this);  // refers to global object: window(browser), global(node)


// "This" keyword inside a Function

function x() {
    //strict : undefined
    //non-strict: window (this substitution: undefeind/Null substitured to global object),
    console.log(this);
}
x();        //undefined
window.x(); //window.      differs by how we call the function


// "This" inside object's method: function inside object known as method in js

const obj = {
    a: 10,
    x: function () {
        console.log(this); //refers to "obj" object
    }
}
obj.x();


// "This" in Call, Apply, Bind

const student1 = {
    name: "Liza",
    printName: function () {
        console.log(this.name);
    }
}
const student2 = {
    name: "Mamun",
}

student1.printName();
student1.printName.call(student2); // call
// Apply and Bind: in next part (10 Call-Apply-Bind.js)


// "This" inside arrow function 

const myObj = {
    a: 10,
    x: () => {
        console.log(this);  // it provides "this" value of the "enclosing lexical context where it is now";
    }
}
myObj.x();


// "This" inside nested-arrow function

const myObj2 = {
    b: 20,
    x: function () {
        // console.log(this); //work like this actuall
        const y = () => {
            console.log(this);  // it provides "this" value of the "enclosing lexical context. where it is now";
        }
        y();
    }
}
myObj2.x();

// "This" inside DOM element => returns HTMLelement; //check index.html above (09 This keyword.js)


