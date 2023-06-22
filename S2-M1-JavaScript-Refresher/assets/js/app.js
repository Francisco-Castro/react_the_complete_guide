// - DONT forget returning a value in a function

// Import one variable
// import apiKey from "./util.js"

import { apiKey } from "./util.js";
// Import defined variables. Notice the second has an alias
// import { apiKey, apiKey_2 as key_2} from "./util.js";

// Import all
// import * as utils from "./util.js";

// console.log(utils.apiKey)
console.log(apiKey);

function sum(a, b = 8) {
  return `Sum of ${a} plus ${b} is equal to ${a + b}`;
}
// console.log(sum(2, 3));
console.log(sum(2));

// Anonymous function
export default () => {
  console.log("Hello");
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const sum2 = (a, b) => a + b;
console.log(sum2(2, 3));

// Objects
const user = {
  name: "Max",
  age: 34,
  greet() {
    return `${this.name} is ${this.age} years old.`;
  },
};
console.log(user);

const { name: userName, age } = user;

console.log(userName, age);
console.log(user.greet());

// Classes in JS
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Welcome ${this.name}!!`;
  }
}

const user1 = new User("Mannuel", 33);
console.log(user1);

console.log(user1.greet());

// Arrays []

const colors = ["red", "black", "yellow"];
console.log(`${colors[0]} - ${colors[2]} - ${colors[1]} - ${colors[0]}`);

colors.push("purple");
console.log(`${colors}`);

const indexOfRed = colors.findIndex((color) => color === "red");
console.log(`Index of Red is ${indexOfRed}`);
const indexOfBlack = colors.findIndex((color) => color === "black");
console.log(`Index of Red is ${indexOfBlack}`);

const colorMsg = colors.map(
  (color) => `Color '${color}' has ${color.length} letters`
);
console.log(colorMsg);

// Remember wrap the return in parenthesis
const colorObj = colors.map((color) => ({ name: color }));
console.log(colorObj);

// Destructuring
const userNameDataForMax = ["Max", "Schwarz"];
const [firstName, lastName] = userNameDataForMax;

console.log(firstName, lastName);

const car = {
  color: "Black",
  state: "Old",
};

const { color: carColor, state: carState } = car;
console.log(carColor, carState);

// Destructuring in Function Parameter Lists
class Order {
  constructor(id, price) {
    this.id = id;
    this.price = price;
  }
}

function returnPrice({ price: price }) {
  return `Product price is: ${price}`;
}
console.log(returnPrice({ id: 123, price: 99 }));
const newOrder = new Order("some_id", 99);
console.log(newOrder);
console.log(returnPrice(newOrder));

// Spread operator to extend an array or an object
const sizes = ["small", "medium", "large"];
const newSizes = [...sizes, "x-large"];
console.log(sizes);
console.log(newSizes);

const family = {
  sister: "Anne",
  brother: "Robert",
};

const extendFamily = {
  mom: "Maria",
  ...family,
};

console.log(extendFamily);

const pass = prompt("Your password");
// Control structures
if (pass === "pass1") {
  console.log("1");
} else if (pass === "pass2") {
  console.log("2");
} else if (pass == "pass3") {
  console.log("3");
} else {
  console.log("default");
}

const controlStructures = ["if", "for", "cond"];

for (const cs of controlStructures) {
  console.log(cs);
}

// Using function as values

function handleTimeOut() {
    console.log("Time is out!")
}

const handleTimeOut2 = () => console.log("Time is out... again!")
// Don't put parenthesis when calling a function because immediately is executed
setTimeout(handleTimeOut, 300);
setTimeout(handleTimeOut2, 300);

function greeter(greetFn) {
    return greetFn();
}

greeter(() => console.log("-- Hi --"));

// Nested functions

function level1() {
    function level2() {
        console.log("This is level2 call")
    }

    level2()
    console.log("This is a level1 call")
}

console.log(level1());

const helloLength = "hello".length

console.log("hellowLenght: ", helloLength)

// Popular functions used in JS
// map()
// find()
// findIndex()
// filter()
// reduce()
// concat()
// slice()
// splice()