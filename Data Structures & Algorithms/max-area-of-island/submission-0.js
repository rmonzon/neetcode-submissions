class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        const rows = grid.length;
        const cols = grid[0].length;

        const dfs = (r, c) => {
            grid[r][c] = 0;
            let count = 1;
            // move right
            if (r + 1 < rows && grid[r + 1][c] === 1) {
                count += dfs(r + 1, c);
            }
            // move down
            if (c + 1 < cols && grid[r][c + 1] === 1) {
                count += dfs(r, c + 1);
            }
            // move left
            if (r - 1 >= 0 && grid[r - 1][c] === 1) {
                count += dfs(r - 1, c);
            }
            // move up
            if (c - 1 >= 0 && grid[r][c - 1] === 1) {
                count += dfs(r, c - 1);
            }
            return count;
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    maxArea = Math.max(maxArea, dfs(i, j));
                }
            }
        }

        return maxArea;
    }
}
