// Call Back Hell (This problem solved with Promise)

// enroll(function () {
//     progress(function () {
//         C(function () {
//             D(function () {
//                 E(function () {
//                     F(certificate);
//                 };
//             });
//         });
//     });
// });




//Creating Promise

// const possible = true;

// const myPromise = new Promise(function (resolve, reject) {
//     console.log("Practice Promise");

//     //Here any asynchrounous function inside Promise
//     setTimeout(function () {
//         if (possible) {
//             resolve('Do');
//         } else {
//             reject('Failed');
//         }
//     }, 3000);
// });

// myPromise
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (value) {
//         console.log(value);
//     })




//Call Back Hell Problem Solution of previous (01 Call Back Pattern)

let payment = true;
const mark = 80;

function enroll() {
    console.log("Course enrollment is in progress.");

    const myPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (payment) {
                resolve();
            } else {
                reject("Payment is failed");
            }
        }, 3000);
    });
    return myPromise;
}

function progress() {
    console.log("Course is on progress..");

    const myPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (mark >= 80) {
                resolve();
            } else {
                reject("Mark not enought to get certificate");
            }
        }, 5000)
    });
    return myPromise;
}

function certificate() {
    console.log("Preparing your certificate");

    const myPromise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Congrats! Here you go");
        }, 1000);
    });
    return myPromise;
}

enroll()
    .then(progress)
    .then(certificate)
    .then(function (value) {
        console.log(value);
    })
    .catch(function (value) {
        console.log(value);
    })
