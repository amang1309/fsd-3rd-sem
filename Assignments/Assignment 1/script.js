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
        answer: "background-color" // <-- Fixed: Changed from "4" to match the correct option text
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

// 1. Handle Login Form
const userForm = document.getElementById("userForm");
if (userForm) {
    userForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Save user details to browser memory
        localStorage.setItem("name", document.getElementById("name").value);
        localStorage.setItem("roll", document.getElementById("roll").value);
        localStorage.setItem("section", document.getElementById("section").value);

        // Move to quiz page
        window.location.href = "quiz.html";
    });
}

// 2. Handle Quiz Questions
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const questionTitle = document.getElementById("question-title");
const optionsBox = document.getElementById("options-box");
const questionForm = document.getElementById("questionForm");

if (quizBox) {
    loadQuestion();

    questionForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get the selected radio button
        const selectedOption = document.querySelector('input[name="quizOption"]:checked');
        
        if (!selectedOption) {
            alert("Please select an option!");
            return;
        }

        // Check if answer is correct
        if (selectedOption.value === questions[currentIndex].answer) {
            score++;
        }

        // Move to next question or show results
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
    optionsBox.innerHTML = ""; // Clear old options

    // Create radio buttons for each option dynamically
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

    // Display user info and final score
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