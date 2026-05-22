class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // [-1,-2,-3,-4,-5], target = -8, answer = [2, 4]
        let hash = new Map();
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (hash.has(diff)) {
                return [hash.get(diff), i];
            }
            hash.set(nums[i], i);
        }
        return [];
    }
}
