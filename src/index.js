//constant for db url, list element, form element
const url = "http://localhost:3000/quotes"
const list = document.getElementById('quote-list')
const form = document.getElementById('new-quote-form')

//submit form
form.addEventListener('submit', (e) => {
    //prevent default page refresh
    e.preventDefault();
    //create newQuote object
    let newQuote = {
        quote: e.target.quote.value,
        author: e.target.author.value
    }
     //pass new quote object to addQuote
    addQuote(newQuote)
    //reset form
    form.reset();
})