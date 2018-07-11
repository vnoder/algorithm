// Given two sorted integer arrays A and B, merge B into A as one sorted array.
// Note: You may assume that A has enough space (size that is greater or equal to m + n) to hold additional elements from B. 
// The number of elements initialized in A and B are m and n respectively.

'use strict';
module.exports = merge;

/**
 * merge sorted two array
 * @param {*} arrA 
 * @param {*} m 
 * @param {*} arrB 
 * @param {*} n 
 */
function merge(arrA, m, arrB, n) {
    let indexA = m - 1;
    let indexB = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
        if (indexB == -1 || (indexA >= 0 && arrA[indexA] >= arrB[indexB])) {
            arrA[i] = arrA[indexA];
            indexA--;
        } else {
            arrA[i] = arrB[indexB];
            indexB--;
        }
    }
    return arrA;
}