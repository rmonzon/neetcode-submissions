class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfitSoFar = 0;
        let i = 0;
        let j = i+1;
        while (j < prices.length) {
            if (prices[i] < prices[j]) {
                maxProfitSoFar = Math.max(maxProfitSoFar, prices[j] - prices[i]);
            } else {
                i = j;
            }
            j++;
        }
        return maxProfitSoFar;
    }
}
