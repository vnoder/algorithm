// Given a sorted array, remove the duplicates in place such that > each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.
// For example, Given input array A = [1,1,2],
// Your function should return length = 2, and A is now [1,2].

'use strict';
module.exports = {
    removeValue, removeValueAllowTwice
};

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

// Follow up for "Remove Duplicates": What if duplicates are allowed at most twice?
// For example, Given sorted array A = [1,1,1,2,2,3],
// Your function should return length = 5, and A is now [1,1,2,2,3].
/**
 * remove specified value from array,allow same value at most twice
 * @param {*} arr 
 */
function removeValueAllowTwice(arr) {
    if (arr.length <= 1) {
        return arr.length;
    }

    let j = 0;
    let tmp = 0;
    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[j] == arr[i]) {
            tmp++;
            if(tmp <= 2){
                j++;
            }
            continue;
        }

        if (arr[j] != arr[i] && i - j > 1) {
            tmp = 0;
            arr[j] = arr[i];
            continue;
        }

        j++;
    }
    return j + 1;
}