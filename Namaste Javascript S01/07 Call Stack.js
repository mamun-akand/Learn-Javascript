function first() {
    console.log("First");
    second();
    console.log("First again");
}

function second() {
    console.log("Second");
    third();
    console.log("Second again");
}

function third() {
    console.log("Third");
}

first();