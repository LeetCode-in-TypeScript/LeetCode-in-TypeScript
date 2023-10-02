// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Hash_Table #Matrix
// #Udemy_2D_Arrays/Matrix #Big_O_Time_O(m*n)_Space_O(1)
// #2023_10_01_Time_61_ms_(97.66%)_Space_45.9_MB_(30.73%)

/*
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const cols: number[] = []
    const rows: number[] = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                if (!rows.includes(i)) rows.push(i)
                if (!cols.includes(j)) cols.push(j)
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < cols.length; j++) {
            matrix[i][cols[j]] = 0
        }
    }
    for (let j = 0; j < rows.length; j++) {
        for (let i = 0; i < matrix[j].length; i++) {
            matrix[rows[j]][i] = 0
        }
    }
}

export { setZeroes }
