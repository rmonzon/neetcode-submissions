class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let prev1 = 1;
        let prev2 = 1
        let curr = 1;
        for (let i = 2; i <= n; i++) {
            curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;            
        }
        return curr;
    }
}
