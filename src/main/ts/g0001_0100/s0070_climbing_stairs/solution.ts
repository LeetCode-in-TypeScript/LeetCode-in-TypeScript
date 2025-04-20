// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Dynamic_Programming #Math #Memoization
// #Algorithm_I_Day_12_Dynamic_Programming #Dynamic_Programming_I_Day_2
// #Level_1_Day_10_Dynamic_Programming #Udemy_Dynamic_Programming #Top_Interview_150_1D_DP
// #Big_O_Time_O(n)_Space_O(n) #2025_03_23_Time_0_ms_(100.00%)_Space_56.23_MB_(5.15%)

function climbStairs(n: number, memo: Record<string, number> = {}): number {
    if (n in memo) {
        return memo[n]
    }
    if (n === 0) {
        return 1
    }
    if (n < 0) {
        return 0
    }
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
    return memo[n]
}

export { climbStairs }
