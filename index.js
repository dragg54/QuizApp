const quizData=[
    {
        question: "What is the name of the Nigerian president?",
        a: "Alao Akala",
        b: "Muhammadu Buhari",
        c: "Donald Trump",
        d: "Lai Muhammed",
        correct:"b"
    },
    {
        question: "Who is the owner of Globacom Limited?",
        a: "Gbenga Adenuga",
        b: "Olusegun Obasanjo",
        c: "Aliko Dangote",
        d: "Femi Otedola",
        correct:"a"
    },
    {
        question: "What is the capital of Ogun State?",
        a: "Ibadan",
        b: "Abuja",
        c: "Lagos",
        d: "Abeokuta",
        correct:"d"

    },
    {
        question: "How many states are in Nigeria?",
        a: "36",
        b: "22",
        c: "26",
        d: "39",
        correct:"a"
    }
]

const question=document.querySelector("#question")
const questionA=document.querySelector("#question_a")
const questionB=document.querySelector("#question_b")
const questionC=document.querySelector("#question_c")
const questionD=document.querySelector("#question_d")
const butt=document.querySelector("button")
const SubmitBtn=document.querySelector(".button")
const answerELs=document.querySelectorAll(".answer")
const quiz_=document.querySelector(".quiz_c")

let currentQuiz=0
let score=0
loadQuiz()

function loadQuiz(){
    question.innerHTML=quizData[currentQuiz].question;
    questionA.innerHTML=quizData[currentQuiz].a;
    questionB.innerHTML=quizData[currentQuiz].b;
    questionC.innerHTML=quizData[currentQuiz].c;
    questionD.innerHTML=quizData[currentQuiz].d;
    answerELs.forEach((answerEL)=>{
        answerEL.checked=false
    }
    )
}

SubmitBtn.addEventListener("click",()=>{
    if(currentQuiz<4){
        answerELs.forEach((answerEL)=>{
            if(answerEL.checked){
                 if(answerEL.id===quizData[currentQuiz].correct){
                score++
            }
               currentQuiz++
            }
        })
        console.log(score)
        loadQuiz()
    }
    else{
       quiz_.innerHTML=`<h2>Your score is ${score}/${quizData.length}</h2>`
       SubmitBtn.innerHTML="<button>Reload</button>"
    }
}
)
