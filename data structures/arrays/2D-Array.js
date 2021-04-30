/*================

Title: 2D Array

Difficulty: Easy

Link: 'https://www.hackerrank.com/challenges/2d-array/problem'

=================*/

function hourglassSum(arr) {
    
  // initialize an array to store the sum of each hourglass
  let sumArray = [];

  // loop through the parent array
  for (let i = 0; i < arr.length - 2; i++) {

      // loop through each child array
      for (let j = 0; j < arr[i].length - 2; j++) {

          // get the sum of the hourglass
          const sum = (
              arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
              arr[i + 1][j + 1] +
              arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
          )

          // add the calculated sum to sum array
          sumArray.push(sum)
      }
  }
  
  // return the maximum value store in the sum array
  return Math.max(...sumArray);
}
