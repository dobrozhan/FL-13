const PERCENTAGE = 100;
const FIXED = 2;
let inputCheckNumber = prompt('Please, indicate check number');
let inputTipPercentage = prompt('Please, indicate tip percentage');
let checkNumber = parseFloat(inputCheckNumber);
let tipPercentage = parseFloat(inputTipPercentage);

if (isNaN(checkNumber) || isNaN(tipPercentage) || checkNumber < 0 || tipPercentage < 0 || tipPercentage > PERCENTAGE) {
  alert('Invalid input data');
} else {
  let tipAmount = checkNumber * tipPercentage/PERCENTAGE;
  let totalSumToPay = checkNumber + tipAmount;
  
  alert(`Your bill.
  Check number: ${checkNumber.toFixed(FIXED)}
  Tip: ${tipPercentage}%
  Tip amount: ${tipAmount.toFixed(FIXED)}
  Total sum to pay: ${totalSumToPay.toFixed(FIXED)}
  `);
}
