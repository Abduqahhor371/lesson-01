// Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    return numbers.reduce((sum, num) => sum + num ** 2, 0);
   }


//    Given an array of integers your solution should find the smallest integer.

function findSmallestInt(arr) {
    let smallest = arr[0];
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] < smallest) {
              smallest = arr[i];
          }
      }
      return smallest;
  }

//   Note: This kata is inspired by Convert a Number to a String!. Try that one too.

const stringToNumber = function(str){
    return Number(str);
  }

//   Summation
var summation = function (num) {
    let sum = 0;
      for (let i = 1; i <= num; i++) {
          sum += i;
      }
      return sum;
  }

//   Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
    return i * 2;
  }

// Make a function that will return a greeting statement that uses an input; your program should return,

  function greet(name){
    return `Hello, ${name} how are you doing today?`;
  
}

// Introduction The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

function century(year) {
    return Math.ceil(year / 100);

}

// Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
    return Math.floor(time * 0.5);
}

// Your task is to create a function that does four basic mathematical operations.The function should take three arguments - operation(string/char), value1(number), value2(number).The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2){
    switch (operation) {
          case '+':
              return value1 + value2;
          case '-':
              return value1 - value2;
          case '*':
              return value1 * value2;
          case '/':
              return value1 / value2;
          default:
              throw new Error("Invalid operation");
      }
  }

//   Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
    return b.toString();
}
