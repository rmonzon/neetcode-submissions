class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let start = 0;
        let reps = {};
        let totalFruits = 0
        for (let end = 0; end < fruits.length; end++) {
            reps[fruits[end]] = (reps[fruits[end]] || 0) + 1;
            while (Object.keys(reps).length > 2) {
                reps[fruits[start]]--;
                if (reps[fruits[start]] === 0) {
                    delete reps[fruits[start]];
                }
                start++;
            }
            totalFruits = Math.max(end - start + 1, totalFruits);
        }
        return totalFruits;
    }
}
