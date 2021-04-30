/*================

Title: Array Manipulation

Difficulty: Hard

Link: 'https://www.hackerrank.com/challenges/crush/problem'

=================*/

function arrayManipulation(n, queries) {
  // create a new array of length n and fill it with zeros
  let arr = new Array(n).fill(0);

  // iterate through each query array
  queries.forEach(([start, stop, value]) => {
    // add value to arr item with index of start
    arr[start - 1] += value;

    // subtract value to arr item after index of stop
    arr[stop] -= value;
  });

  // declare variable for cummulative value of array
  let cummulative = 0;

  // declare variable for maximum cummulative value
  let maxValue = 0;

  // add up all array items from left to right and store as cummulative
  arr.forEach((item) => {
    // add current arr item to cummulative
    cummulative += item;

    // check if cummulative is > previously stored maxValue
    if (cummulative > maxValue) {
      // update max value if new cummulative > previous maxValue
      maxValue = cummulative;
    }
  });

  return maxValue;
}
