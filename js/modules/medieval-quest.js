

document.addEventListener('DOMContentLoaded', () => {
    const questDisplay = document.getElementById('quest-display');
    const questOptionsContainer = document.getElementById('quest-options');
    const questStartButton = document.getElementById('quest-start');

    const questSteps = window.medievalQuestData

    function showQuestStep(step) {
        if (!questDisplay || !questOptionsContainer) {
            console.warn("Medieval Quest elements not found.");
            return;
        }

        const stepData = questSteps[step];
        if (!stepData) {
            console.error(`Quest step "${step}" not found.`);
            return;
        }

        questDisplay.textContent = stepData.text;
        questOptionsContainer.innerHTML = ''; 

        if (stepData.options && stepData.options.length > 0) {
            stepData.options.forEach(option => {
                const btn = document.createElement('button');
                btn.classList.add('cta-button'); 
                btn.textContent = option.text;
                btn.onclick = () => showQuestStep(option.next);
                questOptionsContainer.appendChild(btn);
            });
            questStartButton.style.display = 'none'; 
        } else {
            
            const restartBtn = document.createElement('button');
            restartBtn.classList.add('cta-button', 'mt-20'); 
            restartBtn.textContent = "🛡 Play Again";
            restartBtn.onclick = () => showQuestStep("start"); 
            questOptionsContainer.appendChild(restartBtn);
            questStartButton.style.display = 'none'; 
        }
    }

    
    if (questStartButton) {
        questStartButton.addEventListener('click', () => {
            showQuestStep("start");
        });
        
        questDisplay.textContent = questSteps.start.text; 
        questOptionsContainer.innerHTML = ''; 
        questStartButton.style.display = 'block'; 
    } else {
        console.warn("Medieval Quest start button not found.");
    }
});