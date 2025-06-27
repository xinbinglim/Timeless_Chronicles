

document.addEventListener('DOMContentLoaded', () => {
    const ceQuestions = [
        {
            event: "Mass adoption of smartphones (2007–)",
            cause: "Advancements in mobile internet and touchscreen tech",
            effect: "Increased global connectivity and app economy",
            explanation: "The iPhone revolutionized mobile computing, enabling instant access to tools, services, and information."
        },
        {
            event: "Climate change protests (e.g., Fridays for Future)",
            cause: "Growing awareness of global warming and IPCC reports",
            effect: "More environmental legislation and youth activism",
            explanation: "Climate education and scientific consensus empowered youth-led movements to demand change (SDG 13)."
        },
        {
            event: "Rise of remote work culture (2020–)",
            cause: "COVID-19 pandemic and lockdowns",
            effect: "Shift in work-life balance and digital infrastructure",
            explanation: "The pandemic forced rapid adoption of online collaboration, transforming work globally."
        },
        {
            event: "Increased plastic pollution in oceans",
            cause: "Overreliance on single-use plastics",
            effect: "Threats to marine life and global bans on straws/bags",
            explanation: "Awareness campaigns and scientific data highlighted plastic’s long-term ecological damage (SDG 14)."
        },
        {
            event: "Black Lives Matter global protests (2020)",
            cause: "Police brutality and systemic racism in the U.S.",
            effect: "Policy reviews, global discussions on inequality",
            explanation: "BLM became a global symbol of racial justice and equality (SDG 10)."
        },
        {
            event: "Launch of reusable rockets (e.g., SpaceX Falcon 9)",
            cause: "Private investment in space and cost reduction goals",
            effect: "Lower costs of space missions and increased access",
            explanation: "Reusable launch tech disrupted traditional space economics."
        },
        {
            event: "Explosion of AI tools (ChatGPT, DALL·E)",
            cause: "Advances in machine learning and computing power",
            effect: "Transformation of work, creativity, and ethics debates",
            explanation: "Generative AI raised productivity while sparking new challenges."
        },
        {
            event: "Global push for gender equality in education",
            cause: "UN efforts, activism, and data on gender disparity",
            effect: "Higher female enrollment in schools globally",
            explanation: "SDG 4 and SDG 5 have advanced gender parity through awareness and funding."
        },
        {
            event: "Rapid spread of misinformation online",
            cause: "Unregulated social media platforms",
            effect: "Increased polarization and distrust in institutions",
            explanation: "Algorithms favoring engagement helped false information go viral."
        },
        {
            event: "Rise of sustainable fashion",
            cause: "Concerns about fast fashion’s environmental impact",
            effect: "More eco-friendly brands and consumer awareness",
            explanation: "The fashion industry began adapting to demand for sustainability (SDG 12)."
        }
    ];

    let currentCeIndex = 0;
    let ceScore = 0;
    let shuffledCeQuestions = []; 

    const eventText = document.getElementById("event-text");
    const causeSelect = document.getElementById("cause-select");
    const effectSelect = document.getElementById("effect-select");
    const ceFeedback = document.getElementById("ce-feedback");
    const ceExplanation = document.getElementById("ce-explanation");
    const ceScoreDisplay = document.getElementById("ce-score");
    const submitBtn = document.getElementById("submit-btn");
    const restartQuizBtn = document.getElementById("try-again-btn");
    const finalScoreMessage = document.getElementById("final-score-message");
    const choicesContainer = document.querySelector("#cause-effect-game .choices");

    function populateSelect(selectElement, options) {
        selectElement.innerHTML = "<option value=''>-- Select --</option>"; 
        options.forEach(opt => {
            const option = document.createElement("option");
            option.textContent = opt;
            option.value = opt;
            selectElement.appendChild(option);
        });
    }

    function getWrongOptions(type, correctOption) {
        
        const allPossibleOptions = ceQuestions.map(q => q[type]);
        const wrongOptions = allPossibleOptions.filter(option => option !== correctOption);
        return window.shuffleArray(wrongOptions).slice(0, 4); 
    }

    function loadCEQuestion() {
        if (!eventText || !causeSelect || !effectSelect || !ceScoreDisplay || !submitBtn || !restartQuizBtn || !choicesContainer) {
            console.error("Cause & Effect Quiz elements not found.");
            return;
        }

        const q = shuffledCeQuestions[currentCeIndex]; 

        eventText.textContent = q.event;

        const causes = window.shuffleArray([q.cause, ...getWrongOptions('cause', q.cause)]);
        const effects = window.shuffleArray([q.effect, ...getWrongOptions('effect', q.effect)]);

        populateSelect(causeSelect, causes);
        populateSelect(effectSelect, effects);

        ceFeedback.textContent = "";
        ceFeedback.classList.remove('correct', 'incorrect', 'show'); 
        ceExplanation.textContent = "";
        ceScoreDisplay.textContent = `Score: ${ceScore}`;
        submitBtn.style.display = "inline-block";
        choicesContainer.style.display = "flex"; 
        finalScoreMessage.textContent = "";
        restartQuizBtn.style.display = "none";

        
        causeSelect.value = '';
        effectSelect.value = '';
    }

    function submitAnswers() {
        const selectedCause = causeSelect.value;
        const selectedEffect = effectSelect.value;
        const current = shuffledCeQuestions[currentCeIndex];

        let isCorrect = true;
        let feedbackMessages = [];

        if (selectedCause === '' || selectedEffect === '') {
            ceFeedback.textContent = "Please select both a cause and an effect.";
            ceFeedback.classList.add('show', 'incorrect');
            return; 
        }

        if (selectedCause !== current.cause) {
            feedbackMessages.push("❌ Incorrect cause.");
            isCorrect = false;
        } else {
            feedbackMessages.push("✅ Correct cause.");
        }

        if (selectedEffect !== current.effect) {
            feedbackMessages.push("❌ Incorrect effect.");
            isCorrect = false;
        } else {
            feedbackMessages.push("✅ Correct effect.");
        }

        ceFeedback.textContent = feedbackMessages.join(" ");
        ceFeedback.classList.add('show', isCorrect ? 'correct' : 'incorrect');
        ceExplanation.textContent = "💡 Explanation: " + current.explanation;

        if (isCorrect) {
            ceScore++;
            document.getElementById('correctSound').play();
        }
        
        ceScoreDisplay.textContent = `Score: ${ceScore}`;

        submitBtn.style.display = "none";

        setTimeout(() => {
            currentCeIndex++;
            if (currentCeIndex < shuffledCeQuestions.length) {
                loadCEQuestion();
            } else {
                
                eventText.textContent = "🎉 Congratulations! You’ve successfully uncovered every event—mastering their causes and effects.";
                choicesContainer.style.display = "none";
                ceFeedback.textContent = "";
                ceExplanation.textContent = "";
                ceScoreDisplay.textContent = "";
                finalScoreMessage.textContent = `You got ${ceScore} out of ${shuffledCeQuestions.length} correct!`;
                finalScoreMessage.classList.add('show');
                restartQuizBtn.style.display = "inline-block";
            }
        }, 2000); 
    }

    function restartQuiz() {
        currentCeIndex = 0;
        ceScore = 0;
        
        shuffledCeQuestions = window.shuffleArray([...ceQuestions]); 
        loadCEQuestion();
    }

    
    if (submitBtn) {
        submitBtn.addEventListener('click', submitAnswers);
    }
    if (restartQuizBtn) {
        restartQuizBtn.addEventListener('click', restartQuiz);
    }

    
    window.reloadCEQuestionAndStyling = function() {
        
        if (currentCeIndex < shuffledCeQuestions.length) {
            loadCEQuestion();
        }
        
        if (finalScoreMessage && finalScoreMessage.textContent) {
            finalScoreMessage.style.color = document.body.classList.contains('dark-theme') ? 'var(--light-text-color)' : 'var(--dark-text-color)';
        }
        
        if (ceFeedback && ceFeedback.textContent) {
            ceFeedback.style.color = document.body.classList.contains('dark-theme') ? 'var(--light-text-color)' : 'var(--dark-text-color)';
        }
        if (ceExplanation && ceExplanation.textContent) {
            ceExplanation.style.color = document.body.classList.contains('dark-theme') ? 'var(--light-text-color)' : 'var(--dark-text-color)';
        }
        
        
    };


    
    if (document.getElementById("cause-effect-game")) {
        restartQuiz(); 
    } else {
        console.warn("Cause & Effect Quiz section not found.");
    }
});