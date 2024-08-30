// Example-01 
function parent() {
    var name = "ParentVariable";
    function display() {
        console.log(name);
    }
    display();
}
parent();


// Example-02
function sum_with_ten() {
    var num = 10;
    function add(val) {
        console.log(num + val);
    }
    return add;
}
var returnFunction = sum_with_ten(); //the returned function remember its lexical environment, i mean returns the full closure = function+LE
returnFunction(7); //ans: 17


//example-03
function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    a = 200;
    return y;
}
var returned = x();
returned(); //ans: 200