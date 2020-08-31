var currentQuestion =0;
var score = 0;
var totalQuestions = questions.length;
var container =document.getElementById('quizContainer');
var questionEl=document.getElementById('question');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var choice4 = document.getElementById('choice4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function getQuestion (questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    choice1.textContent = q.choice1;
    choice2.textContent = q.choice2;
    choice3.textContent = q.choice3;
    choice4.textContent = q.choice4;
}
function nextQuestion(){
    var selectedOption=document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select answer!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score +=1;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totalQuestions-1){
        nextButton.textContent = 'Done';
    }
    if(currentQuestion == totalQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: '+ score;
        return;
    }
    getQuestion(currentQuestion);
}
getQuestion(currentQuestion);
