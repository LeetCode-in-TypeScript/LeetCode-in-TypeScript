// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Math #Matrix
// #Data_Structure_II_Day_3_Array #Programming_Skills_II_Day_7 #Udemy_2D_Arrays/Matrix
// #Top_Interview_150_Matrix #Big_O_Time_O(n^2)_Space_O(1)
// #2025_03_23_Time_0_ms_(100.00%)_Space_57.37_MB_(17.79%)

/*
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    let len = matrix.length
    for (let i = 0; i < len; i++) {
        const tempArr = []
        for (let j = len - 1; j >= 0; j--) {
            tempArr.push(matrix[j][i])
        }
        matrix.push(tempArr)
    }
    while (len > 0) {
        matrix.shift()
        len--
    }
}

export { rotate }
