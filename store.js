"use strict";

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
