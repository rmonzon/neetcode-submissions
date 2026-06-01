class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfitSoFar = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                maxProfitSoFar = Math.max(maxProfitSoFar, prices[j] - prices[i]);
            }
        }
        return maxProfitSoFar > 0 ? maxProfitSoFar : 0;
    }
}
