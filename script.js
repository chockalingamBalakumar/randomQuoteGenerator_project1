/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  /**
 * function to generate random argument for rgb method
 */

  function randomRGB() {
    return Math.floor(Math.random() * 256 );
  }

  /**
   * funtion to generate randomColor
   */
  
  function randomColor() {
    var color = 'rgb(';
    color += randomRGB() + ',';
    color += randomRGB() + ',';
    color += randomRGB() + ')';
    return color;
  }

/*** 
 * `quotes` array 
***/

var quotes = [
  {'quote' : 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.','source' : 'Patrick McKenzie','citation' : 'Twitter','year': 2016},
  {'quote' : 'The greatest glory in living lies not in never falling, but in rising every time we fall.','source' : 'Nelson Mandela'},
  {'quote' : 'Many of life\'s failures are people who did not realize how close they were to success when they gave up.','source' : 'Thomas A. Edison','category' : 'motivation'},
  {'quote' : 'You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose','source' : 'Dr. Seuss'},
  {'quote' : 'A man is but a product of his thoughts. What he thinks he becomes.','source' : 'Mahatma Gandhi'}
];

/***
 * funtion to generate random quote
***/
function getRandomQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * 5)];
  return randomQuote;
}

/***
 * function to print the quote in html file(index.html)
 * 
***/
function printQuote() {
  var quote = getRandomQuote();
  var rgbColor = randomColor();
  //
  var html = `<div id="quote-box" class="quote-box" style="background-color:${rgbColor}">`;
  html += `<p class="quote"> ${quote.quote} </p>`;
  html += `<p class="source"> ${quote.source}`;

  // checking the quote object for citation property
  if (quote.citation) {
    html += `<span class="citation"> ${quote.citation} </span>`;
  } 
  // checking the quote object for year property
  if (quote.year) {
    html += `<span class="year">${quote.year}</span>`;
  }
  // checking the quote object for category property
  if (quote.category) {
    html += `<span class="year">${quote.category}</span>`;
  }
  html += `</p>`;
  html += `</div>`;
  var quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = html;
  return quoteBox;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

/**
 * Set to reload the page for every 10 seconds
 * @param {method} print - method to print the quote
 * @param {number} time - reload time set in milliseconds
 */
setInterval(printQuote, 10000);
