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


function generateStartPage() {
  console.log("`renderQuestions` ran");
  $(main).html(
    `
    <h1>North London Derby Quiz</h1>
      <img src="images/arsenal-fc.jpeg" alt="Arsenal" width="150" />
      <img src="images/tottenham-fc.jpg" alt="Tottenham" width="" />
      <div>
        <p>
          Welcome to the rivalry that is Aresnal FC vs Tottenham FC!! Test your
          knowledge of the oldest derby in the World!!!
        </p>
      </div>
      <div>
        <button id="start-quiz">Start Quiz</button>
      </div>
      `
  )
}

function generateQuestion() {
  console.log("`generateQuestion` ran")
  let question = STORE.questions[STORE.currentQuestion];

  $("main").html(`
    <div class ="data">
    <div class="question">${questions.question}</div>
    <form class="form">
      <input type="radio" id="true" name="answers" value="${questions.question[0]}">
      <label for="true">${questions.question[0]}</label><br>
      <input type="radio" id="false" name="answers" value="${questions.question[1]}">
      <label for="false">${questions.question[1]}</label><br>
      <button type="submit" id="submit">Submit</button>
    </form>
  </div>
  `
  );
}
function generateEndPage() {
  console.log("`generateEndPage` ran")
}



/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//function handleClickStartQuiz() {
//  console.log("`handleSubmitQuestion` ran");

function handleSubmitAnswer() {
  console.log("`handleSubmitQuestion` ran");
}
function handleEndQuiz() {
  console.log("`handleSubmitQuiz` ran");
}

//event listeners



//function main() {
//  console.log("`main` rain")
//  generateStartPage();
}

$(main);