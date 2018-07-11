// Given a non-negative number represented as an array of digits, plus one to the number.
// The digits are stored such that the most significant digit is at the head of the list.

// Input : [1, 2, 4]
// Output : [1, 2, 5]

// Input : [9, 9, 9]
// Output : [1, 0, 0, 0]

'use strict';
module.exports = plusOne;

/**
 * plus one to arr represent a big data
 * @param {*} arr 
 * @param {*} value 
 */
function plusOne(arr, value) {
    for (let j = arr.length - 1; j >= 0; j--) {
        let sum = arr[j] + value;
        let quotient = Math.floor(sum / 10);
        if (quotient > 0) {
            arr[j] = sum % 10;
            value = quotient;
            if (j === 0) {
                arr.unshift(value);
            }
        } else {
            arr[j] += value;
            break;
        }
    }
    return arr;
}