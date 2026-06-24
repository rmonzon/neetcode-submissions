class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        const totalIntervals = intervals.length;
        if (totalIntervals === 1) {
            return 0;
        }
        intervals.sort((a, b) => a[1] - b[1]);
        let count = 1;
        let end = intervals[0][1];
        for (let i = 1; i < totalIntervals; i++) {
            if (intervals[i][0] >= end) {
                end = intervals[i][1];
                count++;
            }
        }
        return totalIntervals - count;
    }
}
