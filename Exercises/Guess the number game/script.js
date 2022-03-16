let numberToGuess = null;
let person;
let currentGuess;
let numberOfGuesses = 5;
let minNum = 0;
let maxNum = 25;

while (person === undefined || person === null || person.length === 0) {
    person = prompt("What is your name?");
  }

alert("Welcome to Guess the Number " + 
person + 
"!");

let chosenMinNum = parseInt
    (prompt("From what number do you want to guess? (default: 0)")
);
if (!isNaN(chosenMinNum) && chosenMinNum >= 0) {
    minNum = chosenMinNum;
}

let chosenMaxNum = parseInt(
    prompt("Until what number do you want to guess? (default: 25)")
    );
if (!isNaN(chosenMaxNum)) {
    maxNum = chosenMaxNum;
}

while (maxNum <= minNum) {
    let chosenMaxNum = parseInt(
        prompt("Until what number do you want to guess? (Higher than " + minNum + ")")
    );
    if (!isNaN(chosenMaxNum)) {
        maxNum = chosenMaxNum;
    }
}

alert("You have got 5 tries to guess the number. The number is between " + 
minNum + 
" and " +
maxNum + 
". Good luck!");

numberToGuess = Math.floor(Math.random() * maxNum) + minNum;

while (currentGuess !== numberToGuess) {
    if (numberOfGuesses < 1) {
        alert(
            "Unfortunately, you have no guesses left. You can start again with a new number!"
        );
    numberOfGuesses = 5;
    numberToGuess = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
    }
    currentGuess = parseInt(prompt("Enter your guess: "));

    while (isNaN(currentGuess)) {
        currentGuess = parseInt(
            prompt(
                "You did not enter a number. Please only enter numbers!"
            )
        );
    }

alert("Your guess is: " + currentGuess);

if (currentGuess > numberToGuess) {
    numberOfGuesses--;
    if (numberOfGuesses < 1) {
        alert("This was your last guess")
    } else {
        alert("Your guess was too high. You still have " + 
        numberOfGuesses + 
        " guess(es) left. Try again"
        );
    }
} else if (currentGuess < numberToGuess) {
    numberOfGuesses--;
    if (numberOfGuesses < 1) {
        alert("This was your last guess")
    } else {
        alert("Your guess was too low. You still have " + 
        numberOfGuesses + 
        " guess(es) left. Try again"
        );
    }
} else {
    alert("Congratulations!! You guessed the right number!");
    alert("The game will now be closed. Thank you for playing " + 
    person + 
    "! See you next time!!"
    );
}
}
