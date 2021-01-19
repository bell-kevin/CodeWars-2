// String matchup

// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']
// How many times do the elements in array2 appear in array1?

// 'abc' appears twice in the first array (2)
// 'cde' appears only once (1)
// 'uap' does not appear in the first array (0)
// Therefore, solve(array1, array2) = [2, 1, 0]

// Good luck!

function solve(a, b) {
  const resultArr = [];
  let count = 0;
  for (let j = 0; j < b.length; j++) {
    for (let i = 0; i < a.length; i++) {
      if (b[j] === a[i]) {
        count++;
      }
    }
    resultArr.push(count)
    count = 0
  }
  return resultArr;
}

console.log(solve(["abc", "abc", "xyz", "abcd", "cde"], ["abc", "cde", "uap"])); //, [2, 1, 0]);
//console.log(solve(["abc", "xyz", "abc", "xyz", "cde"], ["abc", "cde", "xyz"])); //, [2, 1, 2]);
//console.log(solve(["quick", "brown", "fox", "is", "quick"], ["quick", "abc", "fox"])); //, [2, 0, 1]);
