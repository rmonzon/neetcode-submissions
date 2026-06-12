class Solution {
    /**
     * @param {number[]} cardPoints
     * @param {number} k
     * @return {number}
     */
    maxScore(cardPoints, k) {
        const sum = cardPoints.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0,
        );
        return this.minSumOfKElements(cardPoints, cardPoints.length - k, sum);
    }
    minSumOfKElements(nums, k, totalSum) {
        let currSubArraySum = 0;
        for (let j = 0; j < k; j++) {
            currSubArraySum += nums[j];
        }
        let i = 0;
        let sum = 0;
        for (let x = k; x < nums.length; x++) {
            sum = Math.max(totalSum - currSubArraySum, sum);
            currSubArraySum = currSubArraySum - nums[i] + nums[x];
            i++;
        }
        sum = Math.max(totalSum - currSubArraySum, sum);
        return sum;
    }
}
