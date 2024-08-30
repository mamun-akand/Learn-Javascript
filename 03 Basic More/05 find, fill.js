
//array.find()
let myAra = [1, 2, 4, 9, 15, 20];

let myLogic = function (x) {
    return x > 4;
};

let result = myAra.find(myLogic);   //9
console.log(result); //9

let result2 = myAra.findIndex(myLogic);   //9
console.log(result2); //9


//array.fill()
let ara = [1, 2, 4, 9, 15, 20];

// ara.fill(5);
ara.fill(5, 1, 5);
console.log(ara);

