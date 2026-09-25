class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let freshOranges = 0;
        let time = 0;
        const queue = [];
        const ROWS = grid.length;
        const COLS = grid[0].length;
        // initialize the queue with all initial rotten oranges and count the fresh ones
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    freshOranges++;
                }
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                }
            }
        }
        // possible moves (right, down, left, up) from any give cell in the grid
        const directions = [
            [0,1], [1,0], [0,-1], [-1,0],
        ];
        while (queue.length > 0 && freshOranges > 0) {
            // size represents the oranges that rotted in the previous minute
            const size = queue.length;
            // process every position of rotten oranges in the queue for the next minute
            for (let i = 0; i < size; i++) {
                const [r, c] = queue.shift();
                // for each position in the queue, check adjacent cells (right, down, left, up)
                for (const [dr, dc] of directions) {
                    const row = r + dr;
                    const col = c + dc;
                    // if cell in [row,col] position is out of bounds or contains anything but a fresh fruit, skip this iteration
                    if (row < 0 || col < 0 || row === ROWS || col === COLS || grid[row][col] !== 1) {
                        continue;
                    }
                    grid[row][col] = 2;
                    freshOranges--;
                    // push new position of a newly rotten orange to be processed
                    queue.push([row, col]);
                }
            }
            time++;
        }  
        return freshOranges > 0 ? -1 : time;
    }
}
