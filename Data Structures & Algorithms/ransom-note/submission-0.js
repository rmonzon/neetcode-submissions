class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        if (magazine.length < ransomNote.length) {
            return false;
        }
        const hash = {};
        for (let i = 0; i < magazine.length; i++) {
            hash[magazine[i]] = (hash[magazine[i]] ?? 0) + 1;
        }
        for (let i = 0; i < ransomNote.length; i++) {
            if (hash[ransomNote[i]] > 0) {
                hash[ransomNote[i]]--;
            } else {
                return false;
            }
        }
        return true;
    }
}
