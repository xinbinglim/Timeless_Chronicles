

document.addEventListener('DOMContentLoaded', () => {
    const paintings = window.memoryGameCards

    let cardArray = [];
    let flippedCards = [];
    let matchesFound = 0;
    let pairTimer = 0;
    let pairTimerInterval;
    let clickBlocked = false; 

    const gameBoard = document.getElementById('gameBoard');
    const matchCountDisplay = document.getElementById('matchCount');
    const funFactDisplay = document.getElementById('funFact');
    const restartGameBtn = document.getElementById('restartMemoryGame');
    const startMemoryGameBtn = document.getElementById('startMemoryGame');
    const timerElement = document.getElementById('pairtimer');

    function setupMemoryGame() {
        if (!gameBoard || !matchCountDisplay || !funFactDisplay || !restartGameBtn || !startMemoryGameBtn || !timerElement) {
            console.warn("Memory Game elements not found. Skipping setup.");
            return;
        }
        
        
        cardArray = window.shuffleArray([...paintings, ...paintings]);
        
        gameBoard.innerHTML = ''; 
        gameBoard.style.display = 'grid'; 
        funFactDisplay.textContent = ''; 

        matchesFound = 0;
        matchCountDisplay.innerText = `Pairs found: 0`;

        cardArray.forEach((cardData, index) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.dataset.name = cardData.name;
            cardElement.dataset.index = index; 

            const cardInner = document.createElement('div');
            cardInner.classList.add('card-inner'); 

            const cardFront = document.createElement('div');
            cardFront.classList.add('card-face', 'card-front');

            const cardBack = document.createElement('div');
            cardBack.classList.add('card-face', 'card-back');
            const imgElement = document.createElement('img');
            imgElement.src = cardData.img;
            imgElement.alt = cardData.name;
            cardBack.appendChild(imgElement);

            cardInner.appendChild(cardFront);
            cardInner.appendChild(cardBack);
            cardElement.appendChild(cardInner);

            cardElement.addEventListener('click', flipCard);
            gameBoard.appendChild(cardElement);
        });

        
        pairTimer = 0;
        clearInterval(pairTimerInterval); 
        timerElement.innerText = `Time: 0s`;
        pairTimerInterval = setInterval(() => {
            pairTimer++;
            timerElement.innerText = `Time: ${pairTimer}s`;
        }, 1000);

        restartGameBtn.style.display = 'none'; 
    }

    function flipCard(event) {
        if (clickBlocked) return; 

        const clickedCard = event.currentTarget;
        
        if (clickedCard.classList.contains('flipped') || clickedCard.classList.contains('matched')) {
            return;
        }

        clickedCard.classList.add('flipped');
        flippedCards.push(clickedCard);

        if (flippedCards.length === 2) {
            clickBlocked = true; 
            setTimeout(checkMatch, 800); 
        }
    }

    function checkMatch() {
        const [card1, card2] = flippedCards;

        if (card1.dataset.name === card2.dataset.name) {
            
            document.getElementById('correctSound').play();
            card1.classList.add('matched');
            card2.classList.add('matched');
            
            card1.removeEventListener('click', flipCard);
            card2.removeEventListener('click', flipCard);

            matchesFound++;
            matchCountDisplay.innerText = `Pairs found: ${matchesFound}`;
            
            const painting = paintings.find(p => p.name === card1.dataset.name);
            if (painting) {
                funFactDisplay.innerText = `Fun Fact: ${painting.fact}`;
            }

            if (matchesFound === paintings.length) { 
                clearInterval(pairTimerInterval); 
                setTimeout(() => {
                    alert(`🎉 You found all pairs in ${pairTimer} seconds! Great job learning about Renaissance art!`);
                    restartGameBtn.style.display = 'inline-block';
                    startMemoryGameBtn.style.display = 'none'; 
                    gameBoard.style.display = 'none'; 
                    funFactDisplay.textContent = "Game Over! Click 'Restart Game' to play again.";
                }, 500);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
            }, 800); 
        }
        flippedCards = []; 
        clickBlocked = false; 
    }

    
    if (startMemoryGameBtn) {
        startMemoryGameBtn.addEventListener('click', () => {
            startMemoryGameBtn.style.display = 'none';
            gameBoard.style.display = 'grid'; 
            setupMemoryGame();
        });
    }

    if (restartGameBtn) {
        restartGameBtn.addEventListener('click', () => {
            restartGameBtn.style.display = 'none';
            startMemoryGameBtn.style.display = 'none'; 
            gameBoard.style.display = 'grid'; 
            setupMemoryGame();
        });
    }

    
    if (gameBoard) {
        gameBoard.style.display = 'none';
        matchCountDisplay.textContent = "Pairs found: 0";
        timerElement.textContent = "Time: 0s";
        funFactDisplay.textContent = "Click 'Start Memory Game' to begin!";
        restartGameBtn.style.display = 'none';
        startMemoryGameBtn.style.display = 'inline-block';
    }
});