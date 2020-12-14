// VARIABLES USED 
var startBtn = document.querySelector("#start");
var timer = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var timeCounter = document.querySelector("#timecounter");
var titleItem = document.querySelector("#title-item");

var nextQuestions

var questionsAnswers = document.querySelector("#question-answers");
var myScore = document.querySelector("#score");
var btnScore = document.querySelector("#btnScore");

var currentIndex = 0;
var score = 0;
var count = 75; 
var alert = document.querySelector("#alert");
var info = document.querySelector("#info");



// QUESTIONS 
var questions = [
    {
        question: "Inside which HTML element do we put th' JavaScript?",
        options: ["<script>", "<js>", "<ahoy>"],
        answer: "<script>"
    },
    {
        question: "Wha' be JavaScript?",
        options: ["Programming Language", "Markup Language", "Pirate Language"],
        answer: "<script>"
    }
    {
        question: "In programmin', th' way ye save a value fer later use be by storin' it in a: ?",
        options: ["sea shanty", "database", "variable"],
        answer: "variable"
    }
    {
        question: "Guess the rest of the name of this classic sea shanty: Now you're ready to sail for the Horn / Weigh, hey, roll and go! / Our boots and our clothes, boys, are all in the pawn / To be rollicking Randy Dandy, oh:", 
        options: ["Fish in the Sea", "Spanish Landies", "Randy Dandy-O"],
        answer: "<script>"
    }
]







// FUNCTIONS USED

function gameplay() {

    var timeInterval = setInterval(function(){
        timer.innerText = count
        count--;
    }, 1000);
}



// EVENT LISTENERS
startBtn.addEventListener("click", function(){

})









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

// Questions for QUIZ
    // True or False
        // 1. Be Javascript included in Full-Stack Development? (TRUE)
        // 2. Parantheses belong at th' beginnin' o' a function. (FALSE)
        // 3. Quations declare th' end o' a statement in Javascript. (FALSE)
        // 4. Lemons are good fer scurvy. (TRUE)





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
