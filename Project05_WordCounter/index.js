var promptSync = require("prompt-sync")();
var paragraph = promptSync("Enter your paragraph: ");
var words = paragraph.split(' ');
var nonWhiteSpaceWords = words.filter(function (word) { return word.trim() !== ''; });
console.log("Total words are ".concat(words.length));
var characters = paragraph.replace(/\s+/g, '');
console.log("Total characters are ".concat(characters.length));
