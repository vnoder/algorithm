// Given an array of intergers, find two numbers such that they add up to a specific target number. 
// The function twoSum should return indices of the two numbers such that they add up to the target, 
// where index1 must be less than index2 Please note that your returned answers (both index1 and index2) 
// are not zero-based.You may assume that each input would have exactly one solution.
// Input: numbers={2, 7, 11, 15}, target=9 Output: index1=1, index2=2

'use strict';
module.exports = findSumIndex;

function findSumIndex(arr, value) {
    let indexMap = {};
    for (let i = 0, len = arr.length; i < len; i++) {
        indexMap[arr[i]] = i;
    }

    for (let i = 0, len = arr.length; i < len; i++) {
        if (indexMap[value - arr[i]] >= 0) {
            console.log(`index1=${i + 1}, index2=${indexMap[value - arr[i]] + 1}`)
            return;
        }
    }
}

// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
// Find all unique triplets in the array which gives the sum of zero.Note: Elements in a triplet (a,b,c) must 
// be in non-descending order. (ie, a ≤ b ≤ c) The solution set must not contain duplicate triplets.

/**
 * find triplets in the array which give the sum of zero
 * @param {*} arr 
 */
function findTriplets(arr){

}