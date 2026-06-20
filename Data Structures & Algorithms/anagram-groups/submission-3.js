class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = [];
        const map = new Map();

        for (let s of strs) {
            const sorted = s.split('').sort().join('');
            if (!map.has(sorted)) {
                map.set(sorted, []);
            }
            map.get(sorted).push(s);
        }
        return Array.from(map.values());
    }
}