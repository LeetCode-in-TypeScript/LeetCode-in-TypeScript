// #Medium #Top_Interview_Questions #Array #Hash_Table #Matrix #Data_Structure_I_Day_5_Array
// #Top_Interview_150_Matrix #2025_04_01_Time_1_ms_(99.60%)_Space_58.94_MB_(52.85%)

function isValidSudoku(board: string[][]): boolean {
    let rowSet: number[] = new Array(9).fill(0)
    let colSet: number[] = new Array(9).fill(0)
    let boxSet: number[] = new Array(9).fill(0)
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                continue
            }
            let val = board[i][j].charCodeAt(0) - '0'.charCodeAt(0)
            let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
            if (rowSet[i] & (1 << val) || colSet[j] & (1 << val) || boxSet[boxIndex] & (1 << val)) {
                return false
            }
            rowSet[i] |= 1 << val
            colSet[j] |= 1 << val
            boxSet[boxIndex] |= 1 << val
        }
    }
    return true
}

export { isValidSudoku }
