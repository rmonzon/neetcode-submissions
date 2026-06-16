class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = '';
        for (const st of strs) {
            encodedStr += st.length + '#' + st;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedStr = [];
        let lastNumIndex = 0;
        let validSub = '';
        for (let i = 0; i < str.length; i++) { 
            if (str[i] === '#') {
                let charCount = str.slice(lastNumIndex, i);
                if (this.isNumber(charCount)) {
                    validSub = '';
                    while (charCount > 0) {
                        validSub += str[++i];
                        charCount--;
                    }        
                    lastNumIndex = i + 1;
                    decodedStr.push(validSub);
                }
            }
        }
        return decodedStr;
    }

    isNumber(str) {
        return /^\d+$/.test(str);
    }
}
