class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        const rows = grid.length;
        const cols = grid[0].length;

        const dfs = (r, c) => {
            grid[r][c] = '0';
            // move right
            if (r + 1 < rows && grid[r + 1][c] === '1') {
                dfs(r + 1, c);
            }
            // move down
            if (c + 1 < cols && grid[r][c + 1] === '1') {
                dfs(r, c + 1);
            }
            // move left
            if (r - 1 >= 0 && grid[r - 1][c] === '1') {
                dfs(r - 1, c);
            }
            // move up
            if (c - 1 >= 0 && grid[r][c - 1] === '1') {
                dfs(r, c - 1);
            }
            return;
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === '1') {
                    count++;
                    dfs(i, j);
                }
            }
        }

        return count;
    }
}
