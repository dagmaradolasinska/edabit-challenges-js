/*
Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.
e.g. calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
*/

function calculateDifference(obj, limit) {
    let sum = 0;
    for (let x in obj) {
      sum += obj[x]
    }
    return sum - limit;
  }
