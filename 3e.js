const arr = ["level", "hello", "racecar", "goodbye", "deified"];

const isPalindrome = str => str === str.split("").reverse().join("");

const palindromes = arr.filter(str => isPalindrome(str));

console.log(palindromes);