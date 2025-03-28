// #Medium #Top_100_Liked_Questions #Array #Dynamic_Programming #Breadth_First_Search
// #Algorithm_II_Day_18_Dynamic_Programming #Dynamic_Programming_I_Day_20
// #Level_2_Day_12_Dynamic_Programming #Top_Interview_150_1D_DP #Big_O_Time_O(m*n)_Space_O(amount)
// #2025_03_28_Time_27_ms_(89.42%)_Space_61.11_MB_(55.40%)

function coinChange(coins: number[], amount: number): number {
    const dp: number[] = new Array(amount + 1).fill(0)
    dp[0] = 1
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            const prev: number = dp[i - coin]
            if (prev > 0) {
                if (dp[i] === 0) {
                    dp[i] = prev + 1
                } else {
                    dp[i] = Math.min(dp[i], prev + 1)
                }
            }
        }
    }
    return dp[amount] - 1
}

export { coinChange }
