/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const size = nums.length;
    for (let i = size - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};

function moveZeroesV2(nums) {
    let nonZeroFounds = 0;
    let sizeNums = nums.length;
    for (let i = 0; i < sizeNums; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroFounds++] = nums[i];
        }
    }

    for (let i = nonZeroFounds; i < sizeNums; i++) {
        nums[i] = 0;
    }
}

function moveZeroesV3(nums) {
    for (let nonZeroFounds = 0, current = 0; current < nums.length; current++) {
        if (nums[current] !== 0) {
            let temp = nums[current];
            nums[current] = nums[nonZeroFounds];
            nums[nonZeroFounds++] = temp;
        }
    }
}

const nums = [0, 0, 1];
console.log(nums);
moveZeroesV3(nums);
console.log(nums);