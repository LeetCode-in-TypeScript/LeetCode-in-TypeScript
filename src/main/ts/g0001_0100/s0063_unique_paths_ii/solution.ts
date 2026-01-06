// #Medium #Array #Dynamic_Programming #Matrix #Dynamic_Programming_I_Day_15
// #Top_Interview_150_Multidimensional_DP #2025_04_02_Time_0_ms_(100.00%)_Space_55.75_MB_(56.77%)

function uniquePathsWithObstacles(grid: number[][]): number {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0
                continue
            }

            if (i === 0 && j === 0) {
                grid[i][j] = 1
                continue
            }

            const fromTop = grid[i - 1]?.[j] ?? 0
            const fromLeft = grid[i]?.[j - 1] ?? 0
            grid[i][j] = fromTop + fromLeft
        }
    }

    return grid.at(-1)!.at(-1)!
}

export { uniquePathsWithObstacles }
