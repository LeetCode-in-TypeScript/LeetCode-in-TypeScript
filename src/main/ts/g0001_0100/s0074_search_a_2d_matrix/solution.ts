// #Medium #Top_100_Liked_Questions #Array #Binary_Search #Matrix #Data_Structure_I_Day_5_Array
// #Algorithm_II_Day_1_Binary_Search #Binary_Search_I_Day_8 #Level_2_Day_8_Binary_Search
// #Udemy_2D_Arrays/Matrix #Big_O_Time_O(endRow+endCol)_Space_O(1)
// #2023_10_01_Time_45_ms_(96.82%)_Space_44.3_MB_(43.77%)

function searchMatrix(matrix: number[][], target: number): boolean {
    const [m, n] = [matrix.length, matrix[0].length]
    let [l, r] = [0, m * n - 1]
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        const row = Math.floor(mid / n)
        const col = mid % n
        const el = matrix[row][col]
        if (el === target) return true
        if (el < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return false
}

export { searchMatrix }
