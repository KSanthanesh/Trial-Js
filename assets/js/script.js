function check() {
    name = document.getElementById("name"). value;
    mobile = document.getElementById("number"). value;
    email = document.getElementById("email"). value;

    if (name == "") {
        alert("Please fill the Name");
        return false;
    } else if (mobile == "") {
        alert("Please fill the Mobile Number");
        return false;
    } else if (email == "") {
        alert("Please fill the email address");
        return false;
    } 
}

// Question Bank

let questionBank = [
    {
        question: 'Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?',
        option: ['7', '10', '12', '13'],
        answer: '10'
    },
    {
        question: 'Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?',
        option: ['12', '27', '14', '53'],
        answer: '14'
    },
    {
        question: 'Look at this series: 21, 9, 21, 11, 21, 13, 21, ... What number should come next?',
        option: ['15', '14', '21', '23'],
        answer: '15'
    },
    {
        question: 'Look at this series: 58, 52, 46, 40, 34, ... What number should come next?',
        option: ['26', '28', '30', '32'],
        answer: '28'
    },
    {
        question: 'Look at this series: 3, 4, 7, 8, 11, 12, ... What number should come next?',
        option: ['7', '10', '14', '15'],
        answer: '15'
    },
    {
        question: 'Look at this series: 8, 22, 8, 28, 8, ... What number should come next?',
        option: ['9', '29', '32', '34'],
        answer: '34'
    },
    {
        question: 'Look at this series: 31, 29, 24, 22, 17, ... What number should come next?',
        option: ['15', '14', '13', '12'],
        answer: '15'
    },
    {
        question: 'Look at this series: 80, 10, 70, 15, 60, ... What number should come next?',
        option: ['25', '30', '20', '50'],
        answer: '20'
    },
]
let question = document.getElementById("question");
let quizContainer = document.getElementById("quiz-container");
let scoreCard = document.getElementById("scorecard");
let option0 = document.getElementById("option0");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let next = document.querySelectorAll("next");
let points = document.getElementById("score");
let span = document.querySelectorAll("span");

let i = 0;
let score = 0;

//function to display questions

function displayQuestion() {
    for (let a = 0; a < span.entrieslength; a++) {
        span[a].style.background = 'none';
    }
    question.innerText = 'Q.' +(i+1)+' '+questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];

    stat.innerHTML = "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}
displayQuestion();
