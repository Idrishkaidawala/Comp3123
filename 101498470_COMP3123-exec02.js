//Exercise 1:  
//  Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals 
//  and for..of

//Solution
const greeter = (myArray, counter) => {
  const greetText = 'Hello';

  for (const name of myArray) {
    console.log(`${greetText} ${name}`);
  }
};

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//Exercise 2:  
//  Using destructuring assignment syntax and the spread operator, write a function will capitalize the 
// first letter of a string.

//Solution

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

console.log(capitalize('fooBar'))
console.log(capitalize('nodeJs'))

//Exercise 3:  
//  Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case 
// the first character of each Color in the following array..

//Solution
const capitalize1 = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const colors = ['red', 'green', 'blue', 'YELLOW', 'pUrPle'];

const capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);

//Exercise 4:  
//  Using array.proto.filter create a function that will filter out all the values of the array that are less 
// than twenty. 

//solution

// Corrected array declaration
var values = [1, 60, 34, 30, 20, 5];

// Use .filter() to get values less than 20
var filterLessThan20 = values.filter(function(value) {
  return value < 20;
});

console.log(filterLessThan20);
// Output: [1, 5]


// Exercise 5:
//Using array.proto.reduce create calculate the sum and product of a given array.

//Solution

// Corrected array declaration
var array = [1, 2, 3, 4];

// Use .reduce() to calculate sum
var calculateSum = array.reduce(function(acc, val) {
  return acc + val;
}, 0);

// Use .reduce() to calculate product
var calculateProduct = array.reduce(function(acc, val) {
  return acc * val;
}, 1);

console.log(calculateSum);     // Output: 10
console.log(calculateProduct); // Output: 24

//Exercise 6:
//Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives 
//from Car Class. The parameters for the Car class is the model and year. The parameters for the 
//subclass is the model, year and balance. 
//Use the super key word in the Sedan subclass to set the model and name in base Car 
//constructor. 

//Solution

// Superclass: Car
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    return `Model: ${this.model} Engine ${this.year}`;
  }
}

// Subclass: Sedan
class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year); // Call the Car constructor with model and year
    this.balance = balance;
  }

  info() {
    return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
  }
}

// Creating instances
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details()); // Output: Model: Pontiac Firebird Engine 1976

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());   // Output: Volvo SD has a balance of $30000.00
