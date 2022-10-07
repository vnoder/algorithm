/**
 * Created by vd on 08/03/18.
 * 希尔排序
 */
'use strict';
module.exports = shellSort;

function shellSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < arr.length; i++) {
            let j = i;
            while (j - gap >= 0 && arr[j] < arr[j - gap]) {
                let val      = arr[j - gap];
                arr[j - gap] = arr[j];
                arr[j]       = val;
                j -= gap;
            }
        }
    }

    return arr;
}

function shellSort3(arr) {
    var len = arr.length;
    var gap     = Math.floor(len / 2);
    while (gap !== 0) {
        for (var i = gap; i < len; i++) {
            var temp = arr[i];
            var j;
            for (j = i - gap; j >= 0 && temp < arr[j]; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return arr;
}

console.log(shellSort3([1, 3, 2, 9, 2,13,67,3,11]));