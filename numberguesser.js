let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  alert(userGuess);
  const userDifference = getAbsoluteDistance(targetNumber, userGuess);
  const computerDifference = getAbsoluteDistance(targetNumber, computerGuess);
  return userDifference <= computerDifference ? true : false;
}

const getAbsoluteDistance = (numberOne, numberTwo) => {
  return Math.abs(numberOne - numberTwo);
}

const alert = guess => {
  if ((guess < 0) || (guess > 9)) {
    Window.alert("Please select a number between 0 and 9");
  }
}


const updateScore = winner => {
  if (winner === 'human') {
    humanScore++
  } else if (winner === 'computer'){
    computerScore++
  }
}

const advanceRound = () => {
  currentRoundNumber++
}
