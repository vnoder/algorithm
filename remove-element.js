// Given an array and a value, remove all instances of that > value in place and return the new length.
// The order of elements can be changed. It doesn't matter what you leave beyond the new length.
'use strict';
module.exports = removeValue;

/**
 * remove specified value from array
 * @param {*} arr 
 * @param {*} value 
 */
function removeValue(arr, value) {
    let j = 0;
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === value) {
            continue;
        }

        if (j !== i) {
            arr[j] = arr[i];
        }
        j++;
    }
    return j;
}