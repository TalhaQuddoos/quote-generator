var quoteContainer = document.getElementById('quote-container')
var quoteText = document.getElementById('quote')
var authorText = document.getElementById('author')
var twitterBtn = document.getElementById('twitter')
var newQuoteBtn = document.getElementById('new-quote')


async function getQuote(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        if(data.quoteAuthor === ''){
            authorText.innerText = 'Unknown'
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        if(data.quoteText.length > 50){
            quoteText.classList.add('long-quote')
        } else {
            quoteText.classList.remove('long-quote')
        }
        quoteText.innerText = data.quoteText;
    } catch(error) {
        getQuote()
    }
}

newQuoteBtn.addEventListener('click', getQuote)


getQuote()

