
let answers = [
    "It is certain.",
    "Ask again later.",
    "My sources say no.",
    "Definitely yes!",
    "I wouldn't count on it.",
    "The future is unclear."
];


function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    let circle = document.getElementById("circle");

    circle.style.display = "block";     
    circle.innerHTML = answers[index];  
}


document.getElementById("ball").addEventListener("mousedown", function() {
    let question = document.getElementById("question").value;

    if (question.trim() === "") {
        alert("Please enter a yes/no question first!");
    } else {
        displayAnswer();
    }
});


document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("circle").style.display = "none";
});
