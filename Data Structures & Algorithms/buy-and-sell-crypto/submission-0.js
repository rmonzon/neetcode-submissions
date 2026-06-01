class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // [1, 9, 7, 5, 3, 1] = buy prices[0], sell prices[1], profit = 8
        // [7, 1, 5, 3, 6, 4], profit = 5
        let maxProfitSoFar = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                maxProfitSoFar = Math.max(maxProfitSoFar, prices[j] - prices[i]);
            }
        }
        return maxProfitSoFar > 0 ? maxProfitSoFar : 0;
    }
}
