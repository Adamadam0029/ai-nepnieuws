const questions = [
   { 
    question: "NASA bevestigt: maan is officieel een hologram ",
    answers: [
        {text:'Nep', correct: true},
        {text:'Echt', correct: false},
    ]
    },
    {
        question: "Nederlands kabinet trekt 2 miljard uit voor onderwijshervorming ",
    answers: [
        {text:'Nep', correct: false},
        {text:'Echt', correct: true},
    ]
    },
    {
        question: "Drink elke ochtend citroenwater en je hoeft NOOIT meer naar de dokter ",
    answers: [
        {text:'Nep', correct: true},
        {text:'Echt', correct: false},
    ]
    },
    {
        question: "KNMI: 2025 was warmste jaar ooit gemeten in Nederland ",
    answers: [
        {text:'Nep', correct: false},
        {text:'Echt', correct: true},
    ]
    },
        {
        question: "AI-foto van paus in witte donsjas gaat viral als 'echt' ",
    answers: [
        {text:'Nep', correct: true},
        {text:'Echt', correct: false},
    ]
    },
    
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0; 
let score = 0; 

function startQuize(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{ 
        const button = document.createElement("Button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if( answer.correct){
            Button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click",selectAnswer); 
    })
}

function resetState(){
     nextButton.style.display = "none";
      while(answerButtons.firstChild ){
        answerButtons.removeChild(answerButtons.firstChild);

      }
}

function selectAnswer(){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "treu";
    if(isCorrect){
        selectBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}

startQuize();