// Define document
let dom;
dom = document;

// Define movies
const movies = [
  {
    title: "Harry Potter",
    explanation: "This movie is about a dude with a stick...",
    hint: "It's Magic",
  },
  {
    title: "Just Go With It",
    explanation: "This movie is about people who go on holiday...",
    hint: "Adam, Drew and Jennifer",
  },
  {
    title: "Never Back Down",
    explanation:
      "This movie is about two guys with daddy issues who beat each other up...",
    hint: "Kanye West - Stronger",
  },
  {
    title: "Spongebob Squarepants",
    explanation: "This movie is about a rectangle...",
    hint: "It's a cartoon",
  },
  {
    title: "50 First Dates",
    explanation: "This movie is about a chick, she has the worst memory...",
    hint: "50 times...",
  },
  {
    title: "Cars",
    explanation: "In this movie, car go fast...",
    hint: "Kachow",
  },
  {
    title: "Spiderman",
    explanation:
      "In this movie this guy just does not pay his rent, no matter how many times the landlord asks...",
    hint: "Peta-Paka",
  },
  {
    title: "The Wolf Of Wall Street",
    explanation:
      "In this movie there's like illegal stuff, lots of money, and a blonde chick...",
    hint: "HAWOOooooooooooo",
  },
  {
    title: "Inception",
    explanation: "In this movie everyone is like sleeping all the time...",
    hint: "Dreams...",
  },
  {
    title: "Peter Pan",
    explanation:
      "In this movie some kids die and an angel escorts them to heaven...",
    hint: "Always flying, cuz he neverlands",
  },
  {
    title: "The Lord Of The Rings",
    explanation: "In this movie some small guys go for a walk...",
    hint: "You will not vacate past this exact position",
  },
];

// Get information from form
let input = "";

// Generate random number from 0-11 to get movie
const movieValue = movies[Math.floor(Math.random() * 11)];

// Define variables as constants to use
const title = movieValue.title;
const description = movieValue.explanation;
const hint = movieValue.hint;

let guess = 3;

document.getElementById("explanation").innerHTML = description;

function checkGuess(event) {
  event.preventDefault();
  guess -= 1;

  if (input == title) {
    document.getElementById("machine-response").innerHTML =
      "Correct! You win :)";
    //If correct guess, give button to play again
    input = document.getElementById("submitButton").innerHTML =
      "Refresh to play again!";
  }
  else if (guess > 0) {
    input = document.getElementById("user-guess").value;
    console.log(input);
    console.log(title);
    if (input == title) {
      document.getElementById("machine-response").innerHTML =
        "Correct! You win :)";
      //If correct guess, give button to play again
      input = document.getElementById("submitButton").innerHTML =
        "Refresh to play again!";
    } else {
      document.getElementById("machine-response").innerHTML =
        "Incorrect! Guesses left: " + guess;
    }
  }
  else {
    document.getElementById("machine-response").innerHTML =
      'Out of guesses! The correct answer was "' +
      title +
      '". Refresh to play again! ';
  }
  input=null;
}

function getHint(event) {
  event.preventDefault();

  document.getElementById("hint").innerHTML = hint;
}
