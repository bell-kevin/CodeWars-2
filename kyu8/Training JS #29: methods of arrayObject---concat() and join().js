// Training JS #29: methods of arrayObject---concat() and join()
// Task
// Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

// Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

// And then sort array in descending order.

// Finally, use the separator ">" to connect the elements into a string.

// Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

function bigToSmall(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res = res.concat(arr[i]);
  }
  return res.sort((a, b) => b - a).join(">");
}

console.log(
  bigToSmall([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // , "6>5>4>3>2>1")
console.log(
  bigToSmall([
    [1, 3, 5],
    [2, 4, 6],
  ])
); // , "6>5>4>3>2>1");
console.log(bigToSmall([[1, 1], [1], [1, 1]])); // , "1>1>1>1>1");
