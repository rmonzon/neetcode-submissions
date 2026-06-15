class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let start = 0;
        let reps = new Map();
        let longestSize = 0;
        for (let end = 0; end < s.length; end++) {
            while (reps.has(s[end])) {
                reps.delete(s[start]);
                start++;
            }
            reps.set(s[end], 1);
            longestSize = Math.max(longestSize, end - start + 1);
        }
        return longestSize;
    }
}
