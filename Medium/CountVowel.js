/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function countVowels(str) {
    // Initialize a variable to count the number of vowels
    let vowelCount = 0;
  
    // Iterate over each character in the string
    for (let char of str) {
        // Check if the character is a vowel (both lowercase and uppercase)
        if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char)) {
            // Increment the vowel count if the character is a vowel
            vowelCount++;
        }
    }
  
    // Return the total vowel count
    return vowelCount;
  }
  
  module.exports = countVowels;
  