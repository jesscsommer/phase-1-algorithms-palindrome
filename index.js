function isPalindrome(word) {
  for (const letter of word) {
    const letterIndex = word.indexOf(letter)
    const rightLetter = word[word.length-letterIndex-1]
    if (letter !== rightLetter) {
      return false
    } else {
      return true
    }
}}


/* 
  Add your pseudocode here

  - for each letter in the word, get the index of the letter
  - get the letter the same distance away from the end of the string 
  - if the two letters are not the same, false; else, true
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
