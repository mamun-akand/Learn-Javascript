//Read vivasoft: Call by value and Call by reference
//Read Notes

//Primitive Data Type (Unchangable)
let str1 = "Hi there, I am a string!";
console.log(str1[1]); // "i"

str1[1] = "e";
console.log(str1); // "Hi there, I am a string!"

(function sub(a, b) {
    return a - b;
})();