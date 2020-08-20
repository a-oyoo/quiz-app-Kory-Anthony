/**
 * Example store structure
 */
'use strict';

/** const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

*********************************************************************


// User experience requirements:

// user can click button to start quiz
// user prompted with atleast 5 multiple choice questions
// user asked one question after another
// user prompted with one question at a time
// user cannot skip question
// user to see which question they are on
// user submits answer: receives textual feedback - if wrong, correct displayed
// user submits answer: move onto next question or other element 
// user sees overall score at end of quiz
// user able to start new quiz


**********************************************************************
/**
 * 
 * Technical requirements:
 
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.


 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */


/* ******* Function stubs *******/

/********** TEMPLATE GENERATION FUNCTIONS **********/


// These functions return HTML templates

// user can click button to start quiz

function generateStartPage() {
  console.log("`generateStartPage` ran");

  $("main").text("North London Derby Quiz");

  return `<div class = "generateStartPage">
      <h2>North London Derby Quiz</h2>
        <img src="images/arsenal-fc.jpeg" alt="Arsenal" width="150" />
        <img src="images/tottenham-fc.jpg" alt="Tottenham" width="" />
        </div>
        <div>
          <p>
            Welcome to the rivalry that is Arsenal FC vs Tottenham FC!! Test your
            knowledge of the oldest derby in the World!!!
          </p>
        </div>
        <div>
          <button class="start-quiz">Start Quiz</button>
        </div>
      
    `
    ;
}

// user prompted with atleast 5 multiple choice questions
let counter = 0;
function generateQuestion() {
  console.log("`generateQuestion` ran");
  let question = STORE.questions[STORE.currentQuestion];

  return `<div class="questionBox">
        <div class="question">${question.name}</div>
        <form class="form">
        <input type="radio" id="true" name="answers" value="${question.answers[0]}">
        <label for="true">${question.answers[0]}</label><br>
        <input type="radio" id="false" name="answers" value="${question.answers[1]}">
        <label for="false">${question.answers[1]}</label><br>
          <button type="submit" id="submit">Submit</button>
        </form>    
      </div>
    
    `;
}



// user asked one question after another
function renderQuestions() {
  let html = generateQuestion();
  console.log(html);
  $("main").html(html);
}

// user submits answer: receives textual feedback - if wrong, correct displayed
// user submits answer: move onto next question or other element 

// function handleSubmitAnswer() {
//   event.preventDefault();
//   let answer = $("input[name=answers]:checked").val();
//   console.log("`handleSubmitAnswer` ran");
//   renderQuestions();
//   if (STORE.questions[STORE.currentQuestion].correct === answer) {
//     alert("you are right!");
//     let correctDiv = $(`<div class="correct">You are correct!</div>`);
//     STORE.score++
//   } else {
//     let wrongDiv = $(`<div class="wrong">You are wrong!</div>`);
//     alert("You are wrong!")
//   }
//   STORE.currentQuestion++;
//   if (STORE.currentQuestion === STORE.questions.length) {
//     alert("Quiz over!");
//     generateEndPage();
//   } else {
//     generateQuestion();  
//   }
// }

// function generateEndPage() {
//   console.log("`generateEndPage` ran")

// }



/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//function handleClickStartQuiz() {
//  console.log("`handleSubmitQuestion` ran");

// function handleQuestionCounter() {
//   console.log("`generateQuestionCounter` ran");
// }
// function handleSubmitAnswer() {
//   console.log("`handleSubmitAnswer` ran");
//   /*alert("completed");
//   generateQuestion();*/
// }

// function handleFinalScore() {
//   console.log("`handleFinalScore` ran");

// }
// function handleEndQuiz() {
//   console.log("`handleSubmitQuiz` ran");
// }

//event listeners

//startQuiz event listener
// $('main').on('click', '.startQuiz', function () {
//   generateQuestion();
// });

// submit Answer event listener
// $('main').on('submit', '.form', handleSubmitAnswer);




function main() {
  console.log("`main` ran");
  let startPage = generateStartPage();

  //let question = generateQuestion();
  //let endPage = generateEndPage();
  //let questionCounter = handleQuestionCounter();

  $("main").html(startPage);

}

//when the page loads call this function
$(main);