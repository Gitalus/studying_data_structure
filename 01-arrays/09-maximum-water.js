const array1 = [7, 1, 2, 3, 9];

var maxAreaBruteForce = function (height) {
    let size = height.length;
    let maxAreaWater = 0;

    for (let start = 0; start < size - 1; start++) {
        for (let corredor = start + 1; corredor < size; corredor++) {
            const minHeight = Math.min(height[start], height[corredor])
            const area = minHeight * (corredor - start);
            maxAreaWater = Math.max(area, maxAreaWater)
        }
    }
    return maxAreaWater;
};


// shifting pointers
var maxArea = function (height) {
    let maxAreaWater = 0;
    let left = 0,
        right = height.length - 1;
    while (left < right) {
        let minHeight = Math.min(height[left], height[right]);
        let areaTemp = minHeight * (right - left);
        maxAreaWater = Math.max(areaTemp, maxAreaWater);

        height[left] > height[right] ? right-- : left++;
    }
    return maxAreaWater;
};

console.log(maxAreaBruteForce(array1)); // 28
console.log(maxArea(array1)); // 28