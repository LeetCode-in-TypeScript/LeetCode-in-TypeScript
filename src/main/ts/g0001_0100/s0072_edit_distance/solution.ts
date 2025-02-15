// #Medium #Top_100_Liked_Questions #String #Dynamic_Programming
// #Algorithm_II_Day_18_Dynamic_Programming #Dynamic_Programming_I_Day_19
// #Udemy_Dynamic_Programming #Top_Interview_150_Multidimensional_DP #Big_O_Time_O(n^2)_Space_O(n2)
// #2023_10_01_Time_68_ms_(95.20%)_Space_47.3_MB_(78.40%)

function minDistance(word1: string, word2: string): number {
    const memo: number[][] = new Array(word1.length + 1).fill(0).map((_) => [])
    const l1 = word1.length
    const l2 = word2.length
    const dfs = (w1: number, w2: number): number => {
        if (memo[w1][w2] != undefined) return memo[w1][w2]
        if (w1 == l1 && w2 == l2) {
            memo[w1][w2] = 0
            return 0
        }
        if (w1 == l1 || w2 == l2) {
            memo[w1][w2] = Math.max(l1 - w1, l2 - w2)
            return memo[w1][w2]
        }
        let result = 0
        if (word1[w1] == word2[w2]) {
            result = dfs(w1 + 1, w2 + 1)
        } else {
            result = 1 + Math.min(dfs(w1 + 1, w2), dfs(w1 + 1, w2 + 1), dfs(w1, w2 + 1))
        }
        memo[w1][w2] = result
        return result
    }
    return dfs(0, 0)
}

export { minDistance }
