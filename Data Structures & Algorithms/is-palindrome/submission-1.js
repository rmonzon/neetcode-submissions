class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase().split('').filter(w => !/[^a-zA-Z0-9]/.test(w)).join('');
        let start = 0;
        let end = s.length - 1; // end = 3
        while (start < end) {
            // if the first letter is not equal to the last letter, the word is not a palindrome
            if (s[start] !== s[end]) {
                return false;
            }
            // if the first and last letters are equal, we check the other letters
            start++;
            end--;
        }
        return true;
    }
}
