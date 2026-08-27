class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== ']') {
                stack.push(s[i]);
            } else {
                let popped = '';
                let currStr = '';
                let currNum = '';
                // extract string between brackets
                while (popped !== '[') {
                    currStr = popped + currStr;
                    popped = stack.pop();
                }
                // pop the next element which is a number
                popped = stack.pop();
                while (this.isNumber(popped)) {
                    currNum = popped + currNum;
                    popped = stack.pop();
                }
                // check for undefined when we're at the beginning of the stack
                stack.push(popped !== undefined ? popped : '');
                const decodedStr = currStr.repeat(currNum);
                // Add the decoded string to the stack
                stack.push(decodedStr);
            }
        }
        return stack.join('');
    }

    isNumber(str) {
        return /^\d+$/.test(str);
    }
}
