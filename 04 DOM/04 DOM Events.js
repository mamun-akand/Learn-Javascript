//On Click
function myFuncOnClick1() {
    let element = document.querySelector("#title1");
    element.innerHTML = "You Clicked Me"
}
function myFuncOnClick2(varName) {
    varName.innerHTML = "Betha Paisi"
}

let button = document.querySelector("#myButton");   //myButton
button.onclick = function () {
    button.innerHTML = "Abar Marla";
}

// OnLoad and OnUnload
function onLoadFunc() {
    console.log("Loaded");
}

// On Input
function onInputFunc(x) {
    x.value = x.value.toUpperCase();
}

// On Input
function onChangeFunc(x) {
    x.value = x.value.toUpperCase();
}

// On Mouse Over and On Mouse Out 
function onMouseOverFunc(x) {
    x.innerHTML = "Chuye Dile amay";
}
function onMouseOutFunc(x) {
    x.innerHTML = "Shoytan Chele";
}

// On Mouse Down and Up
function onMouseDownFunc(x) {
    x.innerHTML = "Charo Amay";
}
function onMouseUpFunc(x) {
    x.innerHTML = "Uffff betha lagse";
}

// On Focus and On Blur
function onFocusFunc(x) {
    x.style.background = "Yellow";
}
function onBlurFunc(x) {
    x.style.background = "White";
}