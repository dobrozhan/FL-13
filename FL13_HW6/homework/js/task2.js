let inputWord = prompt('Please, write a word');
let numberEmptyChars = 0;
let TWO = 2;

for (let i = 0 ; i < inputWord.length; i++) {

  if (inputWord.charAt(i) === ' ') {
    numberEmptyChars++;
  }
}

if (inputWord === '' || inputWord.length === numberEmptyChars) {
  alert('Invalid value');
} else if (inputWord.length % TWO === 1) {
  let index = Math.floor(inputWord.length / TWO); 
  let middleChar = inputWord[index];
  alert(`${middleChar}`);
} else if (inputWord.length % TWO === 0) {
  let indexFirst = inputWord.length / TWO - 1; 
  let indexSecond = inputWord.length / TWO; 
  let middleChar = inputWord[indexFirst];
  middleChar += inputWord[indexSecond];
  alert(`${middleChar}`);
}
