class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sanitizedWord = s.toLowerCase().split('').filter(c => this.isAlphanumeric(c));
        let i = 0;
        let j = sanitizedWord.length - 1;
        while (i < j) {
            if (sanitizedWord[i] !== sanitizedWord[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    isAlphanumeric(char) {
        return /^[a-zA-Z0-9]+$/.test(char);
    }
}
