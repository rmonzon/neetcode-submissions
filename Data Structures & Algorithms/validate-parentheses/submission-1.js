class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for (const c of s) {
            if (this.isOpenBracket(c)) {
                stack.push(c);
            } else {
                if (!this.isMatchingBrackets(stack.pop(), c)) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }

    isOpenBracket(c) {
        return c === '(' || c === '[' || c === '{';
    }

    isClosingBracket(c) {
        return c === ')' || c === ']' || c === '}';
    }

    isMatchingBrackets(a, b) {
        if (a === '(' && b === ')') {
            return true;
        }
        if (a === '[' && b === ']') {
            return true;
        }
        if (a === '{' && b === '}') {
            return true;
        }
        return false;
    }
}
