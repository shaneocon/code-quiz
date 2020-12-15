// VARIABLES USED 
var quizQuestions = document.getElementById("quiz-questions");
var timer = document.querySelector("#timer");
var startBtn = document.getElementById("start");
var timeCounter = document.getElementById("timecounter");
var titleItem = document.querySelector("#title-item");

var timeInterval;

var nextQuestions;

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
        option: ["<script>", "<js>", "<ahoy>"],
        answer: "<script>"
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
        answer: "<script>"
    }
]
function startQuiz() {
    
    console.log("click");
    gameStart.style.display="none";
    quizQuestions.style.display="block";
    timeCounter.style.display="block";
    timer.style.display="block";
    nextQuestions= myQuestions[currentIndex];

        displayQuestion(nextQuestions);
    
    gameplay();

    // titleItem.textContent=myQuestions.question1
    var timeInterval = setInterval(function() {
            count--;
        }, 1000);


    // timeCounter = setInterval(Countdown, 75000)

    
    
    
    // if(storedScores !==null) {
    //     allScores = storedScores;
    // }
    // // btnStart.classList.add("d-none")
    // // timecounter.classList.remove("d-none")
    // // quizQuestions.classList.remove("d-none")
    // // nextQuestions= questions[currentindex]
    // // console.log(nextQuestions.title)

    // nextQuestions = myQuestions[currentIndex]

    //     // displayQuestion(nextQuestions)

    // gameplay()
}

// function Coundown (){};

// FUNCTIONS USED

 function gameplay() {

// 
}
     

// function displayQuestion(question) {
//     titleItem.textContent=question.question
//     question.choices.forEach()

//     }
// WHAT IS THIS FUNCTION DOING?-----------------------------------------
// function displayQuestion(question) QUESTION IS THE USER SET PARAMETER FOR THE FUNCTION?{
//     titleitem.innerText=question.title
//     question.choices.forEach(element => {
//      var button =document.createElement("button")
//     button.className="btn-primary btn-block text-left"
//     button.innerText=element
//     // questionanswers.innerHTML=""
//     questionanswers.appendChild(button)
//     button.addEventListener("click", displaynextQuestion)
//     });


// EVENT LISTENERS
startBtn.addEventListener("click", startQuiz); 
    

scoreBtn.addEventListener("click", function(){
    var name = document.querySelector("#inputScore").value
    scorePage(name, count)

});

function endgame (){
    // btnStart.classList.add("d-none")
    myScore.innaText = count;
    addScore.style.display="block";
    timecounter.style.display="none";
    quizQuestions.style.display="none";
}





// <!-- PAGE 2 HTML --------------------------------------------------------------------->
// <!-- Quiz Box ------------------------------------------------------------------------>

// <!-- Quiz Box Header -------------------------->
// <div class="quiz-box">
//     <header>
//         <div class="title">Ahoy! This be the Coding Sea.</div>
//         <div class="timer">
//             <div class="time-text">Time Left:</div>
//             <div class="timer-sec">75</div>
//         </div>
//     </header>

//     <!-- Question 1--------------------------->
//     <section>
//         <div class="question-text">
//             <span>Be Javascript included in Full-Stack Development?</span>
//         </div>
//         <div class="option-list">
//             <div class="option">
//                 <span>True</span>
//                 <div class="icon tick"><i class="fas fa-check"></i></div>
//             </div>

//             <div class="option">
//                 <span>False</span>
//                 <div class="icon cross"><i class="fas fa-times"></i></div>
//             </div>
//         </div>
//     </section>

//     <!--QUIZ BOX FOOTER SECTION ------------------------->

//     <footer>
//         <div class="total-questions">
//             <span><p>1</p><p>Of</p><p>4</p><p>Riddles</p></span>
//         </div>
//         <button class="next-btn">Next Riddle</button>
//     </footer>
// </div>


// <!-- RESULT BOX ------------------------------------------->

// <div class="result-box">
//     <div class="icon">
//         <i class="fas fa-crown"></i>
//     </div>
//     <div class="game-over-text">You've finished the quiz! Game over.</div>
//     <div class="score-text">
//         <span>You finished with <p>x</p>out of<p>4</p></span>
//     </div>
//     <div class="resetBtn">
//         <button class="restart">Restart Quiz</button>
//     </div>
// </div>







// THIS IS FURTHER HTML CODED THAT NEEDS TO BE DROPPED INTO INDEX.HTML

        // <!-- Question 2 ---------------------------->
        //     <section>
        //         <div class="question-text">
        //             <span>Parantheses belong at th' beginnin' o' a function.</span>
        //         </div>
        //         <div class="option-list">
        //             <div class="option">
        //                 <span>True</span>
        //                 <div class="icon cross"><i class="fas fa-times"></i></div>
        //             </div>

        //             <div class="option">
        //                 <span>False</span>
        //                 <div class="icon tick"><i class="fas fa-check"></i></div>
        //             </div>
        //         </div>
        //     </section>

        //      <!--QUIZ BOX FOOTER SECTION ------------------------->

        //      <footer>
        //         <div class="total-questions">
        //             <span><p>2</p><p>Of</p><p>4</p><p>Riddles</p></span>
        //         </div>
        //         <button class="next-btn">Next Riddle</button>
        //     </footer>

        //     <!-- Question 3 --------------------------->
        //     <section>
        //         <div class="question-text">
        //             <span>Quotations declare th' end o' a statement in Javascript.</span>
        //         </div>
        //         <div class="option-list">
        //             <div class="option">
        //                 <span>True</span>
        //                 <div class="icon cross"><i class="fas fa-times"></i></div>
        //             </div>
                
        //             <div class="option">
        //                 <span>False</span>
        //                 <div class="icon tick"><i class="fas fa-check"></i></div>
        //             </div>
        //         </div>
        //     </section>

        //      <!--QUIZ BOX FOOTER SECTION ------------------------->

        //      <footer>
        //         <div class="total-questions">
        //             <span><p>3</p><p>Of</p><p>4</p><p>Riddles</p></span>
        //         </div>
        //         <button class="next-btn">Next Riddle</button>
        //     </footer>

        //     <!-- Question 4 --------------------------->
        //     <section>
        //         <div class="question-text">
        //             <span>Lemons are good fer scurvy.</span>
        //         </div>
        //         <div class="option-list">
        //             <div class="option">
        //                 <span>True</span>
        //                 <div class="icon tick"><i class="fas fa-check"></i></div>
        //             </div>
                
        //             <div class="option">
        //                 <span>False</span>
        //                 <div class="icon cross"><i class="fas fa-times"></i></div>
        //             </div>
        //         </div>
        //     </section>

        //      <!--QUIZ BOX FOOTER SECTION ------------------------->

        //      <footer>
        //         <div class="total-questions">
        //             <span><p>4</p><p>Of</p><p>4</p><p>Riddles</p></span>
        //         </div>
        //         <button class="next-btn">Next Riddle</button>
        //     </footer>
