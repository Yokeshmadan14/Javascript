//JavaScript Type Conversion: Implicit vs Explicit

// 1. Implicit Type Conversion: JavaScript automatically converts the data type during an operation.
// Example: console.log("5" - 2); → Output: 3
// 2. Explicit Type Conversion: The developer manually converts the data type using a function such as Number().
// Example: console.log(Number("5") + 2); → Output: 7



// 1. Implicit Type Conversion (Type Coercion)
// Definition: JavaScript automatically converts 
//              one data type into another without the developer explicitly converting it.

// Real-time example: Shopping cart total
// Imagine an e-commerce application where the product price comes from an API as a string.

// const price = "1500";
// const deliveryCharge = 100;

// const total = price + deliveryCharge;

// console.log(total);        // "1500100"
// console.log(typeof total); // "string"

//This is a real-world bug: the expected total is ₹1,600, but the result is "1500100".

// Correct solution
const price = "1500";
const deliveryCharge = 100;

const total = Number(price) + deliveryCharge;

console.log(total);        // 1600
console.log(typeof total); // "number"




// Common implicit conversion examples



// Code         Output            Explanation
// "5" + 2          "52"              Number converted to string
// "5" - 2           3                String converted to number
// "10" * 2      20               String converted to number
// "10" / 2      5                String converted to number
// true + 1      2                true converted to 1
// false + 5         5                false converted to 0
// null + 1      1                null converted to 0
// undefined + 1     NaN              undefined becomes NaN in numeric arithmetic



// Explicit Type Conversion
// Definition: Explicit conversion happens when the developer deliberately converts a value from one data type to another using functions or operators.
// Common methods:
// - Number() — converts to a number.
// - String() — converts to a string.
// - Boolean() — converts to a boolean.
// - parseInt() — parses an integer from a string.
// - parseFloat() — parses a floating-point number.


// Form input in a React application
// HTML form inputs return strings, even when the user enters a number.


const quantity = "3";
const priceAmount = "499";

const totalAmount = Number(quantity) * Number(priceAmount);

console.log(totalAmount); // 1497

// Without conversion:
console.log("3" + "499"); // "3499"

// With conversion:

console.log(Number("3") + Number("499")); // 502


// 1. Implicit: In a shopping app,
//          JavaScript automatically handles "5" + 2 as "52" because the + operator joins strings.

// 2. Explicit: In a shopping app, 
// the developer uses Number("5") + 2 to convert the price string into a number and get 7.