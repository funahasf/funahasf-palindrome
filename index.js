module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content.
  // For example:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi || [])).join("");
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Defines a TranslatedPhrase object. 
function TranslatedPhrase(content, translation) {
  this.content = content; 
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.translation.toLowerCase();
  }
}

TranslatedPhrase.prototype = new Phrase();

// // Defines a Phrase object.
// function Phrase(content) {
//   this.content = content; 
//
//   // Returns true if the phrase is a palindrome, false otherwise.
//   this.palindrome = function palindrome() {
//     let processedContent = this.content.toLowerCase();
//     return this.processedContent() === reverse(this.processedContent());
//   }
// }
//
