setTimeout
  (() => {
    // Check if the loader element exists before trying to access its style
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'none';
    }
  }, 1500);


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
      historyOutput.style.color = document.body.classList.contains('darkmode') ? '#f0f0f0' : '#333';
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
  quizQuestion.style.color = document.body.classList.contains('dark-theme') ? '#f0f0f0' : '#333';
  scoreDisplay.style.color = document.body.classList.contains('dark-theme') ? '#f0f0f0' : '#333';
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
  quizResult.style.color = document.body.classList.contains('dark-theme') 
    ? (index === question.correctAnswer ? '#8AFF8A' : '#FF8A8A') 
    : (index === question.correctAnswer ? '#4CAF50' : '#F44336');

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

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// === Match Tool Game Enhancement ===
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
    let matches = 0; // Initialize matches inside setupDragAndDrop to reset on new game

    tools.forEach(tool => {
      tool.addEventListener('dragstart', (e) => {
        console.log('Drag started for:', e.target.dataset.match);
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

      // Reset the target's content and classes when setupDragAndDrop is called
      target.innerHTML = originalUsage; 
      target.classList.remove('correct', 'incorrect');

      target.addEventListener('dragover', e => {
        e.preventDefault();
        target.style.backgroundColor = '#e0e0e0';
      });

      target.addEventListener('dragleave', () => {
        target.style.backgroundColor = '';
      });
      
        target.addEventListener('drop', e => {
        console.log('Drop event on:', target.dataset.target);
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

  // Remove any "correct" or "incorrect" classes and reset content
  targets.forEach(target => {
    target.classList.remove('correct', 'incorrect');
    target.innerHTML = target.getAttribute('data-usage'); // ✨ CORRECTED LINE
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

  // Run the game setup to attach event listeners to newly created tools
  shuffleTools();
  setupDragAndDrop();
}

// Ensure the initial setup runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  shuffleTools();
  setupDragAndDrop();

  // Attach event listener for replay button after DOM is loaded
  const replayButton = document.getElementById('replay-button');
  if (replayButton) {
    replayButton.addEventListener('click', resetGame);
  }
});

// Initial call for other sections
showArtPeriod('prehistoric'); //
document.getElementById('art-fact-btn').addEventListener('click', showArtInfo); //
showArtInfo(); //

document.getElementById('retry-btn').addEventListener('click', function () { //
  currentQuestion = 0; //
  score = 0; //
  scoreDisplay.textContent = 'Score: 0'; //
  this.style.display = 'none'; // hide the retry button //
  loadQuestion(); //
}); //

document.getElementById('start-quiz-btn').addEventListener('click', function() { //
  // Hide start button //
  this.style.display = 'none'; //

  // Show quiz UI //
  document.getElementById('score-display').style.display = 'block'; //
  document.getElementById('quiz-progress').style.display = 'block'; //
  document.getElementById('art-quiz-question').style.display = 'block'; //
  document.getElementById('quiz-options').style.display = 'block'; //

  loadQuestion(); // Now start quiz //
}); //