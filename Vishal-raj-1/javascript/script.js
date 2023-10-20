
// JavaScript Crash Course Video

/*
This is 
JavaScript
Crash 
Course 
Video
*/

console.log("Hello World")

let x = "Books";
let y; // variable declaration
y = 9; // value assign to a variable

let z = 10; 
z = 12;
const pi = 3.14;

console.log(pi)
// Data Types in JavaScript (Primitive Data Types)
let num = 10; // number
let language = "JavaScript" // string
let isStudent = false // boolean
let random; // undefined
let favouriteBook = "Let US C++"

// Non Primitive Data Types

//Array
let fruits = ["Apple", "Banana", "Mango"];
fruits.push("Lichi")
console.log(fruits)
let deleteFruit = fruits.pop()
console.log(deleteFruit)
console.log(fruits)
console.log(fruits[0], fruits.at(-1), fruits.length)
console.log(x)


// Objects
let student = {
    language: "JavaScript",
    isStudent: false,
}

console.log(student.language, student["language"])

// If key is present or not in the object
console.log(student.hasOwnProperty("language"))

// Operators

// Arithmethics

let num1 = 10;
let num2 = 20;

console.log(num2 + num1)
console.log(num2 - num1)
console.log(num2 * num1)
console.log(num2 / num1)
console.log(2 ** 4)
console.log(num2 % num1)

// Unary
let num3 = 10;
console.log(num3++) // postIncrement (first show then increase)
console.log(num3)

console.log(++num3) // preIncrement (first Increase then show)
console.log(num3--) // postDecrement 
console.log(--num3)


// Conditional
console.log(num2 > num1)
console.log(num2 < num1)
console.log(num2 >= num1)
console.log(num2 <= num1)
console.log(true && true)
console.log(false || false)
console.log(10 == 10)
console.log(10 === "10") // triple equal: value & type

// Boolean Operators: & (AND), | (OR), ~ (Compliment), ^ (XOR)

// Conditional Statements
let currentSignal = "Blue";

if(currentSignal == "Red"){
    console.log("STOP")
} else if(currentSignal == "Yellow"){
    console.log("READY")
} else if(currentSignal == "Green") {
    console.log("RIDE")
} else {
    console.log("Invalid Signal")
}

// Switch
switch(currentSignal){
    case "Red":
        console.log("STOP")
        break;
    case "Yellow":
        console.log("READY")
        break;
    case "Green":
        console.log("RIDE");
        break;
    default:
        console.log("Invalid Signal")
}

// Loops

// for
// fruits = ["Apple", "Banana", "Mango"];

for(let i=0; i < fruits.length; i++){
    console.log(fruits.at(i))
}

// for ..of
for(let fruit of fruits){
    console.log(fruit)
}

// for ..in (Objects)
// student
for(let key in student){
    console.log(student[key])
}

// While 
let count = 0;
while(count < 10){
    console.log(count)
    count++;
}

// Do While
do {
    console.log(count)
    count++;
} while (count < 10);

// Functions

// function declaration
function sum(a, b){
    return a+b;
}

function multiply(a, b){
    console.log(a*b)
}

// calling a function (Invokation)
console.log(sum(10, 20))
multiply(10, 20)

// function expression
const add = function(a, b){
    return a+b;
}

console.log(add(10, 20))


// Arrow function
const subtract = (a, b) => a-b;

const defaultGreeting = (Name = "John Doe") => {
    return `Hello ${Name}`
}

const greeting = Name => `Hello ${Name}`
console.log(subtract(20 , 10))
console.log(defaultGreeting("Vishal"))

// Higher Order Function
const studentNumbers = [24, 20, 12, 40, 36];

const filterNumber = studentNumbers.filter((num, index) => num <= 25)

console.log(studentNumbers)
console.log(filterNumber)

const gradedNumber = studentNumbers.map((num) => num/4)
console.log(gradedNumber)

// Student Average: 
const totalNumber = studentNumbers.reduce((acc, num) => acc + num, 0)
console.log(totalNumber)