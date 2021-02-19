
var  quizQuestions   = [
     {
         question: 'Commonly used data types DO NOT include:',
         choices: ["strings","booleans",'alerts', 'numbers'],
         answer: 'alerts'
     },
     {
         question: 'The condition in an if / else statement is enclosed within_______.',
         choices: ['quotes','curly brackets','parentheses','square brackets'],
         answer: 'parentheses'
     },
     {
         question: 'Arrays in Javascript can be used to store _______.',
         choices: ['numbers and strings','other arrays','booleans','all of the above'],
         answer: 'all of the above'
     },
     {
         question: 'String values must be enclosed within _____ when being assigned to variables',
         choices: ['commas','curly brackets','quotes','parentheses'],
         answer: 'quotes'
     },
     {
         question: 'A very useful tool used during development and debugging for printing content to the debugger is',
         choices: ['Javascript','terminal/bash','for loops','console log'],
         answer: 'console log'
     },
 ];

 var score = 0;
 var questionIndex = 0;
 var currentTime = document.querySelector('#currentTime');
 var questions = document.querySelector('#questions');
 var timer = document.querySelector('#Start');
 var content = document.querySelector('#content');
 var secondsLeft = 75;
 var holdInterval = 0;
 var penaltyTime = 15;
 var createUl = document.createElement('ul');


 timer.addEventListener("click", function() {
     if(holdInterval === 0) {
         holdInterval = setInterval(function() { secondsLeft--;
        currentTime.textContent = "Timer:   " + secondsLeft;
    
    if(secondsLeft <= 0){ clearInterval(holdInterval);
    finished();
currentTime.textContent = "Time is finished!";}
}, 1000);
     } begin(questionIndex);
 });


function begin(questionIndex) {
    questions.innerHTML ="";
    createUl.innerHTML ="";

    for (var i = 0; i<quizQuestions.length; i++) {
        var userQuestion = quizQuestions[questionIndex].question;
        var userChoices = quizQuestions[questionIndex].choices;
        questions.textContent = userQuestion;
    }

    userChoices.forEach(function (newItem) { varlistItem = document.createElement('li');
listItem.textContent = newItem;
questions.appendChild(createUl);
createUl.appendChild(listItem);
listItem.addEventListener('click',(compare));})
}

function compare(event) {
    var element = event.target;

    if (element.matches('li')) {
        var createDiv = document.createElement('div');
        createDiv.setAttribute('id', 'createDiv');
    }
}