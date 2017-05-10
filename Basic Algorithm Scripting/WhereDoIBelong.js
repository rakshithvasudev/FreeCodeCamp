/**
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
https://www.freecodecamp.com/challenges/where-do-i-belong
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.sort()

 */

function getIndexToIns(arr, num) {
  arr = arr.sort(function(ele1, ele2){
    return ele1-ele2;
  });

   for(i=0;i<arr.length-1;i++){
     if(num>arr[i] && num<arr[i+1])
       return i+1;
     if(num===arr[i])
       return i;  
   }
  
  if(num>arr[arr.length-1])
    return arr.length;
}

getIndexToIns([10, 20, 30, 40, 50], 35);
