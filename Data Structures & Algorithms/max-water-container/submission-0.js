class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxAreaSoFar = 0;
        let left = 0;
        let right = heights.length - 1;
        while (left < right) {
            const lowestBar = Math.min(heights[left], heights[right]);
            maxAreaSoFar = Math.max(maxAreaSoFar, (right - left) * lowestBar);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxAreaSoFar;
        // (right - left) * heights[]
    }
}
