/**
 *One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
https://www.freecodecamp.com/challenges/caesars-cipher
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode() 
 * 
 */


function rot13(str) { // LBH QVQ VG!
  var charsArray=[];
  for(i=0;i<str.length;i++)
    charsArray.push(str.charCodeAt(i));
  charsArray = charsArray.map(function(number){
    if(number>=65 && number<=90){
      number +=13;
      if(number>90)
        number-=26;
    }
    return number;  
  });
  charsArray = charsArray.map(function(number){
    return String.fromCharCode(number);
  });
  return charsArray.join("");
}

// Change the inputs below to test
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");