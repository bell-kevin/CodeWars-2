// https://www.codewars.com/kata/5601409514fc93442500010b/javascript

// How good are you really?


// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

const betterThanAverage = (classPoints, yourPoints) => {
  let sum = 0;
    for(let i = 0; i < classPoints.length; i++) {
    sum = sum + classPoints[i];
    }
return sum / (classPoints.length + 1) < yourPoints;
}