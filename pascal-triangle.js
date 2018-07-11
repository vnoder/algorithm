// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5, Return
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

'use strict';
module.exports = pascalTriangle;

/**
 * Pascal's Triangle
 * @param {*} num 
 */
function pascalTriangle(num) {
    let res = [];
    res.push([1]);
    if (num == 1) {
        return res;
    }

    for (let i = 1; i < num; i++) {
        let sub = [];
        let preSub = res[i - 1];
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                sub.push(1);
            } else {
                sub.push(preSub[j - 1] + preSub[j]);
            }
        }
        res.push(sub);
    }

    return res;
}