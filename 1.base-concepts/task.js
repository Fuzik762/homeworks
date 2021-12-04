'use strict';
function solveEquation(a, b, c) {
  let arr = [];
    let d = Math.pow(b,2) - 4 * a * c;
    if(d < 0) {
      arr = [];
    } else if(d === 0){
      arr[0] = -b / (2 * a);
    } else {
      arr[0] = (-b + Math.sqrt(d)) / (2 * a);
      arr[1] = (-b - Math.sqrt(d)) / (2 * a);
    }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  

  return totalAmount;
}
