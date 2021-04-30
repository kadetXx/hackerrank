/*================

Title: Dynamic Array

Difficulty: Easy

Link: 'https://www.hackerrank.com/challenges/dynamic-array/problem'

=================*/

function dynamicArray(n, queries) {

  // initialize a new array
  const arr = [];

  // fill the array with two empty arrays
  for (let i = 1; i <= n; i++) {
    arr.push([]);
  }

  // initialize a variable for lastAnswer
  let lastAnswer = 0;

  // initialize a variable for answers
  let answers = [];

  // loop through all query arrays
  queries.forEach((q) => {

    // check if index of first item in current query is equal to one
    if (q[0] === 1) {

      // calculate the value of idx 
      // note: ^ is the XOR operator and it returns true when compared values are different
      
      let idx = (q[1] ^ lastAnswer) % n;

      // add value of current query item to arr with an index of idx
      arr[idx].push(q[2]);

      // check if index of first item in current query is equal to two
    } else if (q[0] === 2) {

      // calculate value for idx
      let idx = (q[1] ^ lastAnswer) % n;

      // update value of lastAnswer
      lastAnswer = arr[idx][q[2] % arr[idx].length];

      // add lastanswer value to answers array 
      answers.push(lastAnswer);
    }
  });

  return answers;
}
