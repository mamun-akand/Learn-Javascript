//object
let person = {
    myName: 'Mamun',
    age: 24,
    favourite: 'Red'
};

person.age = 22;    // Dot Notation
person['age'] = 23; // Bracket Notation

person.myHair = 'Black'; // we can add feature after object creation
delete person.favourite; // we can delete feature

console.log(person);

const circle = {
    radius: 2,
    location: { //object in object
        x: 100,
        y: 200
    },
    draw: function () {     //function/method in object
        console.log('Lets Draw Now');
    }
};
circle.draw();

// Factory Function: it produces object
function createCircle(rad) {
    const circle = {
        radius: rad,
        draw() {     //function/method in object
            console.log('Lets Draw Now');
        }
    };
    return circle;
}
let myCircle1 = createCircle(2);
console.log(myCircle1.radius);
let myCircle2 = createCircle(3);
console.log(myCircle2.radius);

// Constructor Function: for creating object
function MyCircle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Lets Draw My Function');
    }
}
const circle_1 = new MyCircle(3);
console.log(circle_1);
const circle_2 = new MyCircle(5);
console.log(circle_2);



