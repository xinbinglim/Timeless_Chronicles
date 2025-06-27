document.addEventListener('DOMContentLoaded', () => {
    const artQuestions = window.artQuestions;
    const artFacts = window.artFacts;

    let currentQuestionIndex = 0; 
    let score = 0;
    let timer;
    let timeLeft = 15;

    
    const quizCard = document.querySelector('.quiz-card.card-item'); 
    const quizStartScreen = document.getElementById('quiz-start-screen');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const quizMainContent = document.getElementById('quiz-main-content');

    const quizQuestion = document.getElementById('art-quiz-question');
    const quizOptions = document.getElementById('quiz-options');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizExplanation = document.getElementById('quiz-result'); 
    const nextBtn = document.getElementById('next-btn');
    const quizProgress = document.getElementById('quiz-progress');
    const scoreDisplay = document.getElementById('score-display');
    const timeLeftDisplay = document.getElementById('time-left-display'); 

    const quizResultsScreen = document.getElementById('quiz-results-screen'); 
    let quizResultsTitle;  
    let quizFinalScore;  
    let quizSummaryMessage;  
    let restartQuizBtn;  
    let backToArtBtn; 


    const artFactButton = document.getElementById('art-fact');

    
    function updateQuizTextColors() {
        const textColor = document.body.classList.contains('dark-theme') ? 'var(--text-color)' : 'var(--text-color)';
        const primaryColor = document.body.classList.contains('dark-theme') ? 'var(--primary-color)' : 'var(--primary-color)';
        const accentColor = document.body.classList.contains('dark-theme') ? 'var(--accent-color)' : 'var(--accent-color)';

        if (quizQuestion) quizQuestion.style.color = textColor;
        if (scoreDisplay) scoreDisplay.style.color = textColor;
        if (quizFeedback) quizFeedback.style.color = primaryColor; 
        if (quizExplanation) quizExplanation.style.color = textColor;
        if (timeLeftDisplay) timeLeftDisplay.style.color = textColor;

        if (quizResultsScreen && quizResultsScreen.style.display === 'block') {
            if (quizResultsTitle) quizResultsTitle.style.color = primaryColor;
            if (quizFinalScore) quizFinalScore.style.color = textColor;
            if (quizSummaryMessage) quizSummaryMessage.style.color = textColor;
        }
    }

    
    function startTimer() {
        timeLeft = 15;
        if (timeLeftDisplay) {
            timeLeftDisplay.textContent = `Time left: ${timeLeft}s`;
        }
        clearInterval(timer); 
        timer = setInterval(() => {
            timeLeft--;
            if (timeLeftDisplay) {
                timeLeftDisplay.textContent = `Time left: ${timeLeft}s`;
            }
            if (timeLeft <= 0) {
                clearInterval(timer);
                selectAnswer(-1);
            }
        }, 1000);
    }

    
    function loadQuestion() {
        if (quizStartScreen) quizStartScreen.style.display = 'none';
        if (quizResultsScreen) quizResultsScreen.style.display = 'none';
        if (quizMainContent) quizMainContent.style.display = 'block';

        if (currentQuestionIndex >= artQuestions.length) {
            displayFinalQuizResult(); 
            return;
        }

        const question = artQuestions[currentQuestionIndex];
        quizQuestion.textContent = question.question;
        quizOptions.innerHTML = ''; 
        quizFeedback.innerHTML = ''; 
        quizExplanation.innerHTML = '';
        nextBtn.style.display = 'none';

        
        question.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.classList.add('quiz-option-btn'); 
            btn.onclick = () => selectAnswer(idx);
            quizOptions.appendChild(btn);
        });

        
        quizProgress.value = currentQuestionIndex + 1;
        quizProgress.max = artQuestions.length;
        scoreDisplay.textContent = `Score: ${score}`;
        updateQuizTextColors(); 
        startTimer(); 
    }

    
    function selectAnswer(index) {
        clearInterval(timer); 
        const question = artQuestions[currentQuestionIndex];
        const options = quizOptions.querySelectorAll('.quiz-option-btn');

        options.forEach(b => b.disabled = true);

        if (index === -1) { 
            quizFeedback.innerHTML = `⏰ Time's up!`;
            quizExplanation.innerHTML = `The correct answer was <strong>${question.options[question.correctAnswer]}</strong>.<br>🧠 ${question.explanation}`;
            
            if (options[question.correctAnswer]) {
                options[question.correctAnswer].classList.add('correct-answer');
            }
        } else { 
            if (index === question.correctAnswer) {
                options[index].classList.add('correct-answer'); 
                quizFeedback.innerHTML = `✅ Correct!`;
                quizExplanation.innerHTML = `🧠 ${question.explanation}`;
                score++; 
                const correctAudio = document.getElementById('correctSound');
                if (correctAudio) correctAudio.play();
            } else {
                options[index].classList.add('wrong-answer'); 
                options[question.correctAnswer].classList.add('correct-answer'); 
                quizFeedback.innerHTML = `❌ Wrong!`;
                quizExplanation.innerHTML = `Correct answer is <strong>${question.options[question.correctAnswer]}</strong>.<br>🧠 ${question.explanation}`;
            }
        }

        scoreDisplay.textContent = `Score: ${score}`;
        updateQuizTextColors(); 
        nextBtn.style.display = 'inline-block'; 
    }

    
    function displayFinalQuizResult() {
        clearInterval(timer); 
        if (quizMainContent) quizMainContent.style.display = 'none'; 
        if (quizResultsScreen) quizResultsScreen.style.display = 'block'; 

        
        quizResultsTitle = quizResultsScreen.querySelector('.quiz-results-title');
        quizFinalScore = quizResultsScreen.querySelector('.quiz-final-score');
        quizSummaryMessage = quizResultsScreen.querySelector('.quiz-summary-message');
        restartQuizBtn = document.getElementById('restart-quiz-btn');
        backToArtBtn = document.getElementById('back-to-art-btn');

        if (quizResultsTitle) quizResultsTitle.textContent = `Quiz Completed!`;
        if (quizFinalScore) quizFinalScore.innerHTML = `You scored <span class="highlight-score">${score}</span> out of ${artQuestions.length}.`;

        const finalScorePercentage = (score / artQuestions.length) * 100;
        let resultSummary = '';
        if (finalScorePercentage === 100) {
            resultSummary = "🥳 Absolutely brilliant! You're an art history master!";
        } else if (finalScorePercentage >= 80) {
            resultSummary = "👍 Great job! You have a strong grasp of art history.";
        } else if (finalScorePercentage >= 60) {
            resultSummary = "👏 Good effort! Keep learning, you're on your way!";
        } else {
            resultSummary = "✍️ Don't worry, every artist starts somewhere. Keep practicing!";
        }
        if (quizSummaryMessage) quizSummaryMessage.textContent = resultSummary;

        
        if (restartQuizBtn) {
            restartQuizBtn.addEventListener('click', () => {
                currentQuestionIndex = 0;
                score = 0;
                loadQuestion(); 
            });
        }
        if (backToArtBtn) {
            backToArtBtn.addEventListener('click', () => {
                
                if (quizResultsScreen) quizResultsScreen.style.display = 'none';
                if (quizStartScreen) quizStartScreen.style.display = 'block';
                
                currentQuestionIndex = 0;
                score = 0;
            });
        }

        updateQuizTextColors(); 
    }

    let currentFactIndex = 0;

    
    function showArtFact() {
        
        if (!artFacts || artFacts.length === 0) {
            console.warn("Art facts data not available or empty.");
            if (artFactButton) {
                artFactButton.querySelector('.fact-header').innerHTML = `<span class="emoji">⚠️</span> No facts available`;
                artFactButton.querySelector('.fact-body').textContent = 'Please check artFacts data source.';
                artFactButton.querySelector('.fact-detail').textContent = '';
            }
            return;
        }

        const selected = artFacts[currentFactIndex];

        
        const factHeader = artFactButton.querySelector('.fact-header');
        const factBody = artFactButton.querySelector('.fact-body');
        const factDetail = artFactButton.querySelector('.fact-detail');

        
        if (factHeader) factHeader.innerHTML = `${selected.emoji ? selected.emoji + ' ' : ''}Random Art Fact`; 
        if (factBody) factBody.textContent = selected.fact;
        if (factDetail) factDetail.textContent = selected.detail; 

        
        if (artFactButton) {
            artFactButton.style.transition = 'none'; 
            artFactButton.style.opacity = 0;
            artFactButton.style.transform = "scale(0.9)";

            setTimeout(() => {
                artFactButton.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out"; 
                artFactButton.style.opacity = 1;
                artFactButton.style.transform = "scale(1)";
            }, 50);
        }

        currentFactIndex = (currentFactIndex + 1) % artFacts.length;
    }

    

    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', loadQuestion);
    } else {
        console.error("Start Quiz Button (#start-quiz-btn) not found.");
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            loadQuestion();
        });
    } else {
        console.error("Next Button (#next-btn) not found.");
    }

    if (artFactButton) {
        artFactButton.addEventListener('click', showArtFact);
        showArtFact();
    } else {
        console.error("Art Fact Button (#art-fact) not found.");
    }

    if (quizMainContent) quizMainContent.style.display = 'none';
    if (quizResultsScreen) quizResultsScreen.style.display = 'none';
    if (quizStartScreen) quizStartScreen.style.display = 'block'; 

    updateQuizTextColors();
});