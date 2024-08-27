let p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("P1 Success");
    }, 3000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        // resolve("P2 Success");
        reject("P2 Error");
    }, 1000);
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("P3 Success");
    }, 2000);
});

// Promise.all([p1, p2, p3])
//     .then(function (values) {
//         console.log(values);
//     })
//     .catch(function (err) {
//         console.error(err);
//     })

// Promise.allSettled([p1, p2, p3])
//     .then(function (values) {
//         console.log(values);
//     })

// Promise.race([p1, p2, p3])
//     .then(function (values) {
//         console.log(values);
//     })
//     .catch(function (err) {
//         console.error(err);
//     })

Promise.any([p1, p2, p3])
    .then(function (values) {
        console.log(values);
    })
    .catch(function (err) {
        console.error(err);
    })

