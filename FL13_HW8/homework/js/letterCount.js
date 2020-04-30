function letterCount() {
  let count = 0;

  for (let i = 0; i < arguments[0].length; i++) {
    let firstArgToLowerCase = arguments[0][i].toLowerCase();
    firstArgToLowerCase === arguments[1] ? count++ : count;
  }

  return count;
}

letterCount("Maggy", "g");
