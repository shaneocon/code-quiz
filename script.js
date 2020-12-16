// VARIABLES USED 
var quizQuestions = document.getElementById("quiz-questions");
var timer = document.querySelector("#timer");
var startBtn = document.getElementById("start");
var timeCounter = document.getElementById("timecounter");
var titleItem = document.querySelector("#title-item");

var timeInterval;

var nextQuestions;

var correctAnswer = ["<script>", "Programming Language", "variable", "Randy Dandy-Oh"]


var questionAnswers = document.querySelector("#question-answers");
var myScore = document.querySelector("#score");
var scoreBtn = document.querySelector("#scoreBtn");

var currentIndex = 0;
var score = 0;
var count = 75;

var alert = document.querySelector("#alert");
var info = document.querySelector("#info");

var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));

var gameStart = document.querySelector(".game-start");
quizQuestions.style.display="none";

// QUESTIONS 
var myQuestions = [
    {  
        question: "Inside which HTML element do we put th' JavaScript?",
        options: ["script", "js", "ahoy"],
        answer: "script"
    },

    {
        question: "Wha' be JavaScript?",
        options: ["Programming Language", "Markup Language", "Pirate Language"],
        answer: "Programming Language"
    },

    {
        question: "In programmin', th' way ye save a value fer later use be by storin' it in a: ?",
        options: ["sea shanty", "database", "variable"],
        answer: "variable"
    },
    {
        question: "Guess the name of this classic sea shanty: Now you're ready to sail for the Horn / Weigh, hey, roll and go! / Our boots and our clothes, boys, are all in the pawn / To be rollicking Randy Dandy, oh:", 
        options: ["Fish in the Sea", "Spanish Landies", "Randy Dandy-Oh"],
        answer: "Randy Dandy-Oh"
    }
]


startBtn.addEventListener("click", startQuiz);
function startQuiz() {

    function displayQuestion(question) {
        
        console.log({ question });
        document.getElementById('title-item').textContent = question.question;
        question.options.forEach((element) => {
          var button = document.createElement('button');
          button.className = 'btn-primary btn-block text-left';
          button.innerText = element;
          // questionanswers.innerHTML=""
          
          questionAnswers.appendChild(button);
          
           
          button.addEventListener('click', () => {checkCorrectAnswer(element === question.answer)}); 
        });
    }

    
        console.log("click");
        gameStart.style.display="none";
        quizQuestions.style.display="block";
        timeCounter.style.display="block";
        timer.style.display="block";
        nextQuestions= myQuestions[currentIndex];

      

        var timeInterval = setInterval(function() {

            count--;
            timer.textContent = count
            
        }, 1000);  


        displayQuestion(nextQuestions);
    
    gameplay();

    // titleItem.textContent=myQuestions.question1

    // function gametime(){
       
    

    // timeCounter = setInterval(Countdown, 75000)

    
    
    
}


function displayNextQuestion(event) {
    currentIndex++
    if (currentIndex < myQuestions.length) {
        checkCorrectAnswer(event.target.textContent == nextQuestions.answer);
        questionAnswers.textContent="";
        if(currentIndex < myQuestions.length) {
            nextQuestions= myQuestions[currentIndex]
            displayQuestion(nextQuestions)
        }else {
            currentIndex = 0;
            displayQuestion(nextQuestions);
        }
    }else{
        console.log("endgame")
        endgame()

    }
}

function checkCorrectAnswer(response){
   console.log(response)
    if(response){
        alert.innerText="Correct"
        
    }else {
        alert.innerText="Incorrect"
        count = count -15
        timer.innerHTML = count
        console.log("Incorrect")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}



// function Coundown (){};

// FUNCTIONS USED

 function gameplay() {

    

// 
}
     

 
    

// // scoreBtn.addEventListener("click", function(){
// //     var name = document.querySelector("#inputScore").value
// //     scorePage(name, count)

// });

// function endgame (){
//     // btnStart.style.display="none"
//     myScore.innaText = count;
//     addScore.style.display="block";
//     timecounter.style.display="none";
//     quizQuestions.style.display="none";
//     addScore.style.display="block";



