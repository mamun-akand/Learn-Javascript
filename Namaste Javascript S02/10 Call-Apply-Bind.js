// call/apply/bind: sharing function/methods

// call : 
//example-1
const student1 = {
    name: "Liza",
    printName: function () {
        console.log(this.name);
    }
}
const student2 = {
    name: "Mamun",
}
student1.printName.call(student2); // call method

//example-2
const name1 = {
    firstName: "Esraat",
    lastName: "Zahan"
}
const name2 = {
    firstName: "Mamun",
    lastName: "Akand"
}
const printFullName = function () {
    console.log(this.firstName + " " + this.lastName);
}
const printNameDistrict = function (vill, district) {
    console.log(this.firstName + " " + this.lastName + " From " + vill + " " + district);
}

printFullName.call(name1);  //call method
printFullName.call(name2);  //call method

printNameDistrict.call(name2, "Alinapara", "Sherpur");                          // Call method
//Apply Method: Only diff is second argument is Array-list.
printNameDistrict.apply(name2, ["Alinapara", "Sherpur"]);                       // Apply method

// Bind Method: function and bind together. then returns a new function.
const returnedFunction = printNameDistrict.bind(name2, "Alinapara", "Sherpur"); // Bind method
console.log(returnedFunction);
returnedFunction();


