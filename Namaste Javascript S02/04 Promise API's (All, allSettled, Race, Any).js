let promise1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("P1 Success");
    }, 3000);
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("P2 Success");
    }, 1000);
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("P3 Success");
    }, 2000);
});