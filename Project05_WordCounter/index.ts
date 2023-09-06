#!/usr/bin/node env
const promptSync = require("prompt-sync")();

let paragraph = promptSync("Enter your paragraph: ");

let words = paragraph.split(' ');
let nonWhiteSpaceWords = words.filter((word: string) => word.trim() !== '');
console.log(`Total words are ${words.length}`);
let characters = paragraph.replace(/\s+/g, '');
console.log(`Total characters are ${characters.length}`);