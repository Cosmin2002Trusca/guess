// Questions and Answers
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Rome", "Berlin"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Mercury"],
        correctAnswer: "Mars"
    },
    {
        question: "How many time zones are there in Russia?",
        options: ["6", "9", "11", "12"],
        correctAnswer: "11"
    },
    {
        question: "What’s the national flower of Japan?",
        options: ["Rose", "Cherry blossom", "Sunflower", "Lotus"],
        correctAnswer: "Cherry blossom"
    },
    {
        question: "How many stripes are there on the US flag?",
        options: ["10", "12", "13", "15"],
        correctAnswer: "13"
    },
    {
        question: "What’s the national animal of Australia?",
        options: ["Koala", "Kangaroo", "Emu", "Platypus"],
        correctAnswer: "Red Kangaroo"
    },
    {
        question: "How many days does it take for the Earth to orbit the Sun?",
        options: ["365", "366", "364", "360"],
        correctAnswer: "365"
    },
    {
        question: "Which of the following empires had no written language: Incan, Aztec, Egyptian, Roman?",
        options: ["Incan", "Aztec", "Egyptian", "Roman"],
        correctAnswer: "Incan"
    },
    {
        question: "Until 1923, what was the Turkish city of Istanbul called?",
        options: ["Byzantium", "Constantinople", "Smyrna", "Ephesus"],
        correctAnswer: "Constantinople"
    },
    {
        question: "What country has the most islands in the world?" ,
        options: ["France", "Italy", "Spain", "Sweden"],
        correctAnswer: "Sweden"
    },
];

// Get DOM elements
const questionElement = document.querySelector('.question');
const buttons = document.querySelectorAll('.buttons button');
const scoreElement = document.getElementById('score');
const incorrectElement = document.getElementById('incorrect');
const modal = document.getElementById('modal');
const finalScore = document.getElementById('final-score');
const closeButton = document.querySelector('.close');

// Initialize scores
let score = 0;
let incorrect = 0;
let endGame = false;
updateScoreDisplay();

// Add event listeners to buttons
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const selectedAnswer = quizData[currentQuestionIndex].options[index];
        checkAnswer(selectedAnswer);
    });
});

let currentQuestionIndex = 0;
loadQuestion();

// Function to load a new question
function loadQuestion() {
    questionElement.textContent = quizData[currentQuestionIndex].question;
    quizData[currentQuestionIndex].options.forEach((option, index) => {
        buttons[index].textContent = option;
    });
}

// Function to check the selected answer
function checkAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        score++;
    } else {
        incorrect++;
    }
    updateScoreDisplay();
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        // Quiz ends
        endGame = true;
        showEndGameModal();
    }
}

// Function to update score display
function updateScoreDisplay() {
    scoreElement.textContent = score;
    incorrectElement.textContent = incorrect;
}

// Function to show end game modal with final score
function showEndGameModal() {
    finalScore.textContent = score;
    modal.style.display = 'block';
}

// Close the modal when the close button is clicked
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Function to reset the quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    incorrect = 0;
    endGame = false;
    updateScoreDisplay();
    loadQuestion();
}