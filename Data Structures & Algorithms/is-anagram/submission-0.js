class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const chars = new Map();
        for (let i = 0; i < s.length; i++) {
            if (chars.has(s[i])) {
                chars.set(s[i], chars.get(s[i]) + 1);
            } else {
                chars.set(s[i], 1);
            }
        }
        for (let i = 0; i < t.length; i++) {
            if (chars.has(t[i]) && chars.get(t[i]) - 1 < 0) {
                return false;
            } else {
                chars.set(t[i], chars.get(t[i]) - 1);
            }
        }
        for (const value of chars.values()) {
            if (value > 0) {
                return false;
            }
        }
        return true;
    }
}
