document.addEventListener('DOMContentLoaded', function() {
setTimeout
  (() => {document.getElementById('loader').style.display = 'none';}, 500);
        
 // History Timeline

  const historySlider = document.getElementById('history-slider');
  const historyOutput = document.getElementById('history-output');

  if (historySlider && historyOutput) {
  const historyEras = [
    "Prehistory (3.3M–3000 BCE): Stone tools, fire, farming, and early villages before writing.",
    "Ancient Times (3000 BCE - 500 CE): The rise of early civilizations like Egypt, Greece, and Rome.",
    "Middle Ages (500 - 1500 CE): The era of feudalism, castles, and the rise of empires.",
    "Renaissance & Enlightenment (1500 - 1800): A rebirth of art, science, and philosophy.",
    "Modern Era (1800 - 1945): Industrial revolution to digital age.",
    "Contemporary Era (1945 – Present): Globalization, digital revolution, and shifting global powers."
  ];

function updateHistory() {
 historyOutput.textContent = historyEras[historySlider.value];
      // historyOutput.style.color = document.body.classList.contains('darkmode') ? '#f0f0f0' : '#333';
    }

    historySlider.addEventListener('input', updateHistory);
    updateHistory(); // Initialize the output
  }

//Darkmode
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

if(darkmode === null) disableDarkmode()

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

//timeline
const artTimelineButtons = document.querySelectorAll('.art-timeline button');
const artTimelineContent = document.getElementById('art-timeline-content');


  const artPeriods = {
    prehistoric: {
      title: "Prehistoric Art",
      description: "Early humans created cave paintings and simple sculptures.",
      artworks: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/9_Bisonte_Magdaleniense_pol%C3%ADcromo.jpg/1024px-9_Bisonte_Magdaleniense_pol%C3%ADcromo.jpg", alt: "Cave of Altamira" },
        { src: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/cave-lions-chauvet-cave.jpg", alt: "Chauvet Cave" }
      ]
    },
    ancient: {
      title: "Ancient Art",
      description: "Civilizations like Egypt, Greece, and Rome produced monumental sculptures and architecture.",
      artworks: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg/1024px-Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg", alt: "Pyramid of Giza" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/800px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg", alt: "School of Athens" }
      ]
    },
    renaissance: {
      title: "Renaissance Art",
      description: "A rebirth of classical art, with masters like Leonardo da Vinci and Michelangelo.",
      artworks: [
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/400px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg", alt: "Mona Lisa" },
        { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/%27David%27_by_Michelangelo_Fir_JBU004.jpg/800px-%27David%27_by_Michelangelo_Fir_JBU004.jpg", alt: "David (Michelangelo)" }
      ]
    },
   baroque: {
      title: "Baroque Art",
      description: "Characterized by drama, emotion, and grandeur.",
      artworks: [
          { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ecstasy_of_Saint_Teresa_September_2015-2a.jpg/800px-Ecstasy_of_Saint_Teresa_September_2015-2a.jpg", alt: "The Ecstasy of Saint Teresa" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/800px-The_Night_Watch_-_HD.jpg", alt: "The Night Watch" }
      ]
    },
    impressionism: {
      title: "Impressionism",
      description: "Focused on capturing fleeting moments and the effect of light.",
      artworks: [
          { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/330px-Monet_-_Impression%2C_Sunrise.jpg", alt: "Impression, Sunrise" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Edgar_Degas_-_La_Classe_de_danse.jpg/250px-Edgar_Degas_-_La_Classe_de_danse.jpg", alt: "The Dance Class" }
      ]
    },
    modern: {
      title: "Modern Art",
      description: "A wide range of styles, including Cubism, Surrealism, and Abstract Expressionism.",
      artworks: [
          { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/250px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg", alt: "The Scream" },
          { src: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/330px-Les_Demoiselles_d%27Avignon.jpg", alt: "Les Demoiselles d'Avignon" }
      ]
    },
    "ai-generated": {
      title: "AI-Generated Art",
      description: "Visual artwork created or enhanced through the use of artificial intelligence (AI) programs.",
      artworks: [
          { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Th%C3%A9%C3%A2tre_D%E2%80%99op%C3%A9ra_Spatial.png/1024px-Th%C3%A9%E2%80%99op%C3%A9ra_Spatial.png", alt: "Théâtre D'opéra Spatial" },
          { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Edmond_de_Belamy.png/800px-Edmond_de_Belamy.png", alt: "Edmond de Belamy" }
      ]
    }

   };

   function showArtPeriod(era) {
    const period = artPeriods[era];
    if (period) {
      let content = `<h3>${period.title}</h3><p>${period.description}</p>`;
      if (period.artworks && period.artworks.length > 0) {
        content += '<div class="art-grid">';
        period.artworks.forEach(artwork => {
          content += `
            <div class="art-item">
            <a href="https://en.wikipedia.org/wiki/${encodeURIComponent(artwork.alt)}" target="_blank" rel="noopener noreferrer">
              <img src="${artwork.src}" alt="${artwork.alt}">
            </a>
              <p>${artwork.alt}</p>
            </div>
          `;
        });
        content += '</div>';
        content += '<p class="art-tip">📚  Tip: Click on any artwork image to explore more on Wikipedia!</p>';  
      }
      artTimelineContent.innerHTML = content;
      
        const artGrid = artTimelineContent.querySelector('.art-grid');
        if (artGrid) {
            const imageCount = period.artworks.length;
            if (imageCount <= 2) {
                artGrid.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 columns
            } else if (imageCount <= 4) {
                artGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))'; // Wider columns for fewer images
            } else {
                 artGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))'; // Default
            }
        }
      
    } else {
      artTimelineContent.innerHTML = '<p>No information available for this period.</p>';
    }
  }

  artTimelineButtons.forEach(button => {
    button.addEventListener('click', () => {
      const era = button.getAttribute('data-era');
      showArtPeriod(era);
      // Optionally, highlight the active button
      artTimelineButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
  document.getElementById('retry-btn').addEventListener('click', function () {
  currentQuestion = 0;
  score = 0;
  scoreDisplay.textContent = 'Score: 0';
  this.style.display = 'none'; // hide the retry button
  loadQuestion();
});


  // Show the first period on load or a default message
  showArtPeriod('prehistoric');

document.getElementById('art-fact-btn').addEventListener('click', showArtInfo);

// Art Facts (keep as is)
const artFacts = [
    {
    fact: "The Mona Lisa has no eyebrows!",
    detail: "Shaving eyebrows was fashionable during the Renaissance.",
    emoji: "🖼️",
    category: "Renaissance"
  },
  {
    fact: "Van Gogh only sold one painting in his lifetime.",
    detail: "Now his works sell for millions.",
    emoji: "🌻",
    category: "Modern"
  },
  {
    fact: "Paint was once made from ground-up mummies.",
    detail: "It was called 'Mummy Brown' and used in the 16th–17th centuries.",
    emoji: "🧟",
    category: "Ancient"
  },
  {
    fact: "AI is now creating art.",
    detail: "Tools like DALL·E and MidJourney turn text into visuals.",
    emoji: "🤖",
    category: "AI Era"
  },
  {
    fact: "Cave art may be prehistoric animation.",
    detail: "Some paintings show multiple limbs to suggest movement.",
    emoji: "🦣",
    category: "Prehistoric"
  },
  {
    fact: "Leonardo da Vinci was ambidextrous.",
    detail: "He could write with one hand while drawing with the other.",
    emoji: "✍️",
    category: "Renaissance"
  },
  {
    fact: "Banksy once shredded his artwork after it was sold.",
    detail: "It self-destructed right after fetching $1.4 million at auction.",
    emoji: "🧨",
    category: "Street Art"
  },
  {
    fact: "Some museums dim the lights for Van Gogh's works.",
    detail: "His yellow pigments are so sensitive they fade under strong light.",
    emoji: "💡",
    category: "Modern"
  },
  {
    fact: "Artists used beetle shells for paint.",
    detail: "Iridescent green pigment came from ground beetles.",
    emoji: "🐞",
    category: "Materials"
  },
  {
    fact: "Michelangelo painted himself into the Sistine Chapel.",
    detail: "As St. Bartholomew’s flayed skin — quite the self-portrait!",
    emoji: "🖌️",
    category: "Renaissance"
  },
  {
    fact: "The world’s oldest known drawing is 73,000 years old.",
    detail: "Found in Blombos Cave, South Africa.",
    emoji: "📐",
    category: "Prehistoric"
  },
  {
    fact: "Jackson Pollock used house paint.",
    detail: "He preferred it for its texture and flow in drip paintings.",
    emoji: "🎨",
    category: "Modern"
  },
  {
    fact: "Ancient Greek statues were painted.",
    detail: "They weren't white — they were originally bright and colorful.",
    emoji: "🏛️",
    category: "Ancient"
  },
  {
    fact: "Frida Kahlo created 143 paintings.",
    detail: "55 of them are self-portraits.",
    emoji: "🎭",
    category: "Modern"
  },
  {
    fact: "The Great Wave off Kanagawa isn't just art — it's math.",
    detail: "Its curves and composition reflect Fibonacci patterns.",
    emoji: "🌊",
    category: "Japanese Art"
  },
  {
    fact: "Warhol once made a painting of 100 soup cans.",
    detail: "It symbolized mass production and pop culture.",
    emoji: "🥫",
    category: "Pop Art"
  },
  {
    fact: "Street artist Invader uses mosaic tiles.",
    detail: "Inspired by 8-bit video games like Space Invaders.",
    emoji: "👾",
    category: "Street Art"
  },
  {
    fact: "Salvador Dalí’s mustache is in a museum.",
    detail: "He was buried with it perfectly intact.",
    emoji: "🌀",
    category: "Surrealism"
  },
  {
    fact: "Picasso could draw before he could walk.",
    detail: "He completed his first painting at age 9.",
    emoji: "🧒",
    category: "Modern"
  },
  {
    fact: "Some cave art is located deep underground.",
    detail: "Early humans crawled miles through tunnels to paint in the dark.",
    emoji: "🕳️",
    category: "Prehistoric"
  }
];

let currentFactIndex = 0;

function showArtInfo() {
  const factElement = document.getElementById('art-fact');
  const selected = artFacts[currentFactIndex];

  // 2. Set innerHTML (important to do this before forcing reflow if content changes)
  factElement.innerHTML = `
    <div class="fact-card">
      <div class="fact-header">${selected.emoji} <strong>${selected.category}</strong></div>
      <div class="fact-body">${selected.fact}</div>
      <div class="fact-detail">${selected.detail}</div>
    </div>
  `;

  // Cycle to next fact
  currentFactIndex++;
  if (currentFactIndex >= artFacts.length) {
    currentFactIndex = 0;
  }
}

showArtInfo();



   // Art Quiz
  const artQuestions = [
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"],
    correctAnswer: 1,
    explanation: "Leonardo da Vinci painted the Mona Lisa in the early 1500s during the Italian Renaissance. It’s one of the most recognized paintings in the world."
  },
  {
    question: "Which art movement is Salvador Dalí associated with?",
    options: ["Impressionism", "Cubism", "Surrealism", "Renaissance"],
    correctAnswer: 2,
    explanation: "Dalí was a leading figure in the Surrealist movement, which emphasized dreamlike, irrational imagery."
  },
  {
    question: "What is the main characteristic of Impressionist art?",
    options: ["Precise lines", "Emotional symbolism", "Use of abstract forms", "Capturing light and movement"],
    correctAnswer: 3,
    explanation: "Impressionist artists like Monet aimed to capture fleeting light and everyday scenes with loose, visible brushstrokes."
  },
  {
    question: "Which of these artists is known for 'The Starry Night'?",
    options: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Georges Seurat"],
    correctAnswer: 2,
    explanation: "Van Gogh painted 'The Starry Night' in 1889, depicting a swirling night sky from his asylum room in Saint-Rémy-de-Provence."
  },
  {
    question: "What was Andy Warhol known for?",
    options: ["Pop art and mass media", "Renaissance frescoes", "Cubist sculpture", "Baroque paintings"],
    correctAnswer: 0,
    explanation: "Warhol was a leader in the Pop Art movement, turning everyday consumer items like soup cans into iconic art."
  },
  {
    question: "Which technique did Georges Seurat famously use?",
    options: ["Drip painting", "Fresco", "Pointillism", "Collage"],
    correctAnswer: 2,
    explanation: "Seurat used tiny dots of color in a technique called Pointillism, especially seen in 'A Sunday Afternoon on the Island of La Grande Jatte'."
  },
  {
    question: "Where is the Louvre Museum located?",
    options: ["London", "New York", "Madrid", "Paris"],
    correctAnswer: 3,
    explanation: "The Louvre, home to the Mona Lisa, is located in Paris and is the most visited museum in the world."
  },
  {
    question: "What does 'Renaissance' mean?",
    options: ["The end",  "Rebirth", "New world", "Middle age"],
    correctAnswer: 1,
    explanation: "The term Renaissance means 'rebirth' and refers to the revival of classical art, architecture, and learning in Europe."
  },
  {
    question: "What defines Cubism?",
    options: ["Soft colors and smooth lines", "Use of organic forms", "Breaking subjects into geometric shapes", "Hyperrealistic detail"],
    correctAnswer: 2,
    explanation: "Cubism, pioneered by Picasso and Braque, breaks objects into geometric components and presents multiple viewpoints simultaneously."
  },
  {
    question: "Which artist is famous for cutting off part of his ear?",
    options: ["Michelangelo", "Vincent van Gogh", "Rembrandt", "Raphael"],
    correctAnswer: 1,
    explanation: "Van Gogh is known for cutting off part of his own ear during a mental health crisis and later painted several self-portraits with a bandaged ear."
  }
];


  let currentQuestion = 0;
  let score = 0;
  let timer;
  let timeLeft = 15; // seconds per question
  const timerDisplay = document.getElementById('time-left');

  function startTimer() {
  timeLeft = 15;
  timerDisplay.textContent = timeLeft;
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      selectAnswer(-1); // Triggers timeout logic
    }
  }, 1000);
}

  const quizQuestion = document.getElementById('art-quiz-question');
  const quizOptions = document.getElementById('quiz-options');
  const nextBtn = document.getElementById('next-btn');
  const quizResult = document.getElementById('quiz-result');
  const quizProgress = document.getElementById('quiz-progress');
  const scoreDisplay = document.getElementById('score-display');

  function loadQuestion() {
  const question = artQuestions[currentQuestion];
  quizQuestion.textContent = question.question;
  quizOptions.innerHTML = '';
  question.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(idx);
    quizOptions.appendChild(btn);
  });
  quizResult.textContent = '';
  nextBtn.style.display = 'none';
  quizProgress.value = currentQuestion + 1;
  startTimer(); // Restart timer here
}


  function selectAnswer(index) {
  clearInterval(timer); // Stop the countdown
  const question = artQuestions[currentQuestion];
  const options = quizOptions.querySelectorAll('button');

  // Disable all options
  options.forEach(b => b.disabled = true);

  quizResult.style.display = 'block'; // 👈 Add this line to make explanation visible

  if (index === -1) {
    quizResult.innerHTML = `⏰ Time's up! The correct answer was <strong>${question.options[question.correctAnswer]}</strong>.<br><span style="font-size: 0.9em;">🧠 ${question.explanation}</span>`;
    options[question.correctAnswer].style.backgroundColor = '#4CAF50';
  } else {
    if (index === question.correctAnswer) {
      options[index].style.backgroundColor = '#4CAF50';
      quizResult.innerHTML = `✅ Correct!<br><span style="font-size: 0.9em;">🧠 ${question.explanation}</span>`;
      score++;
    } else {
      options[index].style.backgroundColor = '#F44336';
      options[question.correctAnswer].style.backgroundColor = '#4CAF50';
      quizResult.innerHTML = `❌ Wrong! Correct answer is <strong>${question.options[question.correctAnswer]}</strong>.<br><span style="font-size: 0.9em;">🧠 ${question.explanation}</span>`;
    }
  }

  scoreDisplay.textContent = 'Score: ' + score;

  nextBtn.style.display = 'inline-block';
}

  nextBtn.onclick = function () {
  currentQuestion++;
  if (currentQuestion < artQuestions.length) {
    loadQuestion();
  } else {
    quizResult.innerHTML = `🏁 Quiz Complete! You scored <strong>${score}</strong> out of ${artQuestions.length}.`;
    document.getElementById('retry-btn').style.display = 'inline-block';
    nextBtn.style.display = 'none';
  }
};

  document.getElementById('start-quiz-btn').addEventListener('click', function() {
  // Hide start button
  this.style.display = 'none';

  // Show quiz UI
  document.getElementById('score-display').style.display = 'block';
  document.getElementById('quiz-progress').style.display = 'block';
  document.getElementById('art-quiz-question').style.display = 'block';
  document.getElementById('quiz-options').style.display = 'block';

  loadQuestion(); // Now start quiz
});

// === Match Tool Game ===
  function shuffleTools() {
    const container = document.querySelector('.tool-options');
    const tools = Array.from(container.children);
    for (let i = tools.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tools[i], tools[j]] = [tools[j], tools[i]];
    }
    tools.forEach(tool => container.appendChild(tool));
  }

  function setupDragAndDrop() {
    const tools = document.querySelectorAll('.tool');
    const targets = document.querySelectorAll('.target');
    const feedback = document.getElementById('tool-match-feedback');

    let draggedTool = null;
    let matches = 0;

    tools.forEach(tool => {
      tool.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', tool.getAttribute('data-match'));
        e.dataTransfer.setData('text/name', tool.textContent.trim());
        draggedTool = tool; // Set draggedTool when drag starts
        tool.classList.add('dragging');
      });

      tool.addEventListener('dragend', () => {
        draggedTool = null;
        tool.classList.remove('dragging');
      });
    });

    targets.forEach(target => {
      const originalUsage = target.getAttribute('data-usage');

      target.innerHTML = originalUsage; // reset to original state
    target.classList.remove('correct', 'incorrect');

      target.addEventListener('dragover', e => {
        e.preventDefault();
        target.style.backgroundColor = '#e0e0e0';
      });

      target.addEventListener('dragleave', () => {
        target.style.backgroundColor = '';
      });
      
        target.addEventListener('drop', e => {
        e.preventDefault();
        target.style.backgroundColor = '';

        if (!draggedTool) return; // Exit if no tool is being dragged

        const droppedToolId = e.dataTransfer.getData('text/plain');
        const droppedToolName = e.dataTransfer.getData('text/name');
        const targetToolId = target.getAttribute('data-target');

        if (droppedToolId === targetToolId) {
          target.innerHTML = `
            <div class="tool-label"><strong>${droppedToolName}</strong></div>
            <div class="tool-usage">${originalUsage}</div>
          `;
          feedback.textContent = "✅ Correct match!";
          feedback.style.color = 'green';
          target.classList.add('correct');
          draggedTool.remove();
          matches++;

          if (matches === 6) {
            feedback.textContent = "🎉 You matched all tools correctly!";
            document.getElementById('replay-button').style.display = "block"; 
          }
        } else {
          feedback.textContent = "❌ That's not right. Try again.";
          feedback.style.color = 'red';
          target.classList.add('incorrect');
          setTimeout(() => target.classList.remove('incorrect'), 1000);
        }
      });
    });
  }

  // ✳️ New function to reset the game
function resetGame() {
  const toolOptions = document.querySelector('.tool-options');
  const targets = document.querySelectorAll('.target');
  const feedback = document.getElementById('tool-match-feedback');

  // Hide replay button again
  document.getElementById('replay-button').style.display = 'none';

  // Clear feedback
  feedback.textContent = "";

  // Remove any "correct" or "incorrect" classes
  targets.forEach(target => {
    target.classList.remove('correct', 'incorrect');
    target.textContent = target.getAttribute('data-usage');
  });

   // Re-create the tools
  toolOptions.innerHTML = `
    <div class="tool" draggable="true" data-match="fire">🔥 Fire</div>
    <div class="tool" draggable="true" data-match="axe">🪓 Stone Axe</div>
    <div class="tool" draggable="true" data-match="spear">🏹 Spear</div>
    <div class="tool" draggable="true" data-match="hammer">🪨 Hammerstone</div>
    <div class="tool" draggable="true" data-match="shell">🐚 Shell</div>
    <div class="tool" draggable="true" data-match="needle">🧵 Bone Needle</div>
  `;

  // Run the game setup
  shuffleTools();
  setupDragAndDrop();
}
// 🔁 Add replay button handler
document.getElementById('replay-button').addEventListener('click', resetGame);

// Run the game setup initially
shuffleTools();
setupDragAndDrop();


const monumentSelect = document.getElementById('monument-select');
const startButton = document.getElementById('start-puzzle');
const shuffleButton = document.getElementById('shuffle-puzzle');
const puzzleContainer = document.getElementById('puzzle-container');
const puzzleMessage = document.getElementById('puzzle-message');

let tiles = [];
const gridSize = 4; // 4x4grid

startButton.addEventListener('click', () => {
    const monument = monumentSelect.value;
    setupPuzzle(monument);
});

function setupPuzzle(monument) {
    tiles = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
        tiles.push(i);
    }
    let shuffled = tiles.sort(() => Math.random() - 0.5);
    shuffleArray(tiles);
    const imageSrc = `images/${monument}.jpg`;
    createPuzzle(imageSrc);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        console.log(`i: ${i}, j: ${j}`); // Log the indices 
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createPuzzle(imageSrc) {
    puzzleContainer.innerHTML = '';
    puzzleMessage.textContent = '';
    puzzleContainer.style.gridTemplateColumns = `repeat(${gridSize}, 80px)`;

    tiles.forEach((tileIndex, idx) => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.style.backgroundImage = `url(${imageSrc})`;
        tile.style.backgroundSize = `${gridSize * 80}px ${gridSize * 80}px`;
        tile.style.backgroundPosition = `-${(tileIndex % gridSize) * 80}px -${Math.floor(tileIndex / gridSize) * 80}px`;
        tile.dataset.index = idx;
        tile.onclick = () => selectTile(idx);
        puzzleContainer.appendChild(tile);
    });
puzzleMessage.classList.remove('show');
}

let selectedTile = null;

function selectTile(index) {
    if (selectedTile === null) {
        selectedTile = index;
    } else {
        swapTiles(selectedTile, index);
        selectedTile = null;
        checkPuzzle();
    }
}

function swapTiles(i, j) {
    [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    const monument = monumentSelect.value;
    const imageSrc = `images/${monument}.jpg`;
    createPuzzle(imageSrc);
}

function checkPuzzle() {
    const isSolved = tiles.every((val, idx) => val === idx);
    if (isSolved) {
        const monument = monumentSelect.value;
        let fact = '';

        if (monument === 'pyramids') {
            fact = "The Great Pyramid was the tallest man-made structure in the world for over 3,800 years.";
        } else if (monument === 'ziggurat') {
            fact = "Ziggurats were massive terraced platforms that served as temples to the gods in Mesopotamia.";
        } else if (monument === 'parthenon') {
            fact = "The Parthenon in Athens was built to honor the goddess Athena, protector of the city.";
        }

        puzzleMessage.textContent = `🎉 You rebuilt the monument! Fun fact: ${fact}`;
        puzzleMessage.classList.add('show');
    }
  }

  const questText = document.getElementById('quest-text');
const questOptions = document.getElementById('quest-options');

const questSteps = {
    start: {
        text: "You are living in medieval Europe. Choose your path:",
        options: [
            { text: "Become a Knight", next: "knightStart" },
            { text: "Join the Crusades", next: "crusadesStart" },
            { text: "Become a Traveling Merchant", next: "merchantStart" }
        ]
    },

    // KNIGHT PATH
    knightStart: {
        text: "As a knight, you swear fealty to your lord and prepare for battle. What is your first mission?",
        options: [
            { text: "Protect the village from raiders", next: "protectVillage" },
            { text: "Enter a grand tournament", next: "tournament" }
        ]
    },
    protectVillage: {
        text: "You defend the village from bandits! 🏰 Fun fact: Knights were often called upon to protect local lands, not just fight in wars. Now, what will you do?",
        options: [
            { text: "Train new squires", next: "trainSquires" },
            { text: "Travel to court for political matters", next: "courtPolitics" }
        ]
    },
    tournament: {
        text: "You compete in jousts and melee fights, gaining fame. ⚔ Fun fact: Tournaments were both entertainment and a way to sharpen combat skills. What next?",
        options: [
            { text: "Spend winnings on better armor", next: "betterArmor" },
            { text: "Donate earnings to the church", next: "donateChurch" }
        ]
    },
    trainSquires: {
        text: "You mentor young squires, passing on chivalry and skills. 📜 Fun fact: Training took years, and squires learned weaponry, horsemanship, and etiquette.",
        options: []
    },
    courtPolitics: {
        text: "You navigate court intrigue, building alliances. 🏛 Fun fact: Many knights were involved in political plots, not just battlefield duties.",
        options: []
    },
    betterArmor: {
        text: "You upgrade to full plate armor, becoming nearly invincible. 🛡 Fun fact: By the late Middle Ages, plate armor provided top-tier protection.",
        options: []
    },
    donateChurch: {
        text: "You donate to the local monastery, ensuring prayers for your soul. ⛪ Fun fact: The medieval church wielded massive influence over society and politics.",
        options: []
    },

    // CRUSADES PATH
    crusadesStart: {
        text: "You embark on the Crusades to the Holy Land. The journey is perilous. How will you approach it?",
        options: [
            { text: "Lead a charge into battle", next: "leadCharge" },
            { text: "Negotiate with local leaders", next: "negotiate" }
        ]
    },
    leadCharge: {
        text: "You bravely lead a charge, but many are lost. ⚔ Fun fact: The Crusades saw both heroic feats and terrible losses. What do you do next?",
        options: [
            { text: "Retreat and regroup", next: "retreatRegroup" },
            { text: "Press on for victory", next: "pressOn" }
        ]
    },
    negotiate: {
        text: "You broker a temporary peace, avoiding bloodshed. 🤝 Fun fact: Despite their reputation, some Crusader leaders sought diplomacy.",
        options: [
            { text: "Establish trade routes", next: "crusadeTrade" },
            { text: "Return home as a respected envoy", next: "crusadeReturnHome" }
        ]
    },
    retreatRegroup: {
        text: "You save your men but lose ground. ⚔ Fun fact: Not all Crusades were successful — many ended in failure or retreat.",
        options: []
    },
    pressOn: {
        text: "You seize a key stronghold, but at a cost. 🏰 Fun fact: Crusader castles were key to holding territory in foreign lands.",
        options: []
    },
    crusadeTrade: {
        text: "You help set up trade between East and West, bringing new goods home. 🌍 Fun fact: The Crusades opened Europe to spices, silk, and ideas.",
        options: []
    },
    crusadeReturnHome: {
        text: "You return home as a hero, sharing tales of distant lands. 🏡 Fun fact: Crusaders brought back exotic knowledge, art, and culture.",
        options: []
    },

    // MERCHANT PATH
    merchantStart: {
        text: "As a merchant, you navigate trade routes across Europe and beyond. What goods will you focus on?",
        options: [
            { text: "Spices and exotic goods", next: "merchantSpices" },
            { text: "Textiles and fine fabrics", next: "merchantFabrics" }
        ]
    },
    merchantSpices: {
        text: "You import valuable spices, making huge profits. 🌶 Fun fact: Pepper, cloves, and cinnamon were luxury items in medieval Europe. What challenge arises?",
        options: [
            { text: "Face pirate attacks", next: "merchantPirates" },
            { text: "Deal with corrupt officials", next: "merchantOfficials" }
        ]
    },
    merchantFabrics: {
        text: "You bring silk and wool across Europe, impressing nobles. 🧵 Fun fact: Fine fabrics symbolized wealth and status. What's next?",
        options: [
            { text: "Expand into jewelry trade", next: "merchantJewelry" },
            { text: "Invest in shipbuilding", next: "merchantShips" }
        ]
    },
    merchantPirates: {
        text: "You fend off pirates and secure your cargo. 🏴‍☠️ Fun fact: Medieval maritime trade was risky, with pirates and storms common.",
        options: []
    },
    merchantOfficials: {
        text: "You bribe officials to smooth your operations. 💰 Fun fact: Corruption was rampant, and merchants often paid for protection.",
        options: []
    },
    merchantJewelry: {
        text: "You trade precious gems, winning powerful clients. 💎 Fun fact: Medieval jewelry blended local craftsmanship with imported gems.",
        options: []
    },
    merchantShips: {
        text: "You invest in bigger ships, expanding your reach. 🚢 Fun fact: Merchant fleets were vital to medieval economies and exploration.",
        options: []
    }
};


function startQuest() {
    showStep("start");
}

function showStep(step) {
    const stepData = questSteps[step];
    questText.textContent = stepData.text;
    questOptions.innerHTML = '';

    if (stepData.options.length > 0) {
        stepData.options.forEach(option => {
            const btn = document.createElement('button');
            btn.textContent = option.text;
            btn.onclick = () => showStep(option.next);
            questOptions.appendChild(btn);
        });
    } else {
        // No options = end of path → show restart button
        const restartBtn = document.createElement('button');
        restartBtn.textContent = "🛡 Play Again";
        restartBtn.onclick = () => startQuest();
        questOptions.appendChild(restartBtn);
    }
}

startQuest();

const paintings = [
    { name: "Mona Lisa", img: "images/mona_lisa.jpg", fact: "The Mona Lisa is famous for her enigmatic smile." },
    { name: "The Birth of Venus", img: "images/venus.jpg", fact: "Botticelli's masterpiece celebrates classical beauty." },
    { name: "The School of Athens", img: "images/athens.jpg", fact: "Raphael's fresco features Plato, Aristotle, and other philosophers." },
    { name: "Primavera", img: "images/primavera.jpg", fact: "Primavera depicts spring with mythological figures and lush gardens." }
];

let cardArray = [];
let flippedCards = [];
let matchesFound = 0;
let pairtimer = 0;
let pairtimerInterval;

const dingSound = new Audio('audios/ding.mp3');

function setupMemoryGame() {
    // Duplicate and shuffle cards
    cardArray = [...paintings, ...paintings].sort(() => 0.5 - Math.random());
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';

    cardArray.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.name = card.name;
        cardElement.dataset.index = index;

        const imgElement = document.createElement('img');
        imgElement.src = card.img;
        imgElement.alt = card.name;

        cardElement.appendChild(imgElement);
        gameBoard.appendChild(cardElement);
    });

    document.getElementById('matchCount').innerText = `Pairs found: 0`;
    document.getElementById('funFact').innerText = '';
    document.getElementById('restartMemoryGame').style.display = 'none';
    matchesFound = 0;
 
// Reset and start timer
    pairtimer = 0;
    clearInterval(pairtimerInterval);
    document.getElementById('pairtimer').innerText = `Time: 0s`;
    pairtimerInterval = setInterval(() => {
        pairtimer++;
        document.getElementById('pairtimer').innerText = `Time: ${pairtimer}s`;
    }, 1000);
}

function flipCard(event) {
    const clicked = event.currentTarget;
    if (clicked.classList.contains('flipped') || flippedCards.length === 2) return;

    clicked.classList.add('flipped');
    clicked.querySelector('img').style.display = 'block';
    flippedCards.push(clicked);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 800);
    }
}


function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.name === card2.dataset.name) {
        dingSound.play();
        matchesFound++;
        document.getElementById('matchCount').innerText = `Pairs found: ${matchesFound}`;
        
        const painting = paintings.find(p => p.name === card1.dataset.name);
        document.getElementById('funFact').innerText = `Fun Fact: ${painting.fact}`;

        if (matchesFound === paintings.length) {
            clearInterval(pairtimerInterval);
            setTimeout(() => {
                alert(`🎉 You found all pairs in ${pairtimer} seconds! Great job learning about Renaissance art!`);
                document.getElementById('restartMemoryGame').style.display = 'inline-block';
            }, 1000); // 1 second delay
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.querySelector('img').style.display = 'none';
            card2.querySelector('img').style.display = 'none';
        }, 500);
    }
    flippedCards = [];
}

document.getElementById('startMemoryGame').addEventListener('click', () => {
    document.getElementById('startMemoryGame').style.display = 'none';
    document.getElementById('gameBoard').style.display = 'grid';
    
    setupMemoryGame();
});

document.getElementById('restartMemoryGame').addEventListener('click', () => {
    document.getElementById('startMemoryGame').style.display = 'none';
    document.getElementById('gameBoard').style.display = 'grid';
    document.getElementById('restartMemoryGame').style.display = 'none';
    setupMemoryGame();
});

document.getElementById('gameBoard').addEventListener('click', (e) => {
    if (e.target.closest('.card')) {
        flipCard({ currentTarget: e.target.closest('.card') });
    }
});

const allEvents = [
    { name: "Industrial Revolution", order: 1, img: "images/industrial.jpg", fact: "The Industrial Revolution marked a shift to mass production." },
    { name: "World War I", order: 2, img: "images/ww1.jpg", fact: "World War I was known as 'The Great War'." },
    { name: "World War II", order: 3, img: "images/ww2.jpg", fact: "World War II involved more than 30 countries." },
    { name: "Moon Landing", order: 4, img: "images/moon.jpg", fact: "In 1969, Neil Armstrong became the first human on the Moon." },
    { name: "Fall of Berlin Wall", order: 5, img: "images/berlinwall.jpg", fact: "The Berlin Wall fell in 1989, symbolizing the end of the Cold War." },
    { name: "Invention of the Internet", order: 6, img: "images/internet.jpg", fact: "The Internet revolutionized global communication." },
    { name: "Cold War", order: 7, img: "images/coldwar.jpg", fact: "The Cold War was a geopolitical tension between the US and USSR." },
    { name: "Civil Rights Movement", order: 8, img: "images/civilrights.jpg", fact: "The Civil Rights Movement fought for racial equality in the US." },
    { name: "Globalization", order: 9, img: "images/globalization.jpg", fact: "Globalization accelerated in the late 20th century with trade and tech." }
];

let Timelinetimer = 0;
let TimelinetimerInterval = null;
let currentLevel = 'medium';
let currentEvents = [];

document.getElementById('startTimelineGame').addEventListener('click', () => {
    currentLevel = document.getElementById('levelSelect').value;
    startTimelineGame();
});

function startTimelineGame() {
    clearInterval(TimelinetimerInterval);
    Timelinetimer = 0;
    document.getElementById('Timelinetimer').innerText = `Time: 0s`;

    TimelinetimerInterval = setInterval(() => {
        Timelinetimer++;
        document.getElementById('Timelinetimer').innerText = `Time: ${Timelinetimer}s`;
    }, 1000);

    let eventCount = currentLevel === 'easy' ? 3 : currentLevel === 'medium' ? 6 : 9;
    currentEvents = allEvents.slice(0, eventCount);

    const shuffled = [...currentEvents].sort(() => 0.5 - Math.random());

    const eventContainer = document.getElementById('eventCards');
    const timelineContainer = document.getElementById('timelineSlots');
    eventContainer.innerHTML = '';
    timelineContainer.innerHTML = '';
    document.getElementById('timelineResult').innerText = '';
    document.getElementById('submitTimeline').style.display = 'inline-block';

    shuffled.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('TLcard');
        card.draggable = true;
        card.dataset.name = event.name;
        card.innerHTML = `<img src="${event.img}" alt="${event.name}"><span>${event.name}</span>`;

        card.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', event.name);
            
        });

        eventContainer.appendChild(card);
    });

    for (let i = 1; i <= eventCount; i++) {
        const slot = document.createElement('div');
        slot.classList.add('slot');
        slot.dataset.position = i;

        slot.addEventListener('dragover', e => e.preventDefault());
        slot.addEventListener('drop', e => {
    e.preventDefault();
    const name = e.dataTransfer.getData('text/plain');

    // Prevent duplicate content
    if (slot.hasChildNodes()) return;

    // Find the dragged card by its dataset.name
    const allCards = document.querySelectorAll('.TLcard');
    const draggedCard = Array.from(allCards).find(card => card.dataset.name === name);

    if (draggedCard) {
        const clone = draggedCard.cloneNode(true);
        clone.draggable = false; // prevent re-dragging
        clone.classList.add('dropped'); // optional class for styling

        // Clear the slot text and append the clone
        slot.innerHTML = '';
        slot.appendChild(clone);
        slot.dataset.name = name;

        draggedCard.style.display = 'none';
    }
});

        timelineContainer.appendChild(slot);
    }
}

document.getElementById('submitTimeline').addEventListener('click', () => {
    let correct = true;
    let funFacts = '';
    document.querySelectorAll('.slot').forEach((slot, idx) => {
        const expected = currentEvents[idx].name;
        if (slot.dataset.name !== expected) {
            correct = false;
        } else {
            const fact = currentEvents[idx].fact;
            funFacts += `✅ ${expected}: ${fact}\n`;
        }
    });

    clearInterval(TimelinetimerInterval);

    if (correct) {
        document.getElementById('timelineResult').innerText = `🎉 Correct! You completed the timeline in ${Timelinetimer}s!\n\n${funFacts}`;
        new Audio('audios/ding.mp3').play();
    } else {
        document.getElementById('timelineResult').innerText = "❌ Some events are out of order. Please adjust and try again!";
    }
});

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

let ceIndex = 0;
let ceScore = 0;

function loadCEQuestion() {
  new Audio('audios/pop.mp3').play();
  const q = ceQuestions[ceIndex];
  document.getElementById("event-text").textContent = q.event;

  const causes = shuffleArray([q.cause, ...getWrongOptions('cause')]);
  const effects = shuffleArray([q.effect, ...getWrongOptions('effect')]);

  populateSelect("cause-select", causes);
  populateSelect("effect-select", effects);
}

function populateSelect(id, options) {
  const select = document.getElementById(id);
  select.innerHTML = "";
  options.forEach(opt => {
    const option = document.createElement("option");
    option.textContent = opt;
    select.appendChild(option);
  });
}

function getWrongOptions(type) {
  const wrong = ceQuestions
    .map(q => q[type])
    .filter((_, i) => i !== ceIndex)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  return wrong;
}

function submitAnswers() {
  const selectedCause = document.getElementById("cause-select").value;
  const selectedEffect = document.getElementById("effect-select").value;
  const current = ceQuestions[ceIndex];

  let feedback = "";
  let correct = true;

  if (selectedCause !== current.cause) {
    feedback += "❌ Incorrect cause. ";
    correct = false;
  } else {
    feedback += "✅ Correct cause. ";
  }

  if (selectedEffect !== current.effect) {
    feedback += "❌ Incorrect effect.";
    correct = false;
  } else {
    feedback += "✅ Correct effect.";
  }

  if (correct) ceScore++;
  document.getElementById("ce-feedback").textContent = feedback;
  document.getElementById("ce-explanation").textContent = "💡 " + current.explanation;
  document.getElementById("ce-score").textContent = `Score: ${ceScore}`;
  ceIndex++;
  if (ceIndex < ceQuestions.length) {
    setTimeout(() => {
      document.getElementById("ce-feedback").textContent = "";
      document.getElementById("ce-explanation").textContent = "";
      loadCEQuestion();
    }, 1000);
  
  } else {
    document.getElementById("event-text").textContent = "🎉 Congratulations! You’ve successfully uncovered every event—mastering their causes and effects.";
    document.querySelector(".choices").style.display = "none";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("ce-feedback").textContent = "";
    document.getElementById("ce-explanation").textContent = "";
    document.getElementById("ce-score").textContent = "";
    document.getElementById("final-score-message").textContent = `You got ${ceScore} out of ${ceQuestions.length} correct!`;
    document.getElementById("try-again-btn").style.display = "inline-block";
    }
}

function shuffleArray(arr) {
  return arr.slice().sort(() => 0.5 - Math.random());
  }

window.addEventListener("load", loadCEQuestion);

function restartGame() {
  ceIndex = 0;
  ceScore = 0;

  // Reset UI
  document.getElementById("submit-btn").style.display = "";
  document.querySelector(".choices").style.display = "";
  document.getElementById("final-score-message").textContent = "";
  document.getElementById("ce-feedback").textContent = "";
  document.getElementById("ce-explanation").textContent = "";
  document.getElementById("try-again-btn").style.display = "none";

  loadCEQuestion();
}

 const fashionStyles = [
  { era: "Prehistoric Era", image: "https://i.pinimg.com/736x/ff/51/d7/ff51d759cc73abd005fd4aa8d6b7937c.jpg" },
  { era: "Ancient Egyptian (3000 BCE)", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiQSZ9lmVVSSrAxl_UbYi8CYEXduVNDnciw&s" },
  { era: "Renaissance (1400-1600)", image: "https://i.pinimg.com/736x/19/a1/b9/19a1b972c121924cd79917d455ff9f51.jpg" },
  { era: "1920s", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYdxaYllB_-8QRfmOwBh3hhz0KwYWmRcaRQWici5ZaAPotrywoxjTKOgDFBxY0gDq24E&usqp=CAU" },
  { era: "1950s", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPn-DYdUL2Hp4JtV9QQSo8eXazb_fymh-mSm6nF4-Izct35NxqEe9P4hFbO9EThUj0NLw&usqp=CAU" },
  { era: "1980s", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuwY3NzSGqQFdTvRb2JOlA6XJyMthzPmd80g&s" },
  { era: "Y2K (2000s)", image: "https://i.pinimg.com/236x/e5/8f/3b/e58f3bc0dc5ba86c754641ddb0a34d24.jpg" },
  { era: "Modern (Present)", image: "https://stylevanity.com/wp-content/uploads/2021/02/pexels-anna-shvets-5325599-585x775.jpg" },
  { era: "Future Fashion (Concept)", image: "https://theelegantclassygentleman.wordpress.com/wp-content/uploads/2018/08/15892.jpg?w=736" }
];

let currentFashionIndex = 0;
const fashionButton = document.getElementById('fashion-btn');
const fashionCaption = document.getElementById('fashion-caption');
const fashionImage = document.getElementById('fashion-image');

function changeFashion() {
  if (fashionStyles.length > 0 && fashionCaption && fashionImage) {
    const style = fashionStyles[currentFashionIndex];
    fashionCaption.textContent = style.era;
    fashionCaption.style.color = document.body.classList.contains('dark-theme') ? '#f0f0f0' : '#333';
    fashionImage.src = style.image;
    fashionImage.alt = style.era + " Fashion";

    currentFashionIndex++;

    if (currentFashionIndex >= fashionStyles.length) {
      currentFashionIndex = 0; // Loop back to the beginning
      if (fashionButton) {
        fashionButton.textContent = "Next Look"; // Reset button text
        fashionButton.disabled = false; // Ensure button is enabled
      }
    }
  }
}

// Initialize the first fashion style on page load
document.addEventListener('DOMContentLoaded', () => {
  changeFashion();
});

// Add event listener to the button if it exists
if (fashionButton) {
  fashionButton.addEventListener('click', changeFashion);
}

});



