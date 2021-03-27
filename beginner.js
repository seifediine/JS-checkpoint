/* --------------- EXO 1 -------------- */

// comments can make code readable

/* comments can make code readable,
easy to reuse and informative */

/* Create a variable.js file and declare variables and assign string, boolean, undefined and null data types */
const $string = "Seifeddine";
const $boolean = true;
const $undefined = undefined;
const $null = null;

/* Create datatypes.js file and use the JavaScript typeof operator to check different data types. 
Check the data type of each variable */

console.log(typeof $string);
console.log(typeof $boolean);
console.log(typeof $undefined);
console.log(typeof $null);

// Declare 4 variables without assigning values
let firstName;
let lastName;
// let age;
// let city;

// Declare four variables with assigned values
const first_name = "Seifeddine";
const last_name = "Elkorichi";
const age = 30;
const city = "Boumerdes";

// Declare variables to store your first name, last name, marital status, country and age in multiple lines
const pinazza = {
  firstName: "Seifeddine",
  lastName: "Elkorichi",
  maritalStatus: "Single",
  country: "Algeria",
  age: 30,
};

// Declare variables to store your first name, last name, marital status, country and age in a single line
const pinazza = ["Seifeddine", "Elkorichi", "Single", "Algeria", 30];

/* Declare two variables myAge and yourAge and assign them initial values and log to the browser console like this :
   I am 25 years old.
   You are 30 years old. */

const myAge = 25;
const yourAge = 30;
console.log(`I am ${myAge} years old, and your are ${yourAge} years old`);

/* ------------------- EXO 2 ------------------ */
/* Figure out the result of the following comparison expression first without using console.log(). After you decide 
the result confirm it using console.log() : */

4 > 3; // True
console.log(4 > 3);

4 >= 3; // True
console.log(4 >= 3);

4 < 3; // False
console.log(4 < 3);

4 <= 3; // False
console.log(4 <= 3);

4 == 4; // True
console.log(4 == 4);

4 === 4; //True
console.log(4 === 4);

4 != 4; // False
console.log(4 != 4);

4 !== 4; // False
console.log(4 !== 4);

4 != "4"; // False
console.log(4 != "4");

4 == "4"; // True
console.log(4 == "4");

4 === "4"; // False
console.log(4 === "4");

4 > 3 && 10 < 12; // True
console.log(4 > 3 && 10 < 12);

4 > 3 && 10 > 12; // False
console.log(4 > 3 && 10 > 12);

4 > 3 || 10 < 12; // True
console.log(4 > 3 || 10 < 12);

4 > 3 || 10 > 12; // True
console.log(4 > 3 || 10 > 12);

!(4 > 3); // False
console.log(!(4 > 3));

!(4 < 3); // True
console.log(!(4 < 3));

!false; // True
console.log(!false);

!(4 > 3 && 10 < 12); //False
console.log(!(4 > 3 && 10 < 12));

!(4 > 3 && 10 > 12); // True
console.log(!(4 > 3 && 10 > 12));

!(4 === "4"); // True
console.log(!(4 === "4"));

/* -------------------- EXO 3 ------------------ */

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

const base = prompt("Enter the base of the triangle");
const height = prompt("Enter the height of the triangle");
const area = alert(`Thea Area of the triangle is ${(base * height) / 2}`);
console.log(`The Area Of That famous Triangle is ${(base * height) / 2}`);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle.

const side_a = parseInt(prompt("Enter the A side of the traiangle"));
const side_b = parseInt(prompt("Enter the B side of the traiangle"));
const side_c = parseInt(prompt("Enter the C side of the traiangle"));
const perimeter = side_a + side_b + side_c;
alert(`The perimeter of the triangle is ${perimeter}`);

// Get length and width using prompt and calculate the area and perimeter of the rectangle.

const length = parseInt(prompt("Enter The Length of the Rectangle"));
const width = parseInt(prompt("Enter The width of the Rectangle"));
const _area = length * height;
alert(`The Area of the Rectangle is ${_area}`);
const _perimeter = (length + width) * 2;
alert(`The Perimeter of the Rectangle is ${_perimeter}`);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle.

const pi = 3.14;
const r = parseInt(prompt("Enter the Radius of the Circle"));
const $area = pi * r * r;
alert(`The Area of the Circle is ${$area}`);
const circumference = 2 * pi * r;
alert(`The Circumference of the Circle is ${circumference}`);

/* ----------------- EXO 4 ------------------- */
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const userAge = prompt("Enter Your Age ");

if (userAge >= 18) {
  alert("You are old enough to drive");
} else {
  alert(`You are left with ${18 - userAge} years to drive`);
}

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

const myAge = prompt("My age is ");
const yourAge = prompt("Please enter your age");

if (yourAge < myAge) {
  alert(`You are ${myAge - yourAge} years younger than me!!`);
} else if (yourAge == myAge) {
  alert("Awesome!! We've got the same age");
} else {
  alert(`You are ${yourAge - myAge} older than me`);
}

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not ?

const number = prompt("Enter a number ");
if (number % 2 == 0) {
  alert(`Hola ${number} is Even 😁`);
} else {
  alert(`Oops ${number} is such an Odd number 😥`);
}

/* Write a code which can give grades to students according to theirs scores:
  80-100, A
  70-89, B
  60-69, C
  50-59, D
  0-49, F
*/

let score = prompt("Enter Your Score");

switch (true) {
  case score > 80 && score < 100:
    alert("Congrats !! You've got A grade.");
    break;
  case score > 70 && score < 79:
    alert("Niice ! You've got B grade.");
    break;
  case score > 60 && score < 69:
    alert("You've got C grade.");
    break;
  case score > 50 && score < 59:
    alert("You've got D grade. You can do better");
    break;
  default:
    alert("Oops!! You've got E grade, you have to work harder");
}

/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
  September, October or November, the season is Autumn.
  December, January or February, the season is Winter.
  March, April or May, the season is Spring
  June, July or August, the season is Summer
*/

let month = prompt("Enter a month of the year...");

switch (true) {
  case month == September || month == October || month == November:
    alert("The season is Autumn");
    break;

  case month == December || month == January || month == February:
    alert("The season is Winter");
    break;

  case month == March || month == April || month == May:
    alert("The season is Spring");
    break;

  case month == June || month == July || month == August:
    alert("It's Summer ! The best season ever !");
    break;
}

/* ---------------- EXO 5 ------------------- */

// Declare an empty array

const arr = [];

// Declare an array with more than 5 number of elements.

const vales_summoners = [
  "Hicham",
  "Imrane",
  "Yacine",
  "Lamine",
  "Smail",
  "Sofiane",
];

// Find the length of your array.
console.log(vales_summoners.length);

// Get the first item, the middle item and the last item of the array.
console.log(vales_summoners[0]);
console.log(vales_summoners[3]);
console.log(vales_summoners[5]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array, the array size should be greater than 5.

const mixedDataTypes = [
  "String",
  21,
  true,
  [1, 2, 3],
  { name: "name", age: 30 },
  null,
];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon.

const companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Print the array using console.log().
console.log(companies);

// Print the number of companies in the array.
console.log(companies.length);

// Print the first company, middle and last company.
console.log(companies[0]);
console.log(companies[3]);
console.log(companies[6]);

/* ------------------- EXO 6 -------------------- */

// Iterate 0 to 10 using for loop, do the same using while and do while loop.
for (i = 0; i <= 10; i++);

// Using While
let i = 0;
while (i <= 10) {
  i++;
}

// Using Do While
do {
  i++;
} while (i <= 10);

/* Use loop to print the following pattern:
  0 x 0 = 0
  1 x 1 = 1
  2 x 2 = 4
  3 x 3 = 9
  4 x 4 = 16
  5 x 5 = 25
  6 x 6 = 36
  7 x 7 = 49
  8 x 8 = 64
  9 x 9 = 81
  10 x 10 = 100
*/

for (i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers.
function printEven(num) {
  for (i = 0; i < num; i++) {
    if (i % 2 === 0) {
      return i;
    }
  }
}
printEven(100);
console.log(i);

// Use for loop to iterate from 0 to 100 and print only odd numbers.
function printOdd(num) {
  for (i = 1; i < num; i++) {
    if (i % 2 !== 0) {
      return i;
    }
  }
}
printOdd(100);
console.log(i);

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
function calcSum(S) {
  let total = 0;
  for (i = 0; i <= S; i++) {
    total += i;
  }
  return total;
}
calcSum(100);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// Using the countries array, create an array for countries length.
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

/* Use the countries array to create the following array of arrays:
  [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ]
*/

/* -------------------- EXO 7 ------------------- */

// Create an empty object called dog
const dog = {};

// Print the dog object on the console
console.log(dog);

// Add name, legs, color and age properties for the dog object.
dog.name = "Max";
dog.legs_color = "White";
dog.age = 3;
dog.bark = function () {
  return console.log("Woof Woof");
};
console.log(dog);
