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
function onInputFunc(id) {
    id.value = id.value.toUpperCase();
}

// On Input
function onChangeFunc(id) {
    id.value = id.value.toUpperCase();
}

// On Mouse Over
function onMouseOverFunc(id) {
    id.innerHTML = "Chuye Dile amay";
}