// Event Propagation: Bubbling and Capturing 
// Event-Bubbling : By default thake or third parameter "false" dite hoy. inside aage fire hoy, then outside
// Event-Capturing : Third parameter "true" dite hoy. Outside aage fire hoy, then inside

let inside = document.getElementById("insideP");
let container = document.getElementById("containerDiv");

inside.addEventListener("click", function () {
    console.log("My Inside");
}, true);

container.addEventListener("click", function () {
    console.log("My Container");
}, true);