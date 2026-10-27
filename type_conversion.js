"5" + 2

"10" - 3

"4" * 5

"20" / 4

console.log('111111111111111111111',"20" / 4);

10 + "20"

"15" - "5"

true + 1

false + 10

null + 5

"Hello" + 10


"5" + 2 + 3
console.log('2222222222222',5 + 2 + "3");


"10" - "2" + "3"

true + false

null == undefined

null === undefined

"10" > 5

console.log('33333333333333',"10" > 5);

"apple" + 5


console.log('44444444444444444444',"apple" + 5);

undefined + 10


console.log("abc" - 1)






// Shopping Cart

const price = "1500";
const delivery = 100;
console.log(Number(price) + delivery);

// Form Quantity

const quantity = "3";
console.log(Number(quantity) * 499);

// User Age

console.log(Number("25") + 1);
console.log(Number("25") - 1);

// API Data

console.log(Number("0") == false);
console.log(Number("0") === false);

// Empty Array

console.log(Number([]) + 1);
console.log(Number([]) == false);

    // Boolean Conversion

console.log(Number(true) + "1");
console.log(Number(true) - "1");

// Invalid API Price

const pric = "500abc";
console.log(Number(price) * 2);

// Array Comparison

console.log(Number([1]) == 1);
console.log(Number([1]) === 1);

// Null Arithmetic

console.log(Number(null) + 1);
console.log(Number(null) * 5);

// Undefined Comparison

console.log(Number(undefined) == null);
console.log(Number(undefined) >= 0);




// practice:

Number("100");

String(250);

Boolean(1);

Boolean(0);

Number("Hello");

parseInt("123", 10);

parseFloat("45.67");

Number(true);

String(false);

Number("");

// 21. Shopping cart total
const price = "1500";
const deliveryCharge = 100;
const total = Number(price) + deliveryCharge;

// 22. Registration form
const age = "25";
const nextYearAge = Number(age) + 1; 

// 23. Product quantity
const quantity = "3";
const unitPrice = 499;
const amount = Number(quantity) * unitPrice;

// 24. Employee salary
const monthlySalary = "35000";
const annualSalary = Number(monthlySalary) * 12;

// 25. User profile display
const userId = 1025;
console.log("Your user ID is " + String(userId));

// 26. Form validation
const username = "Vinothini";
console.log(Boolean(username));

// 27. API price validation
const converted = Number("500abc");
console.log(Number.isFinite(converted));

// 28. Discount calculation (15% of ₹2,000)
const discountPercent = Number("15");
const discount = (2000 * discountPercent) / 100;
const finalPrice = 2000 - discount;

// 29. Marks calculation
const marks = ["85", "90", "95"].map(Number);
const totalMarks = marks[0] + marks[1] + marks[2];
const average = totalMarks / marks.length; 

