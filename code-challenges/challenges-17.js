'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion

// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]

// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]

const recursionPattern = (int1, int2) => {
  const pattern = [];
  let flag = true;
  const generateRecursively = (current, arr) => {
    if (flag) {
      arr.push (current);
      if (current - int2 < 0) {
        flag = false;
      }
      return generateRecursively (current - int2, arr);
    } else if (current <= int1 && flag === false) {
      arr.push (current);
      return generateRecursively (current + int2, arr);
    }
    return arr;
  };
  return generateRecursively (int1, pattern);
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
//

const filterLinks = str => {
  const regex = /www\.[a-zA-Z0-9]+\.(com|org|net)/g;
  return str.match (regex).join ('');
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
//
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
//
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = str => {
  const cleanedStr = str.toLowerCase ().replace (/[^a-z0-9]/g, '');
  return cleanedStr === cleanedStr.split ('').reverse ().join ('');
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
//
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX:
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false

//  here if the pattern had three different things so the array should had 3 different things to be true

const samePattern = (str, arr) => {
  if (str.length !== arr.length) return false;
  const strMap = new Map ();
  const arrMap = new Map ();

  for (let i = 0; i < arr.length; i++) {
    strMap.set (str[i], arr[i]);
    arrMap.set (arr[i], str[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (strMap.get (str[i]) !== arr[i] || arrMap.get (arr[i]) !== str[i]) {
      return false;
    }
  }
  return true;
};
// -------------------------------------------------------------------------------------------------------

module.exports = {recursionPattern, filterLinks, isPalindrome, samePattern};
