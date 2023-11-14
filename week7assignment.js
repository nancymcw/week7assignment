console.log(`QUESTION 1`)
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

let agesArray = [ 3, 9, 23, 64, 2, 8, 28, 93 ]; // here I declared the array and values.

//I did these in the console log to make sure I had my first and last numbers correct at this point.
//Since the array indexes are zero based I know that the last number is the total array length minus one.
console.log(`first = ${agesArray[0]}`);
console.log(`last = ${agesArray[agesArray.length - 1]}`);

console.log(agesArray);
console.log(`${agesArray[agesArray.length - 1] - agesArray[0]}`); //93 - 3 = 90.
agesArray.push(45); //used Push to push a new number (45) to the array, and then repeated my programmatic subtraction.
console.log(agesArray);
console.log(`${agesArray[agesArray.length - 1] - agesArray[0]}`); //45 - 3 = 42.


//Averages loop...
//First made a function to get the totaled value of all numbers in the array.

function getTotal(values) {
    let total = 0;
    for (let value of values) {   
      total += value;
    }
    return total;
  }

//Then made a function to find the mean(average).

function getAverage(values) {
    let total = getTotal(values);
    return total / values.length;
  }

  console.log(getTotal(agesArray)); // 275
  console.log(getAverage(agesArray)); //30.55555...


console.log(`QUESTION 2`)
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] // declared array and values.
let total = 0;
for (let i=0; i < names.length; i++) { //this will count upwards as long as i is less than the length of the array,
    total += names[i].length; // and then this counts the length of the variable i, giving us the total characters.
}

let averageLetters = total / names.length;
console.log(averageLetters);

let spacedNames = ''; // creating the variable that will be a string,
for (let i = 0; i < names.length; i++) {  // this goes through the length of the array again, from zero to the maximum.
    spacedNames += names[i] + ' '; // adding the index of the array plus adding the apostrophes to the end makes it display as a spaced out string.
}
console.log(spacedNames);


//QUESTION 3
// How do you access the last element of any array?
//I used this in question 1, with the name of the array, and then [0] in brackets.
// console.log(`first = ${agesArray[0]}`);


//QUESTION 4
// How do you access the first element of any array?
//With the name of the array, .length method and subtract one because of the zero based index.
// console.log(`last = ${agesArray[agesArray.length - 1]}`);


console.log(`QUESTION 5`)
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and 
// add the length of each name to the nameLengths array.

let nameLengths = []; // This will let it display the array in the log.
for (let i=0; i < names.length; i++) {
    nameLengths.push(names[i].length); //This pushes the lengths of each part of the index into the nameLengths array.
}
console.log(nameLengths) //3, 5, 3, 5, 4, 3.


console.log(`QUESTION 6`)
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let sum = 0; 
for (let i=0; i < nameLengths.length; i++) {  //while i is less than the length of the array, add to i.
    sum += nameLengths[i]; // sum adds up to the index length of nameLengths.
}
console.log(sum) //23.


console.log(`QUESTION 7`)
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

let repeatWord = (word,n) => {
    let result = '';              // makes the result a string.
    for (let i = 0; i < n; i++){ // if the variable is less than the given number (n), it will keep repeating until it is equal.
        result += word;
    }
    return result;          //this will print the result which will be the word repeated as many times as we set n to.
}
console.log(repeatWord('Hello', 5)); 


console.log(`QUESTION 8`)
// Write a function that takes two parameters, firstName and lastName, and returns a full name. 
// The full name should be the first and the last name separated by a space.

let fullName = (firstName, lastName) => {
    return firstName + ' ' + lastName; // This will return the inputted first and last name to the log, with a space string in between them.
}
console.log(fullName('Nancy','McWhite'))


console.log(`QUESTION 9`)
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

// I took my getTotal function from earlier in the assignment to use for this one.

function getTotal(values) {
    let total = 0;
    for (let value of values) {
      total += value;
    }
    return total;
  }

let oneHundredPlease = (arrayName) => {
    let total = getTotal(arrayName);
    if (total >= 100) {                //if/else loop for returning total of whatever array is entered for the parameter of oneHundredPlease.
        return true;
    } else {
         return false; 
    }
}

let randomArray1 = [ 45, 66, 23, 42, 9, 10, 34 ];
let smallArray = [ 23, 4, 5 ];
console.log(oneHundredPlease(randomArray1)); // testing an array that should be true, returned true.
console.log(oneHundredPlease(smallArray)); // testing an array that should be false, returned false.


console.log(`QUESTION 10`)
// Write a function that takes an array of numbers and returns the average of all the elements in the array.

function getAverage(numbers) {
    let sum = numbers.reduce((a, b) => a + b, 0); 
    let average = sum / numbers.length; 
    return average;
}
// Wrote this using the reduce method and then adding the two parameters a and b as the accumulator and current value, respectively.
// with 0 set as the initial index value to start at in the array.
// then getting the mean through the sum divided by how many elements there are in the array('.length' method).

array1 = [45, 50, 22, 6];
array2 = [9000009, 44, 229, 2];
console.log(getAverage(array1));
console.log(getAverage(array2));


console.log(`QUESTION 11`)
// Write a function that takes two arrays of numbers and returns true if the average of 
// the elements in the first array is greater than the average of the elements in the second array.

let biggerArrayAverage = (firstArray, secondArray) => {
    let average1 = getAverage(firstArray);
    let average2 = getAverage(secondArray);    // Used the previous getAverage function to make these variables,
    return (average1 > average2);             // and then returned the result to the console log.
}

console.log(biggerArrayAverage(array1, array2)); // false.
console.log(biggerArrayAverage(array2, array1)); // true.


console.log(`QUESTION 12`)
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
// and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

const willBuyDrink = (isHotOutside, moneyInPocket) => {
    return isHotOutside && moneyInPocket > 10.5          // used && to make sure both must return true for function to return true.
}

let isItHotToday = false; 
let currentMoney = 400;
console.log(willBuyDrink(isItHotToday, currentMoney)); // false
let isItHot = true;
let newCurrentMoney = 7;
console.log(willBuyDrink(isItHot, newCurrentMoney)); // false
let itsHotToday = true;
let myMoney = 15;
console.log(willBuyDrink(itsHotToday, myMoney)); // true!