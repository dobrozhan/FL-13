function storeNames() {
  let arrayOfStrings = [];
  
  for (let i = 0; i < arguments.length; i++) {
    arrayOfStrings.push(arguments[i]);
  }

  return arrayOfStrings;
}

storeNames('Nick Fury', 'Iron Man', 'Doctor Strange');
