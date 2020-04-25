// Start a game
let ask = confirm('Do you want to play a game?');

// Initialize the game constants
const PRIZEINCREASE = 2;
const RANGEINCREASE = 5;

let playDecision = true;
let userLose = false;

let currentRange = 5;
let attempts = 3;
let winCash = 0;
let maxCost = 100;
let mediumCost = 50;
let minCost = 25;
let currentAttemptCost, askNewGame;
let attemptsCost = {
  max: maxCost,
  medium: mediumCost,
  min: minCost
};

if (ask === false) {
  alert('You did not become a billionaire, but can.');
} else {

  while (playDecision === true && userLose === false) {

    switch (attempts) {
      case 3:
        currentAttemptCost = attemptsCost.max;
        break;
      case 2:
        currentAttemptCost = attemptsCost.medium;
        break;
      case 1:
        currentAttemptCost = attemptsCost.min;
        break;
      default: 
        true;
    }

    let randomNumber = Math.floor(Math.random() * currentRange + 1);

    let userInput = prompt(`
                    Choose a roulette pocket number from 0 to ${currentRange}
                    Attempts left: ${attempts}
                    Total prize: ${winCash}
                    Possible prize on current attempt: ${currentAttemptCost}$
                  `);

    let userNumber = Number(userInput);

    if (userInput === null) {
      alert(`You cancelled item`);
      attempts--;

      if (attempts === 0) {
        alert(`You cancelled game`);
        playDecision = true;
        userLose = false;
        currentRange = 5;
        attempts = 3;
        winCash = 0;
        maxCost = 100;
        mediumCost = 50;
        minCost = 25;
        attemptsCost = {
          max: maxCost,
          medium: mediumCost,
          min: minCost
        };

        break;
      }

      continue;
    }
 
    if (userNumber === randomNumber) {
      winCash += currentAttemptCost;

      let askWinner = confirm(`Congratulation, you won! Your prize is: ${winCash}$. Do you want to continue?`);

      if (askWinner === true) {
        attempts = 3;
        currentRange += RANGEINCREASE;
        maxCost *= PRIZEINCREASE;
        mediumCost *= PRIZEINCREASE;
        minCost *= PRIZEINCREASE;
        attemptsCost = {
          max: maxCost,
          medium: mediumCost,
          min: minCost
        };

        continue;
      } else if (askWinner === false) {
        alert(`Thank you for your participation. Your prize is: ${winCash}$.`);

        askNewGame = confirm('Do you want to play a new game?');

        if (askNewGame === true) {
          playDecision = true;
          userLose = false;
          currentRange = 5;
          attempts = 3;
          winCash = 0;
          maxCost = 100;
          mediumCost = 50;
          minCost = 25;
          attemptsCost = {
            max: maxCost,
            medium: mediumCost,
            min: minCost
          };

          continue;
        } else if (askNewGame === false) {
          playDecision = false;
          alert(`You did not become a billionaire, but can.`);

          break;
        } 
      }
    }

    // decrease attempt number
    attempts--;

    if (attempts === 0) {
      alert(`Thank you for your participation. Your prize is: ${winCash}$`);
      userLose = true;

      askNewGame = confirm('Do you want to play a new game?');

      if (askNewGame === true) {
          playDecision = true;
          userLose = false;
          currentRange = 5;
          attempts = 3;
          winCash = 0;
          maxCost = 100;
          mediumCost = 50;
          minCost = 25;
          attemptsCost = {
            max: maxCost,
            medium: mediumCost,
            min: minCost
          };

          continue;
      } else if (askNewGame === false) {
          playDecision = false;
          alert(`You did not become a billionaire, but can.`);

          break;
      }
    }
  }
}
