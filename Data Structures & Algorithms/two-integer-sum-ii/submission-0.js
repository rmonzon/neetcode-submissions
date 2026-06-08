class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        while (i < j) {
            const currentSum = numbers[i] + numbers[j];
            if (currentSum === target) {
                return [i+1, j+1];
            }
            if (currentSum > target) {
                j--;
            } else {
                i++;
            }
        }
    }
}
