/**
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string
Remember to use Read-Search-Ask if you get stuck. Write your own code.
Here are some helpful links:
Global String Object
 */


function repeatStringNumTimes(str, num) {
  var repeations = [];
  for(i=0;i<num;i++)
    repeations.push(str);
  return repeations.join("");
}
repeatStringNumTimes("abc", 3);
