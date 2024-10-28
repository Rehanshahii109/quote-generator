const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Fetch a new quote from the API
async function fetchQuote() {
	const apiUrl = "https://dummyjson.com/quotes/random";
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		displayQuote(data);
	} catch (error) {
		// console.error("Error fetching quote:", error);
		quoteText.textContent = "Failed to fetch a quote.";
		authorText.textContent = "";
	}
}

// Display the quote on the page
function displayQuote(data) {
	quoteText.textContent = data.quote;
	authorText.textContent = data.author;

	// Check quote length to determine styling
	if (data.quote.length > 100) {
		quoteText.classList.add("long-quote");
	} else {
		quoteText.classList.remove("long-quote");
	}
}

// Tweet the quote
function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text="${quoteText.textContent}" - ${authorText.textContent}`;
	window.open(twitterUrl, "_blank");
}

// Event listeners
newQuoteBtn.addEventListener("click", fetchQuote);
twitterBtn.addEventListener("click", tweetQuote);

// Fetch the first quote on page load
fetchQuote();
