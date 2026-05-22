class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let counts = {};
        for (let i = 0; i < nums.length; i++) {
            if (counts[nums[i]] === undefined) {
                counts[nums[i]] = 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
