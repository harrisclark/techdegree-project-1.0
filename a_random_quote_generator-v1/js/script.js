/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote:"The unexamined life is not worth living.",
    source:"Socrates"
  },
  {
    quote:"It is a fact that connot be denied: the wickedness of others becomes our own \
  wickedness because it kindles something evil in our own hearts.",
    source:"Carl Jung",
    citation:"Civilization in Transition",
    year:"1964"
  },
  {
    quote:"Whoever fights monsters should see to it that in the process he does not become \
   a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
    source:"Friedrich Nietzsche",
    citation:"Beyond Good and Evil",
    year:"1886"
  },
  {
    quote:"Short cuts make long delays.",
    source:"Peregrin Took",
    citation:"The Fellowship of the Ring",
    year:"3018 of the Third Age"
  },
  {
    quote:"Preventing war is the work of politicians, establishing peace is the work of educationists.",
    source:"Maria Montessori",
    citation:"Education and Peace",
    year:"1949"
  }
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  let selectQ = quotes[randomNumber];
  console.log(randomNumber);
  return selectQ;
}


function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let quoteString = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
  
  //check for citation property in array, if true add citation to HTML string
  if (randomQuote.citation !== undefined) {
    quoteString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year !== undefined) {
    quoteString += `<span class="year">${randomQuote.year}</span>`
  }
  quoteString += `</p>`;

  document.getElementById('quote-box').innerHTML = quoteString;
  document.body.style.backgroundColor = `rgb(${randomColorValue()},${randomColorValue()},${randomColorValue()})`;
  
}

//creat random color function so that each time it is called it runs a different value
function randomColorValue() {
  colorValue = Math.floor(Math.random() * 130);
  return colorValue;
}


let quoteTimer = setInterval(function() {
  printQuote()}, 11000);





/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);