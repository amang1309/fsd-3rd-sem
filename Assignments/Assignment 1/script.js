// List of Questions (You can easily add up to 10 here)
const questions = [
    {
        question: "Q1. Which semester fsd you like the most?",
        options: ["Sem1", "Sem2", "Sem3", "None of the Above"],
        answer: "Sem3"
    },
    {
        question: "Q2. Which CSS property is used to change the background color of an element?",
        options: ["color", "bgcolor", "background-color", "background-image"],
        answer: "background-color" 
    },
    {
        question: "Q3. Which language is used for web styling?",
        options: ["HTML", "Python", "CSS", "C++"],
        answer: "CSS"
    },
    {
        question: "Q4. What is 2 + 2? ",
        options: ["4", "6", "8", "9"],
        answer: "4"
    },
    // {
    //     question: "Q5. What HTML tag is used to create the largest heading on a webpage?", // <-- Fixed numbering to Q5
    //     options: ["<head>", "<h1>", "<h6>", "<headings>"],
    //     answer: "<h1>"
    // }
];

let currentIndex = 0;
let score = 0;


const userForm = document.getElementById("userForm");
if (userForm) {
    userForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        
        localStorage.setItem("name", document.getElementById("name").value);
        localStorage.setItem("roll", document.getElementById("roll").value);
        localStorage.setItem("section", document.getElementById("section").value);

        
        window.location.href = "quiz.html";
    });
}


const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const questionTitle = document.getElementById("question-title");
const optionsBox = document.getElementById("options-box");
const questionForm = document.getElementById("questionForm");

if (quizBox) {
    loadQuestion();

    questionForm.addEventListener("submit", function(e) {
        e.preventDefault();

        
        const selectedOption = document.querySelector('input[name="quizOption"]:checked');
        
        if (!selectedOption) {
            alert("Please select an option!");
            return;
        }

        
        if (selectedOption.value === questions[currentIndex].answer) {
            score++;
        }

        
        currentIndex++;
        if (currentIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    });
}

function loadQuestion() {
    const currentQ = questions[currentIndex];
    questionTitle.innerText = currentQ.question;
    optionsBox.innerHTML = ""; 

    
    currentQ.options.forEach((opt, index) => {
        optionsBox.innerHTML += `
            <input type="radio" id="opt${index}" name="quizOption" value="${opt}" required>
            <label for="opt${index}">${opt}</label><br>
        `;
    });
}

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");

    
    const name = localStorage.getItem("name");
    const roll = localStorage.getItem("roll");
    const section = localStorage.getItem("section");

    document.getElementById("user-info-display").innerHTML = `
        <strong>Name:</strong> ${name} <br>
        <strong>Roll No:</strong> ${roll} <br>
        <strong>Section:</strong> ${section}
    `;

    document.getElementById("score").innerText = score;
    document.getElementById("total").innerText = questions.length;
}

function restartQuiz() {
    localStorage.clear();
    window.location.href = "index.html";
}