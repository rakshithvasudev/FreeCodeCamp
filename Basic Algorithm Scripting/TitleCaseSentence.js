/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
https://www.freecodecamp.com/challenges/title-case-a-sentence
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
*/

function titleCase(str) {
 var words = str.toLowerCase().split(" ");
   for(var i=0;i<words.length;i++)
     words[i]=words[i].charAt(0).toUpperCase() + words[i].slice(1); 
  return words.join(" ");
}

titleCase("I'm a little tea pot");
