//step 1 to set a default value

const TypingEffect = function (CopyHTMLSpan, words, wait = 2000) {
  this.CopyHTMLSpan = CopyHTMLSpan; //span tag in a header in html
  this.words = words;
  this.text = ""; // represents what is currently 'typing'
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10); //making it integer
  this.type(); //main method
  this.isDeleting = false; //represents state if it's deleting or not
};

//using prototype: {objectName}.prototype.{methodName}
TypingEffect.prototype.type = function () {
  // Current index of word
  const currentWord = this.wordIndex % this.words.length;
  // ‎using Remainder (%)

  // Get full text of current word
  const wholeText = this.words[currentWord];

  // Check if deleting
  if (this.isDeleting) {
    // Remove character
    this.text = wholeText.substring(0, this.text.length - 1);
  } else {
    // Add character
    this.text = wholeText.substring(0, this.text.length + 1);
  }

  // Insert text into element
  this.CopyHTMLSpan.innerHTML = '<span class="txt">' + this.text + "</span>";
  //  es6 syntacs this.CopyHTMLSpan.innerHTML = `<span class="txt">${this.text}</span>`;

  // Initial Type Speed
  let typeSpeed = 150; //it is gonna change

  if (this.isDeleting) {
    typeSpeed = typeSpeed / 2;
  } //makes it 2 times faster when it is deleting

  // If word is complete
  if (!this.isDeleting && this.text === wholeText) {
    // Make pause at end
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.text === "") {
    this.isDeleting = false;
    // Move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 50;
  }

  setTimeout(() => {
    this.type();
  }, typeSpeed); //using ES6 arrow function for anonomouse function with "this"
};

// Initialize  On DOM Load
document.addEventListener("DOMContentLoaded", Initialize);

// Initialize App
function Initialize() {
  const CopyHTML = document.querySelector(".txt-type"); //tagreting all span
  const words = JSON.parse(CopyHTML.getAttribute("data-words")); //Parse the data with JSON.parse(), and the data becomes a JavaScript object. Otherwise it's just a string
  const wait = CopyHTML.getAttribute("data-wait");
  // Initialize TypingEffect
  new TypingEffect(CopyHTML, words, wait);
}

//  JQuery to prevent default behavior of empty link

// $('a.someclass').click(function(e)
// {
//     // Cancel the default action
//     e.preventDefault();
// });

//USED INLINE SCRIPT AT THE END
