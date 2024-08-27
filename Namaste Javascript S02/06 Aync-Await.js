const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Resolved Promise 1");
    }, 5000); //5s
});

const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Resolved Promise 2");
    }, 10000); //10s
});

async function handlePromise() {
    console.log("Hello");

    let message1 = await p1;  //JS Engine will "wait" here for promise resolve. Basically JS engine will not wait here, rather "handlePromise" function will be suspended from call-stack for promise period time.
    console.log("Liza");    //this line printed after p1 execution
    console.log(message1);


    let message2 = await p2;  //JS Engine will "wait" here for promise resolve. Basically JS engine will not wait here, rather "handlePromise" function will be suspended from call-stack for promise period time.
    console.log("Mamun");    //this line printed after p2 execution
    console.log(message2);
}
handlePromise();




// function getData() {
//     p.then(function (res) {
//         console.log(res);   //this line printed later
//     })
//     console.log("Mamun");   //this line printed first
// }
// getData();