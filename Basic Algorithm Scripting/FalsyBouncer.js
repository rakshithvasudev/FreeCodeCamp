/**
https://www.freecodecamp.com/challenges/falsy-bouncer 
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Remember to use Read-Search-Ask if you get stuck. Write your own code.
Here are some helpful links:
Boolean Objects
Array.prototype.filter()
 *
 */


function bouncer(arr) {
  var removed = arr.filter(function(element){
    return !!element; 
  });
  
  return removed;
}

bouncer([7, "ate", "", false, 9]);


//second solution


function bouncer(arr) {
  var removed = arr.filter(function(element){
    return Booolean(element); 
  });
  
  return removed;
}

bouncer([7, "ate", "", false, 9]);