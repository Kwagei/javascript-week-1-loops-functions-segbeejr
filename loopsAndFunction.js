//  Write a function areEvenNumbers that iterates from 1 -100 and prints an array containing only the even numbers.
   
    // Answer:
function areEvenNumbers() {
  let evenNumbers = []; 
  for (let num = 1; num <= 100; num++) {
    if (num % 2 === 0) { 
      evenNumbers.push(num); 
    }
  }
  console.log(evenNumbers); 
}




// A list of numbers 1 - 10 is given, write a function that prints the reverse of that that list
     
    // Answer:
function ReverseList() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let reverseList = numbers.reverse();
  console.log(reverseList);
}




// let arr = [1,5,30,56,3,48,67,44,7,32] write a function that prints that highest number in the array and prints the average of the numbers.
     
    // Answer:
function highestNumAndAverage(arr) {
  let maxNumber = Math.max(arr); 
  console.log("Highest number:", maxNumber);

  let sum = arr.reduce((acc, num) => acc + num, 0); 
  let average = sum / arr.length; 
  console.log("Average:", average);
}




// A word is given write a punction to tell if the word is a Palindrome
     
    // Answer:
    




// Two numbers are given write a function that prints the gratest common divisor of those numbers.
