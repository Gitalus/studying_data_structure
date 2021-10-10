var twoSum = function (nums, target) {
    let firstIndex = 0;
    let lastIndex = nums.length - 1;

    while (firstIndex < lastIndex) {
        let currentSum = nums[firstIndex] + nums[lastIndex];
        if (currentSum === target) {
            return [firstIndex, lastIndex];
        } else if (currentSum > target) {
            lastIndex--;
        } else {
            firstIndex++;
        }
    }
};