// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.


describe("sentenceArray", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(sentenceArray(people)).toEqual(["Ford Prefect is a hitchhiker", "Zaphod Beeblebrox is president of the galaxy", "Arthur Dent is a radio employee"])
  })
})

// Test Result 
// ● sentenceArray › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
// ReferenceError: sentenceArray is not defined


// b) Create the function that makes the test pass.
// Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// Pesucode 
// create a function: sentenceArray  
// parameter is an array of objects
// will need to iterate through the array by using .map and then create a new variable where i can split the words that need to be capitalized. --> use .toUpperCase 
// will need to use index [] to access specific words that need to be capitalized 
// return must include string interpolation "${capitalized.name}" is ${value.occupation}"




const sentenceArray = (array) => {
  return array.map((value) => {
    let splitArray = value.name.split(' ')
    let capitalArray = splitArray[0][0].toUpperCase() + splitArray[0].substring(1) + " "
    + splitArray[1][0].toUpperCase() + splitArray[1].substring(1) 
    return `${capitalArray} is ${value.occupation}`
  })
}

// Test Result
// PASS  ./code-challenges.test.js
// sentenceArray
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
// Test Suites: 1 passed, 1 total

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainderArray", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
   const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
   const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
      expect(remainderArray(hodgepodge1)).toEqual([2, 0, -1, 0])
      expect(remainderArray(hodgepodge2)).toEqual([2, 1, -1])
   })
})

// Test Result 
// ● remainderArray › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// ReferenceError: remainderArray is not defined


// b) Create the function that makes the test pass.
// Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// Pseudocode
// create a function : remainderArray
// input is an array of mixed data (numbers and strings)
// use .filter to iterate through the array and return only typeof 'numbers' 
// then use .map to iterate through the new array and get a return of an array of only the remainders of the numbers when divided by 3 = use modulo operator. 

const remainderArray = (array) => {
  let numArray = array.filter(value => typeof value === 'number')
  return numArray.map(value => value % 3) 
}


//  Test Passed 
//  PASS  ./code-challenges.test.js
//  remainderArray
//    ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.


describe("sumsCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(sumsCubed(cubeAndSum1)).toEqual(99)
      expect(sumsCubed(cubeAndSum2)).toEqual(1125)
   })
})

// Test Result 
// ● sumsCubed › takes in an array of numbers and returns the sum of all the numbers cubed.
// ReferenceError: sumsCubed is not defined


// b) Create the function that makes the test pass.
// Pseudocode 
// create a function : sumsCubed 
// input is an array of numbers 
// we must first iterate through the array using .map and return all numbers cubed (which translates to number**3) 
// once we get these cubed values, we must add all these values using the built-in method of 
// .reduce 


const sumsCubed = (array) => {
  let cubedArray = array.map(value => value**3)
    return cubedArray.reduce((a, b) => a + b)
}


// Test Result
// PASS  ./code-challenges.test.js
// sentenceArray
//   ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized. (1 ms)
// remainderArray
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
// sumsCubed
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total