// #Medium #Array #Dynamic_Programming #Algorithm_I_Day_12_Dynamic_Programming
// #Dynamic_Programming_I_Day_13 #Udemy_Dynamic_Programming #Top_Interview_150_Multidimensional_DP
// #2025_04_07_Time_0_ms_(100.00%)_Space_58.24_MB_(28.24%)

function minimumTotal(triangle: number[][]): number {
    if (!triangle || triangle.length === 0) {
        return 0
    }
    const rows = triangle.length
    const cols = triangle[rows - 1].length
    const dp: number[][] = Array.from({ length: rows }, () => Array(cols).fill(-10001))
    function dfs(row: number, col: number): number {
        if (row >= triangle.length) {
            return 0
        }
        if (dp[row][col] !== -10001) {
            return dp[row][col]
        }
        const sum = triangle[row][col] + Math.min(
            dfs(row + 1, col),
            dfs(row + 1, col + 1)
        )
        dp[row][col] = sum
        return sum
    }
    return dfs(0, 0)
}

export { minimumTotal }
