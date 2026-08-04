class Solution {
    /**
     * @param {string[]} wordsDict
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    shortestDistance(wordsDict, word1, word2) {
        let indexA = -1;
        let indexB = -1;
        let minDistance = wordsDict.length;
        for (let i = 0; i < wordsDict.length; i++) {
            if (wordsDict[i] === word1) {
                indexA = i;
            } else if (wordsDict[i] === word2) {
                indexB = i
            }
            if (indexA !== -1 && indexB !== -1) {
                minDistance = Math.min(minDistance, Math.abs(indexA - indexB));
            }
        }
        return minDistance;
    }
}
