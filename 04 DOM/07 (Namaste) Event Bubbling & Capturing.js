//Event Propagation: Bubbling and Capturing
//If Bubbling and Capturing combined, then all the capturing works first, and then all Bubbling will work.

document.querySelector("#grandparent")
    .addEventListener("click", () => {
        console.log("Grandparent");
    }, true);

document.querySelector("#parent")
    .addEventListener("click", () => {
        console.log("Parent");
    }, false);

document.querySelector("#child")
    .addEventListener("click", () => {
        console.log("Child");
    }, true);


// stop propagation: works for both bubbling and capturing

// document.querySelector("#grandparent")
//     .addEventListener("click", () => {
//         console.log("Grandparent");
//     }, false);

// document.querySelector("#parent")
//     .addEventListener("click", (e) => {
//         console.log("Parent");
//         e.stopPropagation();
//     }, false);

// document.querySelector("#child")
//     .addEventListener("click", () => {
//         console.log("Child");
//     }, false);

