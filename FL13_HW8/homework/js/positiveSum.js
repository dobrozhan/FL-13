function positiveSum(arr) {
  let arrWithPositiveElements = arr.filter(element => element >= 0);
  let sum = arrWithPositiveElements.reduce((accumulator, value) => accumulator + value, 0);

  return sum;
}

positiveSum([2, 4, 6, 8]);
