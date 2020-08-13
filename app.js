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

const STORE = {
  questions: [
    {
      question: "what is Arsenal FC's nickname?",
      answers: ["The Shooters", "The Hammers", "The Gunners", "The Reds"],
      correct: 2,
    },
    {
      question: "What is Tottenham FC's nickname?",
      answers: ["The LillyWhites", "The Cockerels", "The Saints", "The Spurs"],
      correct: 3,
    },
    {
      question: "How many times has the North London Derby been played?",
      answers: [100, 50, 200, 220],
      correct: 2,
    },
    {
      question:
        "Which one of these players has scored for both clubs in the derby?",
      answers: [
        "Thierry Henry",
        "William Gallas",
        "Emmanuel Adebayor",
        "Sol Campbell",
      ],
      correct: 2,
    },
    {
      question:
        "St. Totteringham Day, a stable of Arsenal folklore has been cancelled the last 3 seasons. Which one of these best describes what it is?",
      answers: [
        "The day when Arsenal fans celebrate the fact that Tottenham can no longer catch Arsenal in the League. It is a movable feast, but usually falls in March, April or May. It was the day to collect on bets made by over-optimistic Spurs fans in the close season who think that 'this is the year'",
        "The day Tottenham first won the league",
        "The day Arsenal finished the league campaign with an unbeaten record",
        "The day the Queen of England knighted Tottenham's mascot.",
      ],
      correct: 0,
    },
  ],
  score: 0,
  currentQuestion: 0,
  guess: 0,
  started: false,
  hasFeedback: false,
};

function render() {
  $("#start").hide();
  $("#quiz").hide();
  $("#feedback").hide();
  $("#summary").hide();
  $("header").hide();

  if (!STORE.started) {
    $("#start").show();
  } else if (STORE.hasFeedback) {
    renderHeader();
    renderFeedback();
  } else if (STORE.currentQuestion < STORE.questions.length) {
    renderHeader();
    renderQuestion();
  } else {
    renderSummary();
  }
}

function renderHeader() {
  $("header").show();
  $("header .score").text(`Score: ${STORE.score}`);
  $("header .progress").text(
    `Question ${STORE.currentQuestion + 1}/${STORE.questions.length}`
  );
}

function renderQuestion() {
  $("#quiz").show();
  const question = STORE.questions[STORE.currentQuestion];
  $("#quiz h2").text(question.question);
  $("#choices").html("");
  question.answers.forEach((answer, i) => {
    $("#choices").append(`
      <input type="radio" name="choice" value="${i}" id="${i}"/>
      <label for="${i}">${answer}</label>
    `);
  });
}

function renderFeedback() {
  $("#feedback").show();
  $("#feedback h2").text(STORE.hasFeedback);
  $(".user-answer").text("");
  const question = STORE.questions[STORE.currentQuestion];
  if (STORE.hasFeedback === "Incorrect") {
    $(".user-answer").text(`You answered ${STORE.guess}`);
  }
  $(".correct-answer").text(
    `The correct answer was ${question.answers[question.correct]}`
  );
}

function renderSummary() {
  $("#summary").show();
  $("#summary p").text(
    `You scored ${STORE.score} out of ${STORE.questions.length}`
  );
}

function startQuiz() {
  $("#start-quiz").click((e) => {
    STORE.started = true;
    render();
  });
}

function submitChoice() {
  $("#quiz form").submit((e) => {
    e.preventDefault();
    const answer = $('input[type="radio"]:checked').val();
    const question = STORE.questions[STORE.currentQuestion];
    if (Number(answer) === question.correct) {
      STORE.score++;
      STORE.hasFeedback = "Correct";
    } else {
      STORE.guess = STORE.questions[STORE.currentQuestion].answers[answer];
      STORE.hasFeedback = "Incorrect";
    }
    render();
  });
}

function nextQuestion() {
  $("#next").click((e) => {
    STORE.hasFeedback = false;
    STORE.currentQuestion = STORE.currentQuestion + 1;
    render();
  });
}

function restartQuiz() {
  $("#restart").click((e) => {
    STORE.started = false;
    STORE.score = 0;
    STORE.currentQuestion = 0;
    render();
  });
}

function main() {
  startQuiz();
  submitChoice();
  nextQuestion();
  restartQuiz();
  render();
}

$(main);
