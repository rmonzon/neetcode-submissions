class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let start = 0;
        let longestSub = 0;
        let reps = {};
        let maxFreq = 0;
        for (let end = 0; end < s.length; end++) {
            reps[s[end]] = (reps[s[end]] || 0) + 1;
            maxFreq = Math.max(maxFreq, reps[s[end]]);
            while (end - start + 1 - maxFreq > k) {
                reps[s[start]]--;
                start++;
            }
            longestSub = Math.max(longestSub, end - start + 1);
        }
        return longestSub;
    }
}
