"use strict"; //to go to strict mode

// "This" keyword in Global space
console.log(this);  // refers to global object: window(browser), global(node)


// "This" keyword inside a Function
function x() {
    //depends on strict/non strict mode:
    //non-strict: window, strict : undefined
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


