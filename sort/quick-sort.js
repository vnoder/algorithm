/**
 * Created by vd on 08/03/18.
 * 快速排序
 */
'use strict';
module.exports = quickSort;

/**
 * 快速排序
 * @param arr
 * @param low
 * @param high
 */
function quickSort2(arr, low, high) {
    if (low >= high) {
        return arr;
    }

    let j = partition(arr, low, high);
    console.error(arr);
    quickSort(arr, low, j - 1);
    quickSort(arr, j + 1, high);
    return arr;
}

/**
 * 切分
 * @param arr
 * @param low
 * @param high
 */
function partition(arr, low, high) {
    let i = low, j = high + 1, v = arr[low];

    while (true) {
        while (arr[i++] < v) {
        }
        while (v < arr[j--]) {
        }

        if (i >= j) {
            break;
        }
        console.error(low, high, i, j);
        exchange(arr, i, j);
    }

    exchange(arr, low, j);
    return j;
}

function exchange(arr, i, j) {
    let temp = arr[i];
    arr[i]   = arr[j];
    arr[j]   = temp;
    return arr;
}


function quickSort(arr, low, high) {
    if (low < high) {
        let i = low, j = high, val = arr[low];
        while (i < j) {
            // 从右向左找第一个小于x的数
            while (i < j && arr[j] >= val) {
                j--;
            }
            if (i < j) {
                arr[i++] = arr[j];
            }

            // 从左向右找第一个大于等于x的数
            while (i < j && arr[i] < val) {
                i++;
            }
            if (i < j) {
                arr[j--] = arr[i];
            }
        }
        arr[i] = val;
        quickSort(arr, low, i - 1); // 递归调用
        quickSort(arr, i + 1, high);
    }
    return arr;
}

//let arr1 = [3, 10, 4, 1, 2, 6, 5];
let arr2 = [ 1, 2, 3, 4, 5, 6, 10,3];
//console.error(arr1);
//console.error(quickSort(arr1, 0, arr1.length - 1));
console.error(quickSort(arr2, 0, arr2.length - 1));
//console.error(quickSort2(arr2, 0, arr2.length - 1));