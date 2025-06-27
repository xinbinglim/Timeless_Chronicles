
(function() {
    
    const historyEvents = window.historyEvents

    const historyErasArray = Object.keys(historyEvents); 

    
    function updateHistoryDisplay(eraKey) {
        const eventContent = document.getElementById('event-content');
        if (!eventContent) {
            console.warn("Element with ID 'event-content' not found for history timeline.");
            return;
        }

        const event = historyEvents[eraKey];

        if (event) {
            eventContent.innerHTML = `<h4>${event.title}</h4><p>${event.content}</p>`;
            
            eventContent.querySelectorAll('h4, p').forEach(el => {
                el.style.color = document.body.classList.contains('dark-theme') ? 'var(--light-text-color)' : 'var(--dark-text-color)';
            });
        } else {
            
            eventContent.innerHTML = `<h4>Select an era to learn more!</h4><p>Use the slider to navigate through different historical periods.</p>`;
            eventContent.querySelectorAll('h4, p').forEach(el => {
                el.style.color = document.body.classList.contains('dark-theme') ? 'var(--light-text-color)' : 'var(--dark-text-color)';
            });
        }
    }

    
    document.addEventListener('DOMContentLoaded', () => {
        const historySlider = document.getElementById('history-slider');
        const historyOutput = document.getElementById('history-output');

        if (historySlider) {
            
            historySlider.max = historyErasArray.length - 1; 

            
            historySlider.addEventListener('input', () => {
                const selectedIndex = parseInt(historySlider.value);
                const eraKey = historyErasArray[selectedIndex];
                updateHistoryDisplay(eraKey);

                
                if (historyOutput) {
                    historyOutput.textContent = `Current Era: ${historyEvents[eraKey].title.split(' ')[0]}`; 
                }
            });

            
            
            historySlider.value = 0; 
            updateHistoryDisplay(historyErasArray[0]); 
            if (historyOutput) {
                historyOutput.textContent = `Current Era: ${historyEvents[historyErasArray[0]].title.split(' ')[0]}`;
            }

        } else {
            console.warn("Element with ID 'history-slider' not found for history timeline.");
        }
    });

    
    window.updateHistoryDisplayForTheme = function() {
        const historySlider = document.getElementById('history-slider');
        if (historySlider) {
            const selectedIndex = parseInt(historySlider.value);
            const eraKey = historyErasArray[selectedIndex];
            updateHistoryDisplay(eraKey);
        }
        
        else {
            const eventContent = document.getElementById('event-content');
            if (eventContent) {
                eventContent.querySelectorAll('h4, p').forEach(el => {
                    el.style.color = document.body.classList.contains('dark-theme') ? 'var(--light-text-color)' : 'var(--dark-text-color)';
                });
            }
        }
    };
})(); 