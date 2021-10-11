/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hashMap = {};
    for (const index in nums) {
        const comp = target - nums[index]; // "comp": complement
        if (hashMap[comp]) {
            return [hashMap[comp], index];
        } else {
            hashMap[nums[index]] = index;
        }
    }
};