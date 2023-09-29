// #Medium #Top_100_Liked_Questions #Array #Dynamic_Programming #Backtracking
// #Big_O_Time_O(n*(sum+s))_Space_O(n*(sum+s))
// #2023_09_30_Time_77_ms_(81.99%)_Space_48.3_MB_(62.73%)

function findTargetSumWays(nums: number[], s: number): number {
    let sum: number = 0
    s = Math.abs(s)

    for (const num of nums) {
        sum += num
    }

    // Invalid s, just return 0
    if (s > sum || (sum + s) % 2 !== 0) {
        return 0
    }

    const dp: number[][] = new Array((sum + s) / 2 + 1).fill(null).map(() => new Array(nums.length + 1).fill(0))
    dp[0][0] = 1

    // Empty knapsack must be processed specially
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            dp[0][i + 1] = dp[0][i] * 2
        } else {
            dp[0][i + 1] = dp[0][i]
        }
    }

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            dp[i][j + 1] += dp[i][j]
            if (nums[j] <= i) {
                dp[i][j + 1] += dp[i - nums[j]][j]
            }
        }
    }

    return dp[(sum + s) / 2][nums.length]
}
export { findTargetSumWays }
