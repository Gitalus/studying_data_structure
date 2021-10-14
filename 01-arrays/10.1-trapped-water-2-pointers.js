const arrayOfWater = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]; // 8
const test = [2, 3, 4, 1, 6, 6, 6, 1, 0, 1]; // 4

var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxLeft = 0;
    let maxRight = 0;
    let sumWater = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= maxLeft ? (maxLeft = height[left]) : sumWater += maxLeft - height[left];
            left++;
        }
        else {
            height[right] >= maxRight ? (maxRight = height[right]) : sumWater += maxRight - height[right];
            right--;
        }
    }
    return sumWater;
};

console.log(trap(arrayOfWater));
console.log(trap(test));