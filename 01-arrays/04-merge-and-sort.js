function mergeAndSortArray(arr1, arr2) {
    // same as arr1.concat(arr2)
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

function mergeV2(arr1, arr2) {
    const mergedArray = [];
    for (const arr of [arr1, arr2]) {
        for (const num of arr) {
            mergedArray.push(num)
        }
    }
    return mergedArray.sort((a, b) => a - b);
}

function mergeV3(arr1, arr2) {
    const mergedArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let index1 = 1;
    let index2 = 1;

    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            mergedArray.push(arr1Item);
            arr1Item = arr1[index1];
            index1++;
        } else {
            mergedArray.push(arr2Item);
            arr2Item = arr2[index2];
            index2++;
        }
    }
    return mergedArray;
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

console.log(mergeAndSortArray(arr1, arr2));
console.log(mergeV2(arr1, arr2));
console.log(mergeV3(arr1, arr2));