class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const occ = [0, 0, 0];
        for (const num of nums) {
            occ[num]++;
        }
        for (let i = 0; i < nums.length; i++) {
            if (occ[0] > 0) {
                this.replaceElement(occ, nums, i, 0);
            } else if (occ[1] > 0) {
                this.replaceElement(occ, nums, i, 1);
            } else if (occ[2] > 0) {
                this.replaceElement(occ, nums, i, 2);
            }
        }
    }

    replaceElement(occ, nums, i, index) {
        nums[i] = index;
        occ[index]--;
    }
}
