//Asynchronous Programming

//Create a function that logs the result of adding two numbers that were passed in as arguments.
//Create another function that logs the result of subtracting two numbers that were passed in as arguments.
//Invoke each function a couple times with different argument values.

const add = (first, second) => console.log(first+second)
const subtract = (first, second) => console.log(first-second)

//Create another function called `calculate` that takes three arguments: two numbers and a function
const calculate = (first, second, operationToPerform) => {
    operationToPerform(first, second) //operationToPerform is a function reference
}

calculate(500, 500, add) //add here is a function reference
calculate(500, 500, subtract)

add(34, 56)
subtract(100, 99)