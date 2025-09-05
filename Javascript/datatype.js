// Primitive Data Types
// String Data Type
let name = "Nishan";
console.log(name);

// String concatenation
let greeting = "Hello, " + name + "!";
console.log(greeting);

//Number Data type
let age = 25;
console.log(age);

// Number arithmetic
let newAge = age + 5;
console.log(newAge);

// Boolean Data type
let isAdult = age >= 18;
console.log(isAdult);


//Null Data type
let emptyValue = null;
console.log(emptyValue);

// Undefined Data type
let notAssigned;
console.log(notAssigned);

// Derived Data type

// Array Data type
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
console.log(fruits[1]); // Accessing array element
fruits.push("Date"); // Adding end of the array
console.log(fruits);
fruits.unshift("Mango"); // Adding to the beginning of the array
console.log(fruits);
fruits.splice(1,0,"Orange"); // Adding at specific index
console.log(fruits);
fruits.splice(1,1,"Pineapple"); // Replacing element at specific index
console.log(fruits);

// Removing elements
fruits.pop(); // Removing from the end
console.log(fruits);
fruits.shift(); // Removing from the beginning
console.log(fruits);
fruits.splice(1,1); // Removing at specific index
console.log(fruits);

let size = fruits.length
console.log(size); // Length of the array

let hasBanana = fruits.includes("Banana");
console.log(hasBanana);

//JSON (Javascript object Notation)
let jsonString = '{"name": "Nishan", "age": 25, "isStudent": false}';
console.log(jsonString);
let users = JSON.parse(jsonString); // Converting JSON string to JavaScript object

// Object 
let user={
    name: "Nishan",
    age: 25,
    isStudent:false
}

console.log(user.name); // Accessing object property
console.log(user["age"]); // Accessing object property

// Array of objects
let details=[
    {name: "Nishan", age: 25, isStudent: false},
    {name: "John", age: 30, isStudent: true},
    {name: "Jane", age: 28, isStudent: false}
]
console.log(details[2])

// Operators 
//Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus

// Increment and Decrement Operators
let c = 10;
console.log(c++); // Post-increment
console.log(++c); // Pre-increment
console.log(c--); // Post-decrement
console.log(--c); // Pre-decrement

// Logical Operators
let x = true;
let y = false;
console.log(x && y); // Logical AND
console.log(x || y); // Logical OR
console.log(!x); // Logical NOT

// Bitwise Operators
let p = 5;  // 0101
let q = 3;  // 0011
console.log(p & q); // Bitwise AND
console.log(p | q); // Bitwise OR
console.log(p ^ q); // Bitwise XOR
console.log(~p);    // Bitwise NOT
console.log(p << 1); // Left shift
console.log(p >> 1); // Right shift

// Assignment Operators
let r = 10;
r += 5;  // Equivalent to r = r + 5
console.log(r);
r -= 3;  // Equivalent to r = r - 3
console.log(r);
r *= 2;  // Equivalent to r = r * 2
console.log(r);
r /= 4;  // Equivalent to r = r / 4
console.log(r);
r %= 3;  // Equivalent to r = r % 3
console.log(r);

// Unary Operators
console.log(+r);  // Unary plus
console.log(-r);  // Unary minus
console.log(++r); // Pre-increment
console.log(--r); // Pre-decrement

// Ternary Operator
let ageGroup = (r >= 18) ? "Adult" : "Minor";
console.log(ageGroup);

// Spread Operator
let newDetails = [...details, {name: "Alice", age: 22, isStudent: true}];
console.log(newDetails);

// Rest Operator
function displayDetails(...args) {
    console.log(args);
}
displayDetails(...details);

// 