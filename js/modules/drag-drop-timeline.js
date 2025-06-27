

document.addEventListener('DOMContentLoaded', () => {
    const allEvents = [
        { name: "Industrial Revolution", order: 1, img: "images/industrial.jpg", fact: "The Industrial Revolution marked a shift to mass production and new technologies like the steam engine." },
        { name: "World War I", order: 2, img: "images/ww1.jpg", fact: "World War I, 'The Great War,' reshaped global politics and led to immense casualties." },
        { name: "World War II", order: 3, img: "images/ww2.jpg", fact: "World War II involved more than 30 countries and resulted in the deadliest conflict in human history." },
        { name: "Cold War Begins", order: 4, img: "images/coldwar.jpg", fact: "The Cold War was a geopolitical tension between the United States and the Soviet Union, lasting from the mid-1940s until the early 1990s." },
        { name: "Civil Rights Movement Peak", order: 5, img: "images/civilrights.jpg", fact: "The Civil Rights Movement in the US fought for racial equality and justice, leading to landmark legislation." },
        { name: "Moon Landing", order: 6, img: "images/moon.jpg", fact: "In 1969, Neil Armstrong became the first human to walk on the Moon, a pivotal moment in space exploration." },
        { name: "Fall of Berlin Wall", order: 7, img: "images/berlinwall.jpg", fact: "The Berlin Wall fell in 1989, symbolizing the end of the Cold War and the reunification of Germany." },
        { name: "Invention of the World Wide Web", order: 8, img: "images/internet.jpg", fact: "Tim Berners-Lee invented the World Wide Web in 1989, fundamentally changing information access." },
        { name: "Rise of Globalization", order: 9, img: "images/globalization.jpg", fact: "Globalization accelerated in the late 20th century, driven by advancements in trade, technology, and communication." }
    ].sort((a, b) => a.order - b.order); 

    let timelineTimer = 0;
    let timelineTimerInterval = null;
    let currentEvents = []; 

    const startTimelineGameBtn = document.getElementById('startTimelineGame');
    const levelSelect = document.getElementById('levelSelect');
    const timerDisplay = document.getElementById('Timelinetimer');
    const eventCardsContainer = document.getElementById('eventCards');
    const timelineSlotsContainer = document.getElementById('timelineSlots');
    const timelineResultDisplay = document.getElementById('timelineResult');
    const submitTimelineBtn = document.getElementById('submitTimeline');
    const resetTimelineBtn = document.getElementById('resetTimeline');

    function startTimelineGame() {
        clearInterval(timelineTimerInterval);
        timelineTimer = 0;
        if (timerDisplay) timerDisplay.innerText = `Time: 0s`;

        timelineTimerInterval = setInterval(() => {
            timelineTimer++;
            if (timerDisplay) timerDisplay.innerText = `Time: ${timelineTimer}s`;
        }, 1000);

        const eventCount = parseInt(levelSelect ? levelSelect.value : '6'); 

        
        
        const availableEvents = window.shuffleArray([...allEvents]); 
        currentEvents = availableEvents.slice(0, eventCount).sort((a, b) => a.order - b.order); 

        const shuffledEventsForDisplay = window.shuffleArray([...currentEvents]); 

        if (eventCardsContainer) eventCardsContainer.innerHTML = '';
        if (timelineSlotsContainer) timelineSlotsContainer.innerHTML = '';
        if (timelineResultDisplay) timelineResultDisplay.innerText = '';
        if (submitTimelineBtn) submitTimelineBtn.style.display = 'inline-block';
        if (resetTimelineBtn) resetTimelineBtn.style.display = 'inline-block';
        if (startTimelineGameBtn) startTimelineGameBtn.style.display = 'none'; 
        if (levelSelect) levelSelect.style.display = 'none'; 
        if (eventCardsContainer) eventCardsContainer.style.display = 'flex'; 
        if (timelineSlotsContainer) timelineSlotsContainer.style.display = 'flex'; 

        shuffledEventsForDisplay.forEach(event => {
            const card = document.createElement('div');
            card.classList.add('TLcard');
            card.draggable = true;
            card.dataset.name = event.name; 
            card.innerHTML = `<img src="${event.img}" alt="${event.name}"><span>${event.name}</span>`;

            card.addEventListener('dragstart', e => {
                e.dataTransfer.setData('text/plain', event.name);
                setTimeout(() => card.classList.add('dragging'), 0);
            });
            card.addEventListener('dragend', e => {
                card.classList.remove('dragging');
            });

            if (eventCardsContainer) eventCardsContainer.appendChild(card);
        });

        for (let i = 0; i < eventCount; i++) {
            const slot = document.createElement('div');
            slot.classList.add('slot');
            slot.dataset.position = i; 

            slot.addEventListener('dragover', e => e.preventDefault()); 
            slot.addEventListener('drop', e => {
                e.preventDefault();
                const name = e.dataTransfer.getData('text/plain'); 

                
                if (slot.children.length > 0) {
                    const existingCard = slot.querySelector('.TLcard');
                    if (existingCard) {
                        existingCard.classList.remove('dropped');
                        existingCard.draggable = true;
                        existingCard.style.display = 'block'; 
                        eventCardsContainer.appendChild(existingCard); 
                    }
                }

                
                const draggedCard = Array.from(document.querySelectorAll('.TLcard')).find(
                    card => card.dataset.name === name && card.classList.contains('dragging')
                );

                if (draggedCard) {
                    slot.innerHTML = ''; 
                    slot.appendChild(draggedCard); 
                    draggedCard.classList.remove('dragging');
                    draggedCard.classList.add('dropped'); 
                    draggedCard.draggable = false; 
                    slot.dataset.name = name; 
                }
            });
            if (timelineSlotsContainer) timelineSlotsContainer.appendChild(slot);
        }
    }

    function submitTimeline() {
        let correct = true;
        let funFacts = '';
        const droppedSlots = document.querySelectorAll('#timelineSlots .slot');
        
        droppedSlots.forEach((slot, idx) => {
            const droppedEventName = slot.dataset.name; 
            const expectedEvent = currentEvents[idx]; 

            
            slot.classList.remove('incorrect', 'correct');

            if (!droppedEventName || droppedEventName !== expectedEvent.name) {
                correct = false;
                slot.classList.add('incorrect');
            } else {
                slot.classList.add('correct');
                funFacts += `✅ ${expectedEvent.name}: ${expectedEvent.fact}\n`;
            }
        });

        clearInterval(timelineTimerInterval); 

        if (timelineResultDisplay) {
            if (correct) {
                timelineResultDisplay.textContent = `🎉 Correct! You completed the timeline in ${timelineTimer}s!\n\nFun Facts:\n${funFacts}`;
                document.getElementById('correctSound').play();
            } else {
                timelineResultDisplay.textContent = "❌ Some events are out of order. Please adjust and try again!";
            }
        }

        if (timelineSlotsContainer) timelineSlotsContainer.style.display = 'none'; 
    if (eventCardsContainer) eventCardsContainer.style.display = 'none'; 

    
    if (submitTimelineBtn) submitTimelineBtn.style.display = 'none';
    
    }

    function resetTimelineGame() {
        clearInterval(timelineTimerInterval);
        timelineTimer = 0;
        if (timerDisplay) timerDisplay.innerText = `Time: 0s`;
        if (timelineResultDisplay) timelineResultDisplay.innerText = '';
        if (submitTimelineBtn) submitTimelineBtn.style.display = 'none';
        if (resetTimelineBtn) resetTimelineBtn.style.display = 'none';

        if (eventCardsContainer) eventCardsContainer.innerHTML = '';
        if (timelineSlotsContainer) timelineSlotsContainer.innerHTML = '';

        if (eventCardsContainer) eventCardsContainer.style.display = 'none';
        if (timelineSlotsContainer) timelineSlotsContainer.style.display = 'none';


        
        if (startTimelineGameBtn) startTimelineGameBtn.style.display = 'inline-block';
        if (levelSelect) levelSelect.style.display = 'inline-block';

        
        document.querySelectorAll('#timelineSlots .slot').forEach(slot => {
            slot.classList.remove('correct', 'incorrect');
        });
    }

    if (startTimelineGameBtn) {
        startTimelineGameBtn.addEventListener('click', startTimelineGame);
    }
    if (submitTimelineBtn) {
        submitTimelineBtn.addEventListener('click', submitTimeline);
    }
    if (resetTimelineBtn) {
        resetTimelineBtn.addEventListener('click', resetTimelineGame);
    }

    
    if (document.getElementById('drag-drop-timeline-game')) {
        resetTimelineGame(); 
    } else {
        console.warn("Drag & Drop Timeline Game section not found.");
    }
});