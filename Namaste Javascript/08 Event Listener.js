//Event Listener with Click Count
// let cnt = 0;
// document.getElementById("myButton")
//     .addEventListener("click", function xyz() {
//         console.log("Button is clicked", ++cnt);
//     });


//Event Listener with Closure
function attachEventListenerWithClosure() {
    let cnt = 0;    //click count
    document.getElementById("myButton")
        .addEventListener("click", function xyz() {
            console.log("Button is clicked", ++cnt);
        });
}
attachEventListenerWithClosure();
