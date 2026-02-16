let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];

// Questions by difficulty (bold word example included)
const questionsDB = {
    beginner: [
        {
            question: "Find the synonym of the word <i>Variable</i> in the Sentence: Today the weather is <b>variable</b>.",
            options: ["sunny", "Shifting", "rainy", "cloudy"],
            correct: 1
        },
        {
            question: "Choose the correct sentence: She <b>doesn't</b> like coffee.",
            options: [
                "She don't like coffee.",
                "She doesn't like coffee.",
                "She not like coffee.",
                "She isn't like coffee."
            ],
            correct: 1
        },
        {
            question: "Choose the correct article: ___ <b>apple</b> a day keeps the doctor away.",
            options: ["A", "An", "The", "No article"],
            correct: 1
        }
    ],
    experienced: [
        {
            question: "Select the correct idiom meaning 'in a <b>hurry</b>':",
            options: ["Break a leg", "In the blink of an eye", "Once in a blue moon", "Piece of cake"],
            correct: 1
        },
        {
            question: "Identify the passive voice sentence:",
            options: [
                "She writes a letter.",
                "A letter is written by her.",
                "She wrote letters.",
                "Writing letters is fun."
            ],
            correct: 1
        },
        {
            question: "Correct form: 'I wish I ___ more time yesterday.'",
            options: ["have", "had", "has", "will have"],
            correct: 1
        }
    ],
    expert: [
        {
            question: "Choose the correct subjunctive sentence:",
            options: [
                "If I was you, I would go.",
                "If I were you, I would go.",
                "If I am you, I would go.",
                "If I be you, I would go."
            ],
            correct: 1
        },
        {
            question: "Identify the dangling modifier:",
            options: [
                "Walking down the street, the trees were beautiful.",
                "The trees were beautiful walking down the street.",
                "Walking down the street, I saw the trees.",
                "I saw the trees walking down the street."
            ],
            correct: 0
        },
        {
            question: "Correct plural form of 'analysis':",
            options: ["analysises", "analyses", "analysis", "analysi"],
            correct: 1
        }
    ]
};

// DOM Elements
const difficultyBtns = document.querySelectorAll('.difficulty-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const questionText = document.getElementById('question-text');
const optionButtons = document.querySelectorAll('.option-btn');
const progressText = document.getElementById('progress');
const scoreText = document.getElementById('score');
const scoreValue = document.getElementById('score-value');
const totalQuestions = document.getElementById('total-questions');
const progressCircle = document.querySelector('.progress-circle');
const restartBtn = document.getElementById('restart-btn');

// Start Quiz with Difficulty
difficultyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const level = btn.dataset.level;
        selectedQuestions = questionsDB[level];
        currentQuestion = 0;
        score = 0;

        welcomeScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');

        showQuestion();
    });
});

// Show Question
function showQuestion() {
    const q = selectedQuestions[currentQuestion];
    questionText.innerHTML = q.question;
    questionText.classList.remove('show');
    setTimeout(() => questionText.classList.add('show'), 10);

    optionButtons.forEach((btn, index) => {
        btn.textContent = q.options[index];
        btn.style.backgroundColor = "#e3e7ed";
        btn.classList.remove('show');
        setTimeout(() => btn.classList.add('show'), 10);

        btn.onclick = () => {
            const correctIndex = selectedQuestions[currentQuestion].correct;
            if (index === correctIndex) btn.style.backgroundColor = 'green';
            else btn.style.backgroundColor = 'red';

            setTimeout(() => {
                optionButtons.forEach(b => b.style.backgroundColor = '#e3e7ed');
                checkAnswer(index);
            }, 500);
        };
    });

    progressText.textContent = `Question ${currentQuestion + 1} of ${selectedQuestions.length}`;
    scoreText.textContent = `Score: ${score}`;
}

// Check Answer
function checkAnswer(selectedIndex) {
    const correctIndex = selectedQuestions[currentQuestion].correct;
    if (selectedIndex === correctIndex) score++;

    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) showQuestion();
    else showResults();
}

// Show Results
function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');

    scoreValue.textContent = score;
    totalQuestions.textContent = selectedQuestions.length;

    const circumference = 2 * Math.PI * 70;
    const offset = circumference - (score / selectedQuestions.length) * circumference;

    // Color + confetti + background
    if (score === selectedQuestions.length) {
        progressCircle.style.stroke = 'green';
        resultsScreen.style.background = 'linear-gradient(135deg, #a8ff78, #78ffd6)';
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    } else if (score / selectedQuestions.length >= 0.6) {
        progressCircle.style.stroke = 'orange';
        resultsScreen.style.background = 'linear-gradient(135deg, #fef08a, #fcd34d)';
    } else {
        progressCircle.style.stroke = 'red';
        resultsScreen.style.background = 'linear-gradient(135deg, #fca5a5, #f87171)';
    }

    setTimeout(() => progressCircle.style.strokeDashoffset = offset, 100);

    // Result message
    let message = "";
    if (score === selectedQuestions.length) message = "🎉 Congratulations! Perfect score!";
    else if (score / selectedQuestions.length >= 0.6) message = "👍 Good job!";
    else message = "Keep practicing!";

    document.getElementById('result-message').textContent = message;
}

// Restart Quiz
restartBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;

    resultsScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');

    // Reset progress circle
    progressCircle.style.strokeDashoffset = 439.82;
    resultsScreen.style.background = "white";
});
