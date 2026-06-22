class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        let buckets = Array.from({ length: nums.length + 1}, () => []);
        for (const n of nums) {
            freq[n] = (freq[n] || 0) + 1;
        }
        for (const key in freq) {
            buckets[freq[key]].push(parseInt(key));
        }

        let res = [];
        for (let i = buckets.length - 1; i > 0; i--) {
            if (buckets[i].length > 0) {
                res.push(...buckets[i].slice(0, k));
            }
            if (res.length === k) {
                return res;
            }
        }
    }
}
