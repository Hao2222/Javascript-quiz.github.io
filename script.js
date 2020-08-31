const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


var counter = 0
var totalTime = 65;

var x = setInterval(function() {
    counter++;

  var timeLeft = totalTime - counter;

  var seconds = Math.floor(timeLeft);
 
  document.getElementById("timer").innerHTML = seconds;

  if (timeLeft < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Time's Up!";
  }
}, 1000);


// const questions = [
//     {
//       question: 'Each page on a website can be seen as a __________',
//       answers: {
//             a: "Document",
//             b: "Object",
//             c: "Spread sheet"
//       },
//       correctAnswer: "c"
//     },
//     {
//         question: 'Once the variable has been created, you do not need to use the var keyword to assign it a new value',
//         answers: {
//               a: "true",
//               b: "false",
//               c: "maybe"
//         },
//         correctAnswer: "a" 
//     }
        

 