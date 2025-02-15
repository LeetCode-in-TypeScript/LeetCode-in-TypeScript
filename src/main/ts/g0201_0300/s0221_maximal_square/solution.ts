// #Medium #Array #Dynamic_Programming #Matrix #Dynamic_Programming_I_Day_16
// #Top_Interview_150_Multidimensional_DP #Big_O_Time_O(m*n)_Space_O(m*n)
// #2023_10_09_Time_83_ms_(79.70%)_Space_50.2_MB_(56.39%)

function maximalSquare(matrix: string[][]): number {
    const m = matrix.length
    if (m === 0) {
        return 0
    }
    const n = matrix[0].length
    if (n === 0) {
        return 0
    }
    const dp: number[][] = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    let max = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                // 1 + minimum from cell above, cell to the left, cell diagonal upper-left
                const next = 1 + Math.min(dp[i][j], Math.min(dp[i + 1][j], dp[i][j + 1]))
                // keep track of the maximum value seen
                if (next > max) {
                    max = next
                }
                dp[i + 1][j + 1] = next
            }
        }
    }
    return max * max
}

export { maximalSquare }
