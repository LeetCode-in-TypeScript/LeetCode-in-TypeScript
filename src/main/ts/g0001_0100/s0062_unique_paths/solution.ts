// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Dynamic_Programming #Math
// #Combinatorics #LeetCode_75_DP/Multidimensional #Algorithm_II_Day_13_Dynamic_Programming
// #Dynamic_Programming_I_Day_15 #Level_1_Day_11_Dynamic_Programming
// #Big_O_Time_O(m*n)_Space_O(m*n) #2025_03_23_Time_0_ms_(100.00%)_Space_55.15_MB_(43.54%)

function uniquePaths(m: number, n: number): number {
    let aboveRow = new Array(n).fill(1)
    for (let row = 1; row < m; row++) {
        let currentRow = new Array(n).fill(1)
        for (let col = 1; col < n; col++) {
            currentRow[col] = currentRow[col - 1] + aboveRow[col]
        }
        aboveRow = currentRow
    }
    return aboveRow[n - 1]
}

export { uniquePaths }
