console.log("Hello");

setTimeout(function () {
    console.log("Now SetTimeOut Runs");
}, 5000);

//Blocking Main Thread: million line of code for 10s

let startDate = new Date().getTime();
let endDate = startDate;

while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
}

console.log("End of 10s");