// block 
{
    var a = 10;     // function scoped
    let b = 20;     // block scoped
    const c = 30;   // block scoped

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(b); // not accessible
// console.log(c); // not accessible


//Shadowing

var x = 10;
{
    var x = 200; // x is declared before and here x is shadowed
    let y = 300; // let and const not shadowed
    const z = 400;
    console.log(x);
    console.log(y);
    console.log(z);
}
console.log(x); // x = 200 as shadowed,


//illegal shadowing

// let m = 10;
// {
//     var m = 20; // Invalid. m is declared by let. so here illegal
// }


var n = 10;
{
    let n = 20;     // Valid. n is declared by let. so here legal
    console.log(n); //n = 20
}
console.log(n); //n = 10


let p = 10;
function fun() {
    var p = 20; // valid. p is function scoped now
    console.log(p); //n = 10
}
fun();

