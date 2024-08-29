"use strict"; //to go to strict mode

// "This" keyword in Global space

console.log(this);  // refers to global object: window(browser), global(node)


// "This" keyword inside a Function

function x() {
    //depends on strict/non strict mode:
    //non-strict: window, strict : undefined
    console.log(this);
}
x();