"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2)-4*a*c;

  if (d > 0) {
    arr.push((-b + Math.sqrt(d))/(2*a));
    arr.push((-b - Math.sqrt(d))/(2*a));
} else if (d === 0) {
       arr.push(-b/(2*a));
}
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let rate = percent/100/12;
  let sum = 0;
  let monthPayment = 0;
  let creditBody = amount-contribution; 
  for (let i = 1; i <= countMonths; i = i+1) {
    monthPayment =creditBody*(rate+(rate/((Math.pow((1+rate),countMonths)-1))));
    sum = sum + monthPayment;
  }
  return Math.round(sum*100)/100;
}