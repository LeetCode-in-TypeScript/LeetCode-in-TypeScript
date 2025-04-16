// #Medium #Top_100_Liked_Questions #String #Dynamic_Programming #LeetCode_75_DP/Multidimensional
// #Algorithm_II_Day_17_Dynamic_Programming #Dynamic_Programming_I_Day_19
// #Udemy_Dynamic_Programming #Big_O_Time_O(n*m)_Space_O(n*m)
// #2025_03_28_Time_50_ms_(69.40%)_Space_85.72_MB_(16.94%)

function longestCommonSubsequence(text1: string, text2: string): number {
    const n: number = text1.length
    const m: number = text2.length
    const dp: number[][] = new Array(n + 1).fill(null).map(() => new Array(m + 1).fill(0))
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[n][m]
}

export { longestCommonSubsequence }
