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
  console.log("`generateStartPage` ran");
  $(main).html(
    `<section id="startPage">
      <div class = "generateStartPage">
      <h1>North London Derby Quiz</h1>
        <img src="images/arsenal-fc.jpeg" alt="Arsenal" width="150" />
        <img src="images/tottenham-fc.jpg" alt="Tottenham" width="" />
        </div>
        <div>
          <p>
            Welcome to the rivalry that is Aresnal FC vs Tottenham FC!! Test your
            knowledge of the oldest derby in the World!!!
          </p>
        </div>
        <div>
          <button id="start-quiz">Start Quiz</button>
        </div>
      </section>
      `
  );
}

function generateQuestion() {
  console.log("`generateQuestion` ran")
  let question = STORE.questions[STORE.currentQuestion];

  $("main").html(
    `<section id="quiz">
      <h2></h2>
      <form>
        <fieldset id="choices"></fieldset>
        <input type="submit" value="Submit Answer" aria-label="Submit Answer" />
      </form>
    </section>
    `
  );

  /*$("main").html(
    `
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
  );*/
}
function generateEndPage() {
  console.log("`generateEndPage` ran")
  $('main').html(`<div class = "generateStartPage">
  <h3>Thanks for taking the North London Derby Quiz</h3>
  <p>Your final score was ${STORE.score}!</p>
  <button class="restart">Try Again</button>
  </div>`)

  /*<section id="summary">
  <h2>Summary</h2>
  <p></p>
  <button id="restart">Restart Quiz</button>
</section>*/

}

function SubmitAnswer(action) {
  action.preventDefault();
  let answer = $("input[name=answers]:checked").val();
  if (STORE.questions[STORE.currentQuestion].correctAnswer == answer) {
    alert("you are right!");
    let correctDiv = $(`<div class="correct">You are correct!</div>`);
    STORE.score++
  } else {
    let wrongDiv = $(`<div class="wrong">You are wrong!</div>`);
    alert("You are wrong!")
  }
  STORE.currentQuestion++;
  if (STORE.currentQuestion === STORE.questions.length) {
    alert("Quiz over!");
    endQuizPage();
  } else {
    generateQuestion();
  }

  /* <section id="feedback">
  <h2></h2>
  <p class="user-answer"></p>
  <p class="correct-answer"></p>
  <button id="next">Next Question</button>
</section> */

}



/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//function handleClickStartQuiz() {
//  console.log("`handleSubmitQuestion` ran");

function handleQuestionCounter() {
  console.log("`generateQuestionCounter` ran");
}
function handleSubmitAnswer() {
  console.log("`handleSubmitQuestion` ran");
  /*alert("completed");
  generateQuestion();*/
}

function handleFinalScore() {
  console.log("`handleFinalScore` ran");

}
function handleEndQuiz() {
  console.log("`handleSubmitQuiz` ran");
}

//event listeners

$('main').on('click', '.startQuiz', function () {
  renderList();
});

$('main').on('submit', '.form', handleSubmitAnswer);


function main() {
  generateStartPage();
  generateQuestion();
  generateEndPage();
  handleQuestionCounter();
  handleSubmitAnswer();
  handleFinalScore();
  handleEndQuiz();
  console.log('`main` ran');
  //generateStartPage();
}

$(main);