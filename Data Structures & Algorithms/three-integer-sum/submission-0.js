class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const pairs = [];
        for (let i = 0; i < nums.length; i++) {
            let currNumber = nums[i];
            if (i > 0 && currNumber === nums[i - 1]) {
            continue;
            }
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = currNumber + nums[left] + nums[right];
                if (sum > 0) {
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    pairs.push([currNumber, nums[left], nums[right]]);
                    left++;
                    while (nums[left] === nums[left - 1] && left < right) {
                        left++;
                    }
                }
            }
        }
        return pairs;
    }
}
