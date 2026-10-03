const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");

function generateQuote() {

    const randomIndex = Math.floor(
        Math.random() * quotes.length
    );

    quoteElement.textContent = quotes[randomIndex].quote;

    authorElement.textContent =
        "— " + quotes[randomIndex].author;
}

newQuoteBtn.addEventListener("click", generateQuote);
const copyQuoteBtn = document.getElementById("copyQuoteBtn");

copyQuoteBtn.addEventListener("click", function () {

    const text =
        quoteElement.textContent + " " +
        authorElement.textContent;

    navigator.clipboard.writeText(text);

    alert("Quote copied!");
});