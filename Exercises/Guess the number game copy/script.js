let numberToGuess = null;
let person;
let guess;
let minNum = 0;
let maxNum = 25;

while (person === undefined || person === null || person.length === 0) {
    person = prompt("What is your name?");
  }

alert("Welcome to Guess the Number, " + 
person +
"!");

alert("You will have to guess the random number between 0 and 25, good luck!")

numberToGuess = Math.floor(Math.random() * maxNum) + minNum;

while (guess !== numberToGuess) {
    guess = parseInt(prompt("Enter your guess:"));
    if (guess > numberToGuess) {
        alert("Your guess was too high, try again.");
    }
    else if (guess < numberToGuess) {
        alert("Your guess was too low, try again.");
    }
    else {
        alert("Congratulations!! You guessed the right number! The number was " + numberToGuess);
    }
};
alert("The game will now close. Thank you for playing " + person + "!");