// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Dynamic_Programming #Math
// #Combinatorics #Algorithm_II_Day_13_Dynamic_Programming #Dynamic_Programming_I_Day_15
// #Level_1_Day_11_Dynamic_Programming #Big_O_Time_O(m*n)_Space_O(m*n)
// #2023_10_01_Time_40_ms_(98.97%)_Space_42.8_MB_(72.52%)

function uniquePaths(m: number, n: number): number {
    const factorialize = (x: number) => {
        if (x <= 1) return 1
        let res = x
        while (x > 1) {
            x--
            res *= x
        }
        return res
    }
    return factorialize(m + n - 2) / factorialize(m - 1) / factorialize(n - 1)
}

export { uniquePaths }
