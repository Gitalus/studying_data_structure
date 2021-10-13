const arrayOfWater = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]; // 8
const test = [2, 3, 4, 1, 6, 6, 6, 1, 0, 1]; // 4
// [] = 0;
// [3] = 0;
// [3, 4, 3] = 0;

var trap = function (height) {
    const size = height.length;
    const biggest_left = [];
    const biggest_right = new Array(size);
    let maxLeft = 0;
    let maxRight = 0;
    for (let i = 0, j = size - 1; i < size; i++) {
        maxLeft = Math.max(maxLeft, height[i]);
        maxRight = Math.max(maxRight, height[j])
        biggest_left.push(maxLeft);
        biggest_right[j--] = maxRight;
    }

    let sumWater = 0;
    for (let i = 0; i < size; i++) {
        let min = Math.min(biggest_left[i], biggest_right[i]);

        if (biggest_left[i] > height[i] && height[i] < biggest_right[i]) {
            sumWater += min - height[i];
        }
    }
    return sumWater;
};

console.log(trap(arrayOfWater));
console.log(trap(test));
