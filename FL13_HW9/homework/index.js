// 1
function convert() {
  let args = [];

  for (let i = 0; i < arguments.length; i++) {
    typeof arguments[i] === 'string' ? args.push(parseInt(arguments[i], 10)) : args.push(String(arguments[i]));
  }

  return args;
}

// 2
function executeforEach() {

  for (let i = 0; i < arguments[0].length; i++) {
    let arrElem = arguments[0][i];
    arguments[1](arrElem);
  }
}

// 3
function mapArray() {
  let arrTransformed = [];

  for (let i = 0; i < arguments[0].length; i++) {
    let arrElem = arguments[0][i];
    typeof arrElem === 'string' ? arrElem = parseInt(arrElem, 10) : arrElem;
    arrTransformed.push(arguments[1](arrElem));
  }

  return arrTransformed;
}

// 4
function filterArray() {
  let arrTransformed = [];

  for (let i = 0; i < arguments[0].length; i++) {
    let arrElem = arguments[0][i];

    if (arguments[1](arrElem) === true) { 
      arrTransformed.push(arrElem); 
    }    
  }

  return arrTransformed;
}

// 5
function containsValue() {
  let answer = false;

  for (let i = 0; i < arguments[0].length; i++) {

    if (arguments[0][i] === arguments[1]) {
      answer = true;
      break;
    } else {
      answer = false;
    }
  }

  return answer;
}

// 6
function flipOver(str) {
  let reversedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
 
// 7
function makeListFromRange(arr) {
  let arrFormed = [];
  let initialValue = arr[0];
  let endValue = arr[arr.length - 1];

  while (initialValue <= endValue) {
    arrFormed.push(initialValue);
    initialValue++;
  }

  return arrFormed;
}

// 8
function getArrayOfKeys(objectArr, property) {
  let arrFormed = [];

  for (let i = 0; i < objectArr.length; i++) {
    let arrElem = objectArr[i];
    arrFormed.push(arrElem[property]);
  }

  return arrFormed;
}

// 9
function substitute(arr) {
  const MIN_VALUE = 10;
  const MAX_VALUE = 20;
  let arrTransformed = [];

  for (let i = 0; i < arr.length; i++) {
    let arrElem = arr[i];
    arrElem > MIN_VALUE && arrElem < MAX_VALUE ? arrElem = '*' : arrElem;
    arrTransformed.push(arrElem);
  }

  return arrTransformed;
}

// 10
let Months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
}

function getPastDay(date, days) {
    const MS_IN_DAY = 86400000;
    let difference = date - days * MS_IN_DAY;
    let newDate = new Date(difference);
    
    return `${newDate.getDate()}, (${newDate.getDate()} ${Months[newDate.getMonth()]} ${newDate.getFullYear()})`;
}

// 11
function formatDate(date) {
  const TWO_DIGITS = 10;
  let newFormat, getFullYear, getMonth, getDate, getHours, getMinutes;

  getFullYear = date.getFullYear();
  date.getMonth() + 1 < TWO_DIGITS ? getMonth = `0${date.getMonth()}` : getMonth = `${date.getMonth()}`;
  date.getDate() < TWO_DIGITS ? getDate = `0${date.getDate()}` : getDate = `${date.getDate()}`;
  date.getHours() < TWO_DIGITS ? getHours = `0${date.getHours()}` : getHours = `${date.getHours()}`;
  date.getMinutes() < TWO_DIGITS ? getMinutes = `0${date.getMinutes()}` : getMinutes = `${date.getMinutes()}`;

  newFormat = `${getFullYear}/${getMonth}/${getDate} ${getHours}:${getMinutes}`;

  return newFormat;
}
