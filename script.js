// script.js

const quotes = [
    {
        content: "“They say laughter is the best medicine. That’s why I laugh at funerals.",
        author: "Rani Rasam"
    },
    {
        content: "I’d agree with you, but then we’d both be wrong.",
        author: "Chacko Chalu"
    },
    {
        content: "I told my doctor I broke my arm in two places. He told me to stop going to those places.",
        author: "Kochu Kannan"
    },
    {
        content: "People say nothing is impossible, but I do nothing every day.",
        author: "Mallu Manikandan"
    },
    {
        content: "Some people just need a high-five… in the face… with a chair.",
        author: "Shyam Sundar"
    },
    {
        content: "I’d like to help you out. Which way did you come in?",
        author: "Narayana Nonsense"
    },
    {
        content: "I used to have an open mind, but my brains kept falling out.",
        author: "Lalettan Laughs"
    },
    {
        content: "“Why don’t graveyards have Wi-Fi? Because people are just dying to get in.",
        author: "Golu Gappa"
    },
    {
        content: "I don’t need a hairdresser; my pillow gives me a new hairstyle every morning.",
        author: "Munni Badnaam"
    },
    {
        content: "They say laughter is the best medicine. That’s why I laugh at funerals.",
        author: "Dholak Dada"
    },
    {
        content: "“I’m reading a book on anti-gravity. It’s impossible to put down!",
        author: "Mallu Mutton"
    },
    {
        content: "“I have a fear of elevators, but I’m taking steps to avoid it.",
        author: "Babu Biryani"
    }

];

const quoteText = document.querySelector(".quote"),
    authorName = document.querySelector(".author .name"),
    quoteBtn = document.querySelector("button"),
    soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter");

const randomQuote = () => {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";

    // Pick a random quote from the dark humor quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Update the text content with the random quote
    quoteText.innerText = randomQuote.content;
    authorName.innerText = randomQuote.author;
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");
}

quoteBtn.addEventListener("click", randomQuote);

soundBtn.addEventListener("click", () => {
    let message = new SpeechSynthesisUtterance();
    message.text = `${quoteText.innerText} by ${authorName.innerText}`;
    speechSynthesis.speak(message);
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText.innerText + " — " + authorName.innerText)}`;
    window.open(tweetUrl, "_blank");
});
