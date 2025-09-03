console.log("Hello, World!"); // Prints "Hello, World!" to the console

// This is a Single line Comment 

/*
This is a Multi-line Comment
It spans multiple lines
*/

// Variable and constant declarations

console.log(name)  // Prints "undefined" because `var` is hoisted but not initialized yet

var name = "John"; // Declares a variable `name` with value "John"
const age = 30;    // Declares a constant `age` with value 30 (cannot be reassigned)

name = "Nishan Kumar Rai"  // Reassigns `name` (allowed with var)
console.log(name)          // Prints "Nishan Kumar Rai"

// javascript scope block scope 

var a = 10;        // Declares variable `a` with value 10
console.log(a);    // Prints 10

{
    var a = 20;    // `var` is function-scoped, so this changes outer `a` too
    console.log(a); // Prints 20
}

console.log(a);    // Prints 20 (outer `a` was overwritten)

// Block scoped variable with let

let b = 30;        // Declares block-scoped variable `b` with value 30
console.log(b);    // Prints 30

{
    let b = 40;    // Declares a NEW block-scoped variable `b`
    // If we wrote `b = 30` here, it would update THIS inner `b`, not outer one
    console.log(b); // Prints 40
}

console.log(b);    // Prints 30 (outer `b` is untouched)

const pi = 3.14;   // Declares a constant `pi` with value 3.14 (cannot be reassigned)
console.log(pi);   // Prints 3.14

const Role = "Admin"; // Declares a constant `Role` with value "Admin"
console.log(Role);    // Prints "Admin"
