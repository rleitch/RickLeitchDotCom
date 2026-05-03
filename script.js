// Pantheist quotes - rotates on each visit
const quotes = [
    "The universe is not outside of you. Look inside yourself; everything that you want, you already are. — Rumi",
    "I believe in Spinoza's God, who reveals Himself in the lawful harmony of the world. — Albert Einstein",
    "We are a way for the cosmos to know itself. — Carl Sagan",
    "The divine is not something above us, it is in us and around us. — John Shelby Spong",
    "Nature is the living, visible garment of God. — Johann Wolfgang von Goethe",
    "All things are connected like the blood which unites one family. — Chief Seattle",
    "The cosmos is within us. We are made of star-stuff. — Carl Sagan",
    "Those who deny freedom to others, deserve it not for themselves. - Anonymous / Common wisdom",
    "Do I not destroy my enemies when I make them my friends? - Anonymous / Common wisdom",
    "Give me six hours to chop down a tree and I will spend the first four sharpening the axe. - Benjamin Franklin",
    "The best way to predict your future is to create it. - Abraham Lincoln"
];

// Select random quote on page load
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

// Display quote when page loads
displayRandomQuote();
