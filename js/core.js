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
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Th%C3%A9%C3%A2tre_D%E2%80%99op%C3%A9ra_Spatial.png/1024px-Th%C3%A9%C3%A2tre_D%E2%80%99op%C3%A9ra_Spatial.png", alt: "Théâtre D'opéra Spatial" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Edmond_de_Belamy.png/800px-Edmond_de_Belamy.png", alt: "Edmond de Belamy" }
        ]
    }
};


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
        options: ["The end", "Rebirth", "New world", "Middle age"],
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


  const fashionEras = {
    prehistoric: {
            era: 'Prehistoric Era – Function Over Form',
            description: 'Animal skins and natural fibers offered protection from the environment. Fashion was born out of necessity, adapting to climate and available resources. Early adornments often served as spiritual or tribal markers.',
            image: { src: 'images/prehistoric.jpg', caption: 'Early human wearing animal hides for warmth and basic adornment.' } 
        },
        ancient: {
            era: 'Ancient Civilizations – Identity and Status',
            description: 'Draped linen garments, ornate jewelry, and rich symbolism marked Egyptian, Greek, and Roman attire. Clothing communicated social status, religious beliefs, and regional identity, often with intricate pleating and elaborate headdresses.',
            image: { src: 'images/ancient.jpg', caption: 'Elaborate draped garments and ornate jewelry from Ancient Civilizations.' } 
        },
        renaissance: {
            era: 'The Renaissance – Art Meets Attire',
            description: 'Fashion exploded with color, luxurious fabrics, and meticulous detail. Garments featured rich velvets, silks, slashed sleeves, and intricate embroidery, reflecting humanist ideals, artistic innovation, and a display of wealth. As Desiderius Erasmus famously said, "Clothes make the man."',
            image: { src: 'images/renaissance.jpg', caption: 'Opulent and detailed Renaissance attire, showcasing rich fabrics and intricate designs.' } 
        },
        ninetwozero: {
            era: '1920s – Flapper Glamour & Liberation',
            description: 'Short, straight-cut dresses, dropped waists, bob cuts, and fringe defined women’s liberation and a rebellious new silhouette. The jazz age brought about a dramatic shift from restrictive Victorian corsetry to a freer, more active style. As Coco Chanel noted, "Fashion is architecture: it is a matter of proportions."',
            image: { src: 'images/1920s.jpg', caption: 'The iconic flapper style, symbolizing freedom and rebellion in the 1920s.' } 
        },
        ninefivezero: {
            era: '1950s – Postwar Elegance & Youth Rebellion',
            description: 'Characterized by the "New Look" with full skirts, cinched waists, and polished elegance for women, the 1950s revived glamour after the war. Simultaneously, youth culture introduced casual styles like leather jackets, denim, and rock-and-roll-inspired rebellion. Marilyn Monroe\'s famous quote, "Give a girl the right shoes, and she can conquer the world," perfectly encapsulates the era\'s focus on sophisticated details.',
            image: { src: 'images/1950s.jpg', caption: 'Classic 1950s elegance with cinched waists and full skirts.' } 
        },
        nineeightzero: {
            era: '1980s – Power Dressing & Pop Culture Fusion',
            description: 'The 1980s were bold and expressive, celebrating individualism and excess. From sharp shoulder pads and power suits embodying corporate ambition to vibrant streetwear, athletic wear, and punk influences, fashion was a reflection of pop culture and a desire to stand out. As street style photographer Bill Cunningham famously said, "Fashion is the armor to survive the reality of everyday life."',
            image: { src: 'images/1980s.jpg', caption: 'Bold and expressive 1980s fashion, featuring power suits and vibrant colors.' } 
        },
        zero: {
            era: '2000s – Y2K Revival & Experimental Edge',
            description: 'The 2000s marked a shift toward experimental style, tech-inspired aesthetics, and a resurgence of early 2000s pop culture icons. From low-rise jeans and bedazzled logos to edgy high fashion, the era was defined by contradiction: maximalist excess and minimalist techwear, luxury branding and DIY rebellion. As Alexander McQueen stated, "It’s a new era in fashion—there are no rules."',
            image: { src: 'images/2000s.jpg', caption: 'Y2K fashion trends, characterized by low-rise jeans and bold accessories.' } 
        },
        twozero: {
            era: '2020s – Sustainable Expression & Digital Identity',
            description: 'Fashion in the 2020s blends sustainability, inclusivity, and digital transformation. Styles range from minimalist loungewear to maximalist streetwear, all while championing ethics, individuality, and tech integration. Virtual fashion and the rise of the metaverse are reshaping how people express identity. Vivienne Westwood\'s timeless advice, "Buy less, choose well, make it last," resonates strongly in this era.',
            image: { src: 'images/2020s.jpg', caption: 'Contemporary 2020s fashion, emphasizing sustainability and diverse expression.' } 
        }
    };



const medievalQuestData = {
        start: {
            text: "You are living in medieval Europe. Choose your path:",
            options: [
                { text: "Become a Knight", next: "knightStart" },
                { text: "Join the Crusades", next: "crusadesStart" },
                { text: "Become a Traveling Merchant", next: "merchantStart" }
            ]
        },

        
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

const historyEvents = {
    prehistory: { title: "Prehistory (3.3M–3000 BCE)", content: "Stone tools, fire, farming, and early villages before writing." },
    ancient: { title: "Ancient Times (3000 BCE - 500 CE)", content: "The rise of early civilizations like Egypt, Greece, and Rome." },
    middle_age: { title: "Middle Ages (500 - 1500 CE)", content: "The era of feudalism, castles, and the rise of empires." },
    renaissance: { title: "Renaissance & Enlightenment (1500 - 1800)", content: "A rebirth of art, science, and philosophy." },
    modern: { title: "Modern Era (1800s-1945)", content: "Industrial revolution to digital technology." },
    contemporary: { title: "Contemporary Era (1945 – Present)", content: "Globalization, digital revolution, and shifting global powers." }
};


  const monumentPuzzleImages = [
    { id: 'colosseum', src: 'images/puzzles/colosseum_full.jpg', name: 'Colosseum' },
    { id: 'pyramid', src: 'images/puzzles/pyramid_full.jpg', name: 'Pyramid of Giza' },
    { id: 'parthenon', src: 'images/puzzles/parthenon_full.jpg', name: 'Parthenon' },
    { id: 'taj_mahal', src: 'images/puzzles/taj_mahal_full.jpg', name: 'Taj Mahal' }
];


  const causeEffectQuestions = [
    {
        question: "Cause: The invention of the printing press by Gutenberg in the 15th century. Effect?",
        options: [
            "Increased illiteracy rates.",
            "Slower dissemination of knowledge.",
            "Mass production of books and wider spread of ideas.",
            "Decline in religious texts."
        ],
        answer: "Mass production of books and wider spread of ideas."
    },
    {
        question: "Cause: The Black Death (mid-14th century) sweeping across Europe. Effect?",
        options: [
            "A population boom.",
            "Labor shortages and increased wages for survivors.",
            "Rise of feudalism.",
            "Improved public health infrastructure."
        ],
        answer: "Labor shortages and increased wages for survivors."
    },
    {
        question: "Cause: The discovery of gold in California in 1848. Effect?",
        options: [
            "A decrease in immigration to the United States.",
            "The California Gold Rush, leading to rapid population growth and development.",
            "A decline in the value of gold worldwide.",
            "The expansion of Native American territories."
        ],
        answer: "The California Gold Rush, leading to rapid population growth and development."
    },
    {
        question: "Cause: The assassination of Archduke Franz Ferdinand in 1914. Effect?",
        options: [
            "The immediate end of all European alliances.",
            "The start of World War II.",
            "A diplomatic resolution among European powers.",
            "The triggering of a series of events leading to World War I."
        ],
        answer: "The triggering of a series of events leading to World War I."
    }
];


  const memoryGameCards = [
        { name: "Mona Lisa", img: "images/mona_lisa.jpg", fact: "The Mona Lisa, painted by Leonardo da Vinci, is famous for her enigmatic smile and is one of the world's most recognizable artworks." },
        { name: "The Birth of Venus", img: "images/venus.jpg", fact: "Sandro Botticelli's 'The Birth of Venus' depicts the goddess Venus arriving on shore after her birth, celebrating classical beauty and mythological themes." },
        { name: "The School of Athens", img: "images/athens.jpg", fact: "Raphael's 'The School of Athens' is a fresco showcasing ancient Greek philosophers and scientists, including Plato, Aristotle, and Socrates." },
        { name: "Primavera", img: "images/primavera.jpg", fact: "Botticelli's 'Primavera' is an allegorical painting depicting a group of mythological figures in a lush garden, representing the arrival of spring." }
    ];


  const correctSound = document.getElementById('correctSound');

  function playSound(audioElement) {
    if (audioElement) {
        audioElement.currentTime = 0; 
        audioElement.play().catch(e => console.error("Error playing sound:", e));
    }
}


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


  function showElement(element) {
    if (element) element.style.display = 'block';
}

  function hideElement(element) {
    if (element) element.style.display = 'none';
}


  function addClass(element, className) {
    if (element) element.classList.add(className);
}

  function removeClass(element, className) {
    if (element) element.classList.remove(className);
}


  function on(element, event, handler) {
    if (element) element.addEventListener(event, handler);
}

  function off(element, event, handler) {
    if (element) element.removeEventListener(event, handler);
}

document.addEventListener('DOMContentLoaded', () => {
    
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }, 1500);

    
    window.shuffleArray = function(arr) {
        
        const array = arr.slice();
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
});

window.artPeriods = artPeriods;
window.artFacts = artFacts;
window.artQuestions = artQuestions;
window.fashionEras = fashionEras;
window.historyEvents = historyEvents;
window.medievalQuestData = medievalQuestData;
window.monumentPuzzleImages = monumentPuzzleImages;
window.causeEffectQuestions = causeEffectQuestions;
window.memoryGameCards = memoryGameCards;
window.correctSound = correctSound;
window.playSound = playSound;
window.shuffleArray = shuffleArray;
window.showElement = showElement;
window.hideElement = hideElement;
window.addClass = addClass;
window.removeClass = removeClass;
window.on = on;
window.off = off;