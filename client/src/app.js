const QuoteView = require('./views/quoteView');
const Request = require('./services/request.js');

const quoteView = new QuoteView();
const request = new Request("http://localhost:3000/quotes")

const app = function(){
  const deleteButton = document.querySelector('#deleteButton');
  deleteButton.addEventListener('click', deleteButtonClicked);

  const createQuoteButton = document.querySelector('#submit-quote');
  createQuoteButton.addEventListener('click', createButtonClicked);
}

const deleteButtonClicked = function(evt) {
  console.log('delete button clicked');
}

const createButtonClicked = function(evt) {
  console.log('submit button clicked')
}

document.addEventListener('DOMContentLoaded', app);