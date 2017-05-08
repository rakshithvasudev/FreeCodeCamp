/**
Return the length of the longest word in the provided sentence.
https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string
Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length
*/


function findLongestWord(str) {
  maxCount = 0;
  strWords = str.split(" ");
  for(i=0;i<strWords.length;i++){
    if(strWords[i].length>maxCount)
      maxCount=strWords[i].length;
  }
    return maxCount;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


