// Given a sorted array, remove the duplicates in place such that > each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.
// For example, Given input array A = [1,1,2],
// Your function should return length = 2, and A is now [1,2].

'use strict';
module.exports = removeValue;

/**
 * remove specified value from array
 * @param {*} arr 
 * @param {*} value 
 */
function removeValue(arr) {
    if (arr.length <= 1) {
        return arr.length;
    }

    let j = 0;
    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[j] == arr[i]) {
            continue;
        }

        if (arr[j] != arr[i] && i - j > 1) {
            j++;
            arr[j] = arr[i];
            continue;
        }

        j++;
    }
    return j + 1;
}