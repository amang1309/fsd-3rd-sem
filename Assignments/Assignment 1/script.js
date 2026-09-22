// List of Questions
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
    //     question: "Q5. What HTML tag is used to create the largest heading on a webpage?",
    //     options: ["<head>", "<h1>", "<h6>", "<headings>"],
    //     answer: "<h1>"
    // }
];

let currentIndex = 0;
let score = 0;

// 1. Handle Login Form (index.html)
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

// 2. Handle Quiz Questions (quiz.html)
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

// 3. Load Questions onto the screen
function loadQuestion() {
    const currentQ = questions[currentIndex];
    questionTitle.innerText = currentQ.question;
    optionsBox.innerHTML = ""; // Clear old options

    currentQ.options.forEach((opt, index) => {
        optionsBox.innerHTML += `
            <input type="radio" id="opt${index}" name="quizOption" value="${opt}" required>
            <label for="opt${index}">${opt}</label><br>
        `;
    });
}

// 4. Show Final Score and User Info
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

// 5. Restart Quiz Button
function restartQuiz() {
    localStorage.clear();
    window.location.href = "index.html";
}

// 6. ADVANCED KEYBOARD NAVIGATION (No Mouse Required!)
document.addEventListener("keydown", function(event) {
    const quizBox = document.getElementById("quiz-box");
    
    // Only run keyboard shortcuts if we are currently on the quiz page
    if (!quizBox || quizBox.classList.contains("hidden")) return;

    const radios = document.querySelectorAll('input[name="quizOption"]');
    let currentIndexRadio = Array.from(radios).findIndex(r => r.checked);

    // DOWN ARROW: Move selection down to the next option
    if (event.key === "ArrowDown") {
        event.preventDefault();
        if (radios.length > 0) {
            currentIndexRadio = (currentIndexRadio < radios.length - 1) ? currentIndexRadio + 1 : 0;
            radios[currentIndexRadio].checked = true;
            radios[currentIndexRadio].focus();
        }
    } 
    // UP ARROW: Move selection up to the previous option
    else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (radios.length > 0) {
            currentIndexRadio = (currentIndexRadio > 0) ? currentIndexRadio - 1 : radios.length - 1;
            radios[currentIndexRadio].checked = true;
            radios[currentIndexRadio].focus();
        }
    } 
    // ENTER KEY: Submit current answer and go to next question
    else if (event.key === "Enter") {
        event.preventDefault();
        questionForm.requestSubmit();
    } 
    // RIGHT ARROW: Go to next question (same as Enter)
    else if (event.key === "ArrowRight") {
        event.preventDefault();
        questionForm.requestSubmit();
    } 
    // LEFT ARROW: Go back to the previous question
    else if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            loadQuestion();
        }
    }
});