class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const match = {'}': '{', ']':'[', ')': '('};
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            // found a closing bracket
            if (match[s[i]]) {
                const top = stack.pop();
                if (match[s[i]] !== top) {
                    return false;
                }
            } else {
                stack.push(s[i]);  
            }    
        }
        return stack.length === 0;
    }
}
