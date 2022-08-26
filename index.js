function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i< array.length; i++){
    let rem = target - array[i];

    for(let j=i+1; j<array.length; j++){
      if(rem === array[j]){
        return true;
      }
    }
  }
  return false;
}



/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  1. Loop through the array 
  2. Subtract the individual elements from the target to get their difference.
  3. Loop through the array and check if the difference is an element in the rest of the array.
  4. Return true if the difference is present and false if not.

*/

/*
  Add written explanation of your solution here
  Loop through the array using a for loop and subtract the individual elements from the target to get their difference.
  Loop through the array again. This time, however, initialize the counter variable in the for loop to be higher than the first loop by one index. This is to ensure that when checking whether the difference is present, we compare an element aganist the rest of the elements.
  Check whether the difference is present using an if statement and return true if present. 
  If none of the element pairs sum up to the target, return false outside the for loops.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
