let payment = true;
const mark = 80;

function enroll(callback) {
    console.log("Course enrollment is in progress.");

    setTimeout(function () {
        if (payment) {
            callback();
        } else {
            console.log("Payment is failed");
        }
    }, 3000);
}

function progress(callback) {
    console.log("Course is on progress..");

    setTimeout(function () {
        if (mark >= 80) {
            callback();
        } else {
            console.log("Mark not enought to get certificate");
        }
    }, 5000)
}

function certificate() {
    console.log("Preparing your certificate");

    setTimeout(function () {
        console.log("Congrats! Here you go");
    }, 1000);
}

enroll(function () {
    progress(certificate);
});