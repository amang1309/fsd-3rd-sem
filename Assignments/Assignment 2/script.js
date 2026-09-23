// 1. Simple Event Emitter Class (Mimics Node.js EventEmitter)
class EventEmitter {
    constructor() {
        this.events = {};
    }

    // Register an event listener (.on)
    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    // Trigger an event (.emit)
    emit(eventName) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(listener => {
                listener();
            });
        }
    }
}

// Create an instance of our Event Emitter
const studentEmitter = new EventEmitter();

// Select HTML elements
const logBox = document.getElementById("log-box");
const loginBtn = document.getElementById("login-btn");
const assignmentBtn = document.getElementById("assignment-btn");
const logoutBtn = document.getElementById("logout-btn");
const exitBtn = document.getElementById("exit-btn");

// Helper function to print messages onto the screen log
function logMessage(message) {
    const placeholder = logBox.querySelector(".log-placeholder");
    if (placeholder) {
        placeholder.remove();
    }

    const p = document.createElement("p");
    p.innerText = `> ${message}`;
    logBox.appendChild(p);
    logBox.scrollTop = logBox.scrollHeight; // Auto-scrolls down
}


// 2. REGISTER THE REQUIRED EVENTS (.on)

studentEmitter.on("login", function() {
    logMessage("Student logged successfully");
});

studentEmitter.on("assignment", function() {
    logMessage("assignment submitted");
});

studentEmitter.on("logout", function() {
    logMessage("student logged out");
});

studentEmitter.on("exit", function() {
    logMessage("exitting application.");
});


// 3. TRIGGER EVENTS WHEN BUTTONS ARE CLICKED (.emit)

loginBtn.addEventListener("click", function() {
    studentEmitter.emit("login");
});

assignmentBtn.addEventListener("click", function() {
    studentEmitter.emit("assignment");
});

logoutBtn.addEventListener("click", function() {
    studentEmitter.emit("logout");
});

exitBtn.addEventListener("click", function() {
    studentEmitter.emit("exit");
});