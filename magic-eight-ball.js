let answers = [
    'Seems unlikely.',
    'No way.',
    'Ask again later.',
    'Signs point to yes.',
    'No.',
    'Yes.',
    'Uncertain.'
]
 
let question = document.getElementById("question");
let ball = document.getElementById("ball");
let reset = document.getElementById("reset");
let circle = document.getElementById("circle" );
 

ball.addEventListener('mousedown', () => {
    if(question.value == '') {
        alert("Please enter a question!");
    }
    else {
        displayAnswer();
    }
})
 

reset.addEventListener('click', () => {
    circle.style.display = 'none'; 
})
 

function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    let answer = answers[index];
    circle.style.display = 'inline-block';
    circle.innerHTML = '<br><br><br>' + answer  ;
}
});
