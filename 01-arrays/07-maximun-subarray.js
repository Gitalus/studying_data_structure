// find max sum of subarray of a given array
// two versions: sum is always < 0
// sum can be negative

// sum always positive
function maxSumSubstring(nums) {
    let max = nums[0];
    let sum = 0;
    for (const num of nums) {
        sum += num;
        if (sum > max) max = sum;
        if (sum < 0) sum = 0;
    }
    return max;
}

console.log(maxSumSubstring([2, 3, -5, 5, 1, -7]));

function maxSumSubstr(nums) {
    let max = nums[0];
    let sum = 0;
    let min = 0;
    for (const num of nums) {
        sum += num;
        if (sum - min > max) max = sum - min;
        if (sum < min) min = sum;
    }
    return max;
}

console.log(maxSumSubstr([-4, -2, -5, -1, -7]));