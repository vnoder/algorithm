/**
 * Created by vd on 08/03/18.
 * 插入排序
 */
'use strict';
module.exports = insertSort;

function insertSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    for (let i = 1, len = arr.length; i < len; i++) {
        let val = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (val < arr[j]) {
                arr[j + 1] = arr[j];
                arr[j]     = val;
            }
        }
    }
    return arr;
}