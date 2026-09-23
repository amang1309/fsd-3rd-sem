// A simple EventEmitter for this browser activity monitor.
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(listener);
    }

    emit(eventName) {
        const listeners = this.events[eventName] || [];

        listeners.forEach(function(listener) {
            listener();
        });
    }
}

const activityEmitter = new EventEmitter();
const message = document.getElementById("message");
const activityList = document.getElementById("activityList");

function showActivity(text) {
    message.textContent = text;

    const listItem = document.createElement("li");
    listItem.textContent = text;
    activityList.appendChild(listItem);
}

activityEmitter.on("login", function() {
    showActivity("Student logged successfully");
});

activityEmitter.on("assignment", function() {
    showActivity("Assignment submitted");
});

activityEmitter.on("logout", function() {
    showActivity("Student logged out");
});

activityEmitter.on("exit", function() {
    showActivity("Exiting application");
});

document.getElementById("loginButton").addEventListener("click", function() {
    activityEmitter.emit("login");
});

document.getElementById("assignmentButton").addEventListener("click", function() {
    activityEmitter.emit("assignment");
});

document.getElementById("logoutButton").addEventListener("click", function() {
    activityEmitter.emit("logout");
});

document.getElementById("exitButton").addEventListener("click", function() {
    activityEmitter.emit("exit");
});
