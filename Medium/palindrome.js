/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

/*
function isPalindrome(str) {
  return true;
}
*/

function isPalindrome(str) {
    // Remove spaces and punctuation marks and convert to lowercase
    const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
    
    let start = 0;
    let end = cleanStr.length - 1;
    
    while (start < end) {
        if (cleanStr[start] !== cleanStr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
  }
  
  
  module.exports = isPalindrome;
  