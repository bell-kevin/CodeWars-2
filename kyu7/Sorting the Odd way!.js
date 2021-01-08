// Sorting the Odd way!

// Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!

function sortItOut(array) {
  const evens = array
    .filter((num) => parseInt(num, 10) % 2 === 0)
    .sort((b, a) => a - b);
  const odds = array
    .filter((num) => parseInt(num, 10) % 2 !== 0)
    .sort((a, b) => a - b);
  return odds.concat(evens);
}
//console.log(sortItOut([11, 22, 33, 44, 55, 55, 90.4, 4, 78]));
// ,([11,33,55,55,90.4,78,44,22,4]));
//console.log(sortItOut([26, 243, 52, 2, 432414, 1, 11, 46, 32]));
// ,([1,11,243,432414,52,46,32,26,2]));
//console.log(sortItOut([19, 65, 88, 112, 60, 14, 33, 49, 88]));
// ,([19,33,49,65,112,88,88,60,14]));
//console.log(sortItOut([]));
// ,([]))
//console.log(sortItOut([68, 25, 99, 50, 10, 67, 2, 5, 8, 34, 67]));
// ,([5,25,67,67,99,68,50,34,10,8,2]));
//console.log(sortItOut([6.6, 5.5, 1.1, 2.2, 3.3, 4.4]));
// 1.1, 3.3, 5.5, 6.6, 4.4, 2.2
console.log(sortItOut([3.4, 9, 89, 513.1, 5.6]));
//3.4, 5.6, 9, 89, 513.1
//console.log((2.4).toFixed());
