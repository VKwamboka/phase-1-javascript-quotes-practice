//constant for db url, list element, form element
const url = "http://localhost:3000/quotes"
const list = document.getElementById('quote-list')
const form = document.getElementById('new-quote-form')

function cardQuotes(quotee){
    const quoteCard = `
    <blockquote class="blockquote">
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">${quotee.author}</footer>
    <br>
    <button class='btn-success'>Likes: <span>0</span></button>
    <button class='btn-danger'>Delete</button>
  </blockquote>
</li>
    `
}

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