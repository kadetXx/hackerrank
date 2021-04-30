/*================

Title: Left Rotation

Difficulty: Easy

Link: 'https://www.hackerrank.com/challenges/array-left-rotation/problem'

=================*/

function rotateLeft(d, arr) {
 
  // loop through given array
  for(let i = 0; i < d; i++){

    // array.shift() deletes the first item in the array and returns the value of the deleted first item
    //array.push() adds the value returned from array.push() to the end of the array
    arr.push(arr.shift());
  }

  return arr
}