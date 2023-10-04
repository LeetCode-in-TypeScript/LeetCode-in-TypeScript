// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Dynamic_Programming
// #Breadth_First_Search #Algorithm_II_Day_18_Dynamic_Programming #Dynamic_Programming_I_Day_20
// #Level_2_Day_12_Dynamic_Programming #Big_O_Time_O(m*n)_Space_O(amount)
// #2023_10_04_Time_85_ms_(86.14%)_Space_47.7_MB_(84.40%)

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
