

document.addEventListener('DOMContentLoaded', () => {
    const monumentSelect = document.getElementById('monument-select');
    const startButton = document.getElementById('start-puzzle');
    const puzzleBoard = document.getElementById('puzzle-board');
    const puzzleMessage = document.getElementById('puzzle-message');
    const puzzleResetButton = document.getElementById('puzzle-reset');

    let tiles = [];
    const gridSize = 4; 
    const tileSize = 80; 

    const monumentFacts = {
        pyramids: "The Great Pyramid of Giza was the tallest man-made structure in the world for over 3,800 years.",
        ziggurat: "Ziggurats were massive terraced pyramids built in ancient Mesopotamia, primarily as temples to the gods.",
        parthenon: "The Parthenon in Athens, Greece, was built to honor the goddess Athena, patroness of the city."
    };

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        console.log(`i: ${i}, j: ${j}`); 
        [array[i], array[j]] = [array[j], array[i]];
    }
}

    function setupPuzzle(monument) {
        tiles = [];
        for (let i = 0; i < gridSize * gridSize; i++) {
            tiles.push(i);
        }
        shuffleArray(tiles); 
        const imageSrc = `images/${monument}.jpg`;
        createPuzzleVisuals(imageSrc); 
        puzzleResetButton.style.display = 'block'; 
    }

    function createPuzzleVisuals(imageSrc) {
        if (!puzzleBoard) return;
        puzzleBoard.innerHTML = '';
        puzzleMessage.textContent = '';
        puzzleMessage.classList.remove('show', 'correct', 'incorrect'); 
        puzzleBoard.classList.remove('solved'); 

        
        puzzleBoard.style.gridTemplateColumns = `repeat(${gridSize}, ${tileSize}px)`;
        puzzleBoard.style.width = `${gridSize * tileSize}px`; 
        puzzleBoard.style.height = `${gridSize * tileSize}px`; 

        tiles.forEach((originalIndex, currentIndex) => {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.style.backgroundImage = `url(${imageSrc})`;
            tile.style.backgroundSize = `${gridSize * tileSize}px ${gridSize * tileSize}px`;
            
            tile.style.backgroundPosition = `-${(originalIndex % gridSize) * tileSize}px -${Math.floor(originalIndex / gridSize) * tileSize}px`;
            tile.dataset.currentIndex = currentIndex; 
            tile.dataset.originalIndex = originalIndex; 
            tile.onclick = () => selectTile(currentIndex);
            puzzleBoard.appendChild(tile);
        });
    }

    let selectedTileIndex = null; 

    function selectTile(index) {
        const tilesElements = document.querySelectorAll('#puzzle-board .tile');
        
        
        if (selectedTileIndex !== null && tilesElements[selectedTileIndex]) {
            tilesElements[selectedTileIndex].classList.remove('selected');
        }

        if (selectedTileIndex === null) {
            
            selectedTileIndex = index;
            if (tilesElements[index]) {
                tilesElements[index].classList.add('selected');
            }
        } else {
            
            swapTiles(selectedTileIndex, index);
            selectedTileIndex = null; 
            checkPuzzle();
        }
    }

    function swapTiles(i, j) {
        
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
        
        
        const monument = monumentSelect.value;
        const imageSrc = `images/${monument}.jpg`;
        createPuzzleVisuals(imageSrc);
    }

    function checkPuzzle() {
        
        const isSolved = tiles.every((val, idx) => val === idx);
        
        if (isSolved) {
            document.getElementById('correctSound').play();
            const monument = monumentSelect.value;
            const fact = monumentFacts[monument] || "No fun fact available for this monument.";
            puzzleMessage.textContent = `🎉 You rebuilt the monument! Fun fact: ${fact}`;
            puzzleMessage.classList.add('show', 'correct');
            puzzleBoard.classList.add('solved'); 
            
            document.querySelectorAll('#puzzle-board .tile').forEach(tile => {
                tile.onclick = null;
            });
        } else {
            puzzleMessage.classList.remove('correct'); 
            puzzleBoard.classList.remove('solved');
        }
    }

    function resetPuzzle() {
        if (!monumentSelect) return;
        const monument = monumentSelect.value;
        setupPuzzle(monument); 
        puzzleMessage.classList.remove('show', 'correct', 'incorrect'); 
        puzzleMessage.textContent = '';
        puzzleBoard.classList.remove('solved');
        selectedTileIndex = null; 
    }

    if (startButton) {
        startButton.addEventListener('click', () => {
            if (monumentSelect.value) {
                setupPuzzle(monumentSelect.value);
            } else {
                puzzleMessage.textContent = "Please select a monument to start!";
                puzzleMessage.classList.add('show', 'incorrect'); 
            }
        });
    }

    if (puzzleResetButton) {
        puzzleResetButton.addEventListener('click', resetPuzzle);
    }

    
    
    if (puzzleBoard && monumentSelect) {
        
        puzzleResetButton.style.display = 'none';
        
        
    }
});