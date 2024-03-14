/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

/*
function isAnagram(str1, str2) {
  // Remove any non-alphanumeric characters and convert both strings to lowercase
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the lengths of the cleaned strings are different
  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  // Sort the characters of both strings and compare them
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Check if the sorted strings are equal
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(isAnagram('spar', 'rasp')); // true
console.log(isAnagram('hello', 'world')); // false
*/


function isAnagram(str1, str2) {
    // Convert both input strings to lowercase
    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();
  
    // Remove non-alphanumeric characters and sort the characters in both strings
    const sortedStr1 = lowerStr1.replace(/[^a-z0-9!]/g, '').split('').sort().join('');
    const sortedStr2 = lowerStr2.replace(/[^a-z0-9!]/g, '').split('').sort().join('');
  
    // Check if the sorted strings are equal
    return sortedStr1 === sortedStr2;
  }
  
  
  
  
  // Test cases
  console.log(isAnagram('listen', 'silent')); // true
  console.log(isAnagram('hello', 'world'));   // false
  console.log(isAnagram('Listen', 'silent')); // true (different casing)
  console.log(isAnagram('anagram', 'nag a ram')); // true (with spaces)
  console.log(isAnagram('anagram', 'nag!@#$%^&*()_+aram')); // true (with special characters)
  console.log(isAnagram('hello', 'world!')); // false (with special characters)
  
  // Test cases
  console.log(isAnagram('listen', 'silent')); // true
  console.log(isAnagram('hello', 'world'));   // false
  console.log(isAnagram('Listen', 'silent')); // true (different casing)
  console.log(isAnagram('anagram', 'nag a ram')); // true (with spaces)
  console.log(isAnagram('anagram', 'nag!@#$%^&*()_+aram')); // true (with special characters)
  console.log(isAnagram('hello', 'world!')); // false (with special characters)
  
  // Test cases
  console.log(isAnagram('listen', 'silent')); // true
  console.log(isAnagram('hello', 'world'));   // false
  console.log(isAnagram('Listen', 'silent')); // true (different casing)
  console.log(isAnagram('anagram', 'nag a ram')); // true (with spaces)
  console.log(isAnagram('anagram', 'nag!@#$%^&*()_+aram')); // true (with special characters)
  console.log(isAnagram('hello', 'world!')); // false (with special characters)
  

  