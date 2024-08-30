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

async function course() {
    try {
        await enroll();
        await progress();
        let message = await certificate();
        console.log(message);
    } catch (err) {
        console.log(err);
    }
}

course();


// enroll()
//     .then(progress)
//     .then(certificate)
//     .then(function (value) {
//         console.log(value);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })