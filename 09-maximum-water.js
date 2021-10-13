const array1 = [7, 1, 2, 3, 9];

function findMaximumWater(arr) {
    let size = arr.length;
    let maxAreaWater = 0;

    for (let start = 0; start < size - 1; start++) {
        for (let corredor = start + 1; corredor < size; corredor++) {
            let area = Math.min(arr[start], arr[corredor]) * (corredor - start);
            if (area > maxAreaWater) {
                maxAreaWater = area;
            }
        }
    }
    return maxAreaWater;
}

console.log(findMaximumWater(array1)); // 28