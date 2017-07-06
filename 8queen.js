/**
 * Created by vd on 06/07/17.
 * 8 皇后问题
 */
'use strict';
module.exports = queen;

let sum = 0; //可行的解

/**
 * 是否为合法位置
 * @param k
 * @param x
 * @returns {boolean}
 */
function isLegalPlace(x, k) {
    for (let j = 1; j < k; j++) {
        if (Math.abs(x[k] - x[j]) === Math.abs(k - j) || x[j] === x[k]) {
            return false;
        }
    }
    return true;
}

/**
 * 回溯搜索
 * @param num - 皇后数
 * @param x   - 数组
 * @param t   - 递归深度
 */
function backtrack(num, x, t) {
    if (t > num) {//可行解
        sum++;
        console.log(x.slice(1));
    } else {
        for (let i = 1; i <= num; i++) {
            x[t] = i;
            if (isLegalPlace(x, t)) {
                backtrack(num, x, t + 1);
            }
        }
    }
}

/**
 * n皇后问题
 * @param num - 皇后数量
 */
function queen(num) {
    let x = new Array(num + 1).fill(0);
    backtrack(num, x, 1);
    console.log(`${num} 皇后问题共有: ${sum} 种解法`);
}