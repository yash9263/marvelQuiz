var readlinesync = require("readline-sync");

var name = readlinesync.question("What's your name: ");
console.log("Welcome " + name + " Let's play do you know Marvel Cinematic Universe!");
console.log();
var score = 0;

function play(question, answer) {
  console.log("Question: " + question);
  var ans = readlinesync.question("Answer: ");
  if(ans == answer) {
    console.log("Right Congratulations!");
    score++;
  } else {
    console.log("Wrong");
  }
  console.log("Score: " + score);
  console.log("------------");
}

var questions = [
  {
    question: "What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\nhint- same year The Dark Knight was released.",
    answer: "2008"
  },
  {
    question: "What is the name of Thor’s hammer?",
    answer: "Mjolnir"
  },
  {
    question: "Who does the Mad Titan sacrifice to acquire the Soul Stone?",
    answer: "Gamora"
  },
  {
    question: "What is the real name of the Black Panther?",
    answer: "T’Challa"
  },
  {
    question: "Before becoming Vision, what is the name of Iron Man’s A.I. butler?",
    answer: "JARVIS"
  },
  {
    question: "What is Captain America’s shield made of?",
    answer: "Vibranium"
  },
  {
    question: "The Flerkens are a race of extremely dangerous aliens that resembles what?",
    answer: "Cat"
  },
  {
    question: "Who is Black Panther’s sister?",
    answer: "Shuri"
  },
  {
    question: "What type of doctor is Stephen Strange?",
    answer: "Neurosurgeon"
  },
  {
    question: "What is Deadpool’s real name?",
    answer: "Wade Wilson"
  }
]

for(var i = 0; i < questions.length; i++) {
  var question = questions[i];
  play(question.question, question.answer);
}

