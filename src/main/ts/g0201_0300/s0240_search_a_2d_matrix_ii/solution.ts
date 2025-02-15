// #Medium #Top_100_Liked_Questions #Array #Binary_Search #Matrix #Divide_and_Conquer
// #Data_Structure_II_Day_4_Array #Binary_Search_II_Day_8 #Big_O_Time_O(n+m)_Space_O(1)
// #2023_10_06_Time_58_ms_(64.44%)_Space_45.6_MB_(50.00%)

function searchMatrix(matrix: number[][], target: number): boolean {
    let r: number = 0
    let c: number = matrix[0].length - 1
    while (r < matrix.length && c >= 0) {
        if (matrix[r][c] === target) {
            return true
        } else if (matrix[r][c] > target) {
            c--
        } else {
            r++
        }
    }
    return false
}

export { searchMatrix }
