// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Dynamic_Programming #Math #Memoization
// #Algorithm_I_Day_12_Dynamic_Programming #Dynamic_Programming_I_Day_2
// #Level_1_Day_10_Dynamic_Programming #Udemy_Dynamic_Programming #Top_Interview_150_1D_DP
// #Big_O_Time_O(n)_Space_O(n) #2023_10_01_Time_44_ms_(94.58%)_Space_42.4_MB_(73.09%)

function climbStairs(n: number, memo: Record<string, number> = {}): number {
    if (n in memo) return memo[n]
    if (n === 0) return 1
    if (n < 0) return 0
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
    return memo[n]
}

export { climbStairs }
