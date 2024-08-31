//addEventListener(): HTML portion e "onclick" or any event na likhe, direct js code diye event listen kora. Eta HTML and JS code alada kore. 

let element = document.getElementById("myEventListener");
element.addEventListener("click", function () {
    element.innerHTML = "You Clicked Me";
});

//add many handlers to the same element
function myFunction() {
    console.log("Clicked Event-Listener")
}
element.addEventListener("click", myFunction);

//passing parameter
function myFunction2(x) {
    console.log(x);
}
element.addEventListener("mouseover", function () {
    myFunction2("Working Well");
});


//Add Event-Listener to window object
window.addEventListener("resize", function () {
    let x = window.outerWidth;
    let y = window.outerHeight;
    console.log(`Window Width: ${x}, Window Height: ${y},`)
});


//Remove event listener
function myFunction3() {
    console.log(Math.random());
}
let element2 = document.getElementById("removeEventListener");
element2.addEventListener("mouseover", myFunction3);
//remove
let stop_button = document.getElementById("stopButton");
stop_button.addEventListener("click", function () {
    element2.removeEventListener("mouseover", myFunction3);
});

