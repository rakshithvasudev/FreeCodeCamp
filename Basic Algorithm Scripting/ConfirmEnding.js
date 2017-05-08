/**
Check if a string (first argument, str) ends with the given target string (second argument, target).
https://www.freecodecamp.com/challenges/confirm-the-ending
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
Remember to use Read-Search-Ask if you get stuck. Write your own code.
Here are some helpful links:
String.prototype.substr()
String.prototype.substring()
*
*/


function confirmEnding(str, target) {
      
  var words = str.split(" ");
  var lastWord = words[words.length-1];
  
  if(target.length==1)
    return (lastWord.charAt(lastWord.length-1)===target.charAt(target.length-1));   


  return (lastWord.charAt(lastWord.length-1)===target.charAt(target.length-1) &&
          lastWord.charAt(lastWord.length-2)===target.charAt(target.length-2));   
  
}

confirmEnding("Bastian", "n");


