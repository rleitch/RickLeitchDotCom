// Pantheist quotes - rotates on each visit
const quotes = [
    "God is not external to anyone, but is present with all things, though they are ignorant that he is so. — Plotinus",
    "The universe is not outside of you. Look inside yourself; everything that you want, you already are. — Rumi",
    "I believe in Spinoza's God, who reveals Himself in the lawful harmony of the world. — Albert Einstein",
    "We are a way for the cosmos to know itself. — Carl Sagan",
    "Whatever is, is in God, and nothing can exist or be conceived without God. — Baruch Spinoza",
    "The divine is not something above us, it is in us and around us. — John Shelby Spong",
    "Nature is the living, visible garment of God. — Johann Wolfgang von Goethe",
    "I am the earth, the earth is me. Each blade of grass, each honey tree. — Donovan Leitch",
    "All things are connected like the blood which unites one family. — Chief Seattle",
    "The cosmos is within us. We are made of star-stuff. — Carl Sagan"
];

// Select random quote on page load
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

// Display quote when page loads
displayRandomQuote();
