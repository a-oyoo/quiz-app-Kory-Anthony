/**
 * Example store structure
 */
"use strict";

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

import STORE from './store.js';


function generateStartPage() {

  return `
  <section id="start">
    <div class="generateStartPage">
      <h2>North London Derby Quiz</h2>
      <img src="images/arsenal-fc.jpeg" alt="Arsenal FC club logo" width="150" />
      <img src="images/tottenham-fc.jpg" alt="Tottenham FC club logo" width="" />
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
  </section>     
    `;
}

// // user prompted with atleast 5 multiple choice questions
function generateQuestions() {
  console.log("`generateQuestions` ran");

  return `
    <section id="ScoreAndProgress">
      <p class="score">Score:</p>
      <p class="progress">0/0</p>
    </section>
    <section id="quiz">
      <h2></h2>
      <form>
        <fieldset id="choices"></fieldset>
        <input type="submit" value="Submit Answer" aria-label="Submit Answer" />
      </form>
    </section> 
    `;
}

function generateFeedback() {
  console.log("'generateFeedback' ran");

  return `
  <section id="feedback">
    <p class="user-answer"></p>
    <p class="correct-answer"></p>
    <button id="next">Next Question</button>
  </section>
  `;

}

function generateSummary() {
  return `
  <section id="summary">
    <h2>Summary</h2>
    <p>You scored ${STORE.score} out of ${STORE.questions.length}</p>
    <button id="restart">Restart Quiz</button>
  </section>
  `;
}


function render() {

  if (!STORE.started) {
    $("main").html(generateStartPage);
  } else if (STORE.giveFeedback) {
    $("main").html(generateFeedback);
    headerFunc();
    response();
    $("button").focus()
  } else if (STORE.currentQuestion < STORE.questions.length) {
    $("main").html(generateQuestions);
    headerFunc();
    question();
    $("input[type='radio']").first().focus()
  } else {
    $("main").html(generateSummary);
  }
}

function headerFunc() {
  $("#ScoreAndProgress .score").text(`Score: ${STORE.score}`);
  $("#ScoreAndProgress .progress").text(
    `Question ${STORE.currentQuestion + 1}/${STORE.questions.length}`
  );
}

function question() {
  const question = STORE.questions[STORE.currentQuestion];
  $("#quiz h2").text(question.question);
  $("#choices").html("");
  question.answers.forEach((answer, i) => {
    $("#choices").append(`
      
      <label class="d-block "for="${i}"><input type="radio" name="choice" value="${i}" id="${i}"/>${answer}</label>
    `);
  });
}

function response() {
  $("#feedback h2").text(STORE.giveFeedback);
  $(".user-answer").text("");
  const question = STORE.questions[STORE.currentQuestion];
  if (STORE.giveFeedback === "Incorrect") {
    $(".user-answer").text(`You answered ${STORE.selection}`);
  }
  $(".correct-answer").text(
    `The correct answer was ${question.answers[question.correct]}`
  );
}

function startQuiz() {
  $("main").on("click", "#start", (e) => {
    STORE.started = true;
    render();
  });
}

function submitResponse() {
  $("main").on("submit", "form", (e) => {
    e.preventDefault();
    const answer = $('input[type="radio"]:checked').val();
    if (!answer) {
      return
    }
    const question = STORE.questions[STORE.currentQuestion];
    if (Number(answer) === question.correct) {
      STORE.score++;
      STORE.giveFeedback = "Correct";
    } else {
      STORE.selection = question.answers[answer];
      STORE.giveFeedback = "Incorrect";
    }
    render();
  });
}

function nextQuestion() {
  $("main").on("click", "#next", (e) => {
    STORE.giveFeedback = false;
    STORE.currentQuestion = STORE.currentQuestion + 1;
    render();
  });
}

function restart() {
  $("main").on("click", "#restart", (e) => {
    STORE.started = false;
    STORE.score = 0;
    STORE.currentQuestion = 0;
    render();
  });
}

function main() {
  startQuiz();
  submitResponse();
  nextQuestion();
  restart();
  render();
}

$(main);
