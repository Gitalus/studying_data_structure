function mergeAndSortArray(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

console.log(mergeAndSortArray(arr1, arr2));