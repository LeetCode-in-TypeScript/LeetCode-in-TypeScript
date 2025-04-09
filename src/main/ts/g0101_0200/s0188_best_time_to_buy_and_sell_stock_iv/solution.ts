// #Hard #Array #Dynamic_Programming #Top_Interview_150_Multidimensional_DP
// #2025_04_09_Time_0_ms_(100.00%)_Space_58.46_MB_(61.74%)

function maxProfit(k: number, prices: number[]): number {
    const n = prices.length
    const dp: number[] = new Array(k + 1).fill(0)
    const maxdp: number[] = new Array(k + 1).fill(Number.MIN_SAFE_INTEGER)
    for (let i = 1; i <= n; i++) {
        maxdp[0] = Math.max(maxdp[0], dp[0] - prices[i - 1])
        for (let j = k; j >= 1; j--) {
            maxdp[j] = Math.max(maxdp[j], dp[j] - prices[i - 1])
            dp[j] = Math.max(dp[j], maxdp[j - 1] + prices[i - 1])
        }
    }
    return dp[k]
}

export { maxProfit }
