class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const existingNumsHash = new Map();
        for (const num of nums) {
            existingNumsHash.set(num, num);
        }
        for (let i = 0; i <= nums.length; i++) {
            if (!existingNumsHash.has(i)) {
                return i;
            }
        }
    }
}
