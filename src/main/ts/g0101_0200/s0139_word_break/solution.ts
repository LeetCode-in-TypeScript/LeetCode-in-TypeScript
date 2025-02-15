// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #String #Hash_Table
// #Dynamic_Programming #Trie #Memoization #Algorithm_II_Day_15_Dynamic_Programming
// #Dynamic_Programming_I_Day_9 #Udemy_Dynamic_Programming #Top_Interview_150_1D_DP
// #Big_O_Time_O(M+max*N)_Space_O(M+N+max) #2023_10_06_Time_56_ms_(88.44%)_Space_44.1_MB_(93.39%)

function wordBreak(s: string, wordDict: string[]): boolean {
    const dp: boolean[] = []
    for (let i = 0; i <= s.length; i++) dp.push(false)
    dp[s.length] = true
    for (let j = s.length - 1; j >= 0; j--) {
        for (const word of wordDict) {
            if (s.slice(j, j + word.length) === word && j + word.length <= s.length) {
                dp[j] = dp[j + word.length]
            }
            if (dp[j]) break
        }
    }
    return dp[0]
}

export { wordBreak }
