import {questionData} from "./questions.js";
// In javascript we use "./  "when the file is located in the same folder.

const my_question = document.getElementById("my-question")
const a_text = document.getElementById("a-text")
const b_text = document.getElementById("b-text")
const c_text = document.getElementById("c-text")
const d_text = document.getElementById("d-text")
const submit_button = document.getElementById("submit-button")
const quiz = document.querySelector(".quiz-container")
const quizAlert = document.querySelector(".quiz-container>h3")

let questionNumber = 0 ;

loadQuiz();

function loadQuiz() {

    let currentQuestion = questionData[questionNumber];
    my_question.innerText = currentQuestion.question;
    a_text.innerText = currentQuestion.optionA;
    b_text.innerText = currentQuestion.optionB;
    c_text.innerText = currentQuestion.optionC;
    d_text.innerText = currentQuestion.optionD;
    let checkedEl = document.querySelector('ul>li>input[name="option"]:checked');
    
    // First we check if any radio button is checked and the we unckecked it. 
    if (checkedEl) {
        checkedEl.checked = false;
    }

}

function getCheckedElement() {
    
    let checkedEl2 = document.querySelector('ul>li>input[name="option"]:checked');

    if (checkedEl2) {

        let label = document.querySelector('ul>li>input[name="option"]:checked+label').innerText;
        return label;

    }
    else {
        return false;
    }

}


let score = 0;

submit_button.addEventListener("click", () => {
    
    quizAlert.style.display = "none"
    submit_button.blur();
    // button.blur() disables focus from an element
    
    if (questionNumber <= (questionData.length-1) && getCheckedElement()) {
        
        let myAnswer = getCheckedElement();
        if (myAnswer == questionData[questionNumber].answer) {
            score++
        }
        questionNumber++
        
        questionNumber <= questionData.length-1 
            ? (loadQuiz()) 
            : (quiz.innerHTML = `<h2 class="result" >Thanks. You got a score of ${score} points.</h2><button onclick="location.reload()">Reload</button>`);
        
        
    }
    else {
        quizAlert.innerText = 'You need to choose an answer.';
        quizAlert.style.display = "block"
        
    }; 

});

