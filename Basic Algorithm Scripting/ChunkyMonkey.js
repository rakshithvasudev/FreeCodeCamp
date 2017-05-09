/**
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
https://www.freecodecamp.com/challenges/chunky-monkey
Remember to use Read-Search-Ask if you get stuck. Write your own code.
Here are some helpful links:
Array.prototype.push()
Array.prototype.slice()
 *
 */
 
 function chunkArrayInGroups(arr, size) {
 var modified = [];
 var partialSplit=[];
 var counter=0; 
 var perfectDivision = false;   

  while(counter<arr.length){ 
     partialSplit.push(arr[counter]);
    
    if((counter+1)%size===0){
          modified.push(partialSplit);
          partialSplit=[];
          
          if(counter+1===arr.length)
          	perfectDivision=true;
    }	    
      if((arr.length-1===counter && !perfectDivision)){
          modified.push(partialSplit);
      }
      counter++; 
  }
  return modified;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);


