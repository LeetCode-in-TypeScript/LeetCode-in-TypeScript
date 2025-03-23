// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Matrix #Backtracking
// #Algorithm_II_Day_11_Recursion_Backtracking #Top_Interview_150_Backtracking
// #Big_O_Time_O(4^(m*n))_Space_O(m*n) #2025_03_23_Time_243_ms_(85.30%)_Space_56.58_MB_(58.26%)

function exist(board: string[][], word: string): boolean {
    if (word.length === 0) return false
    let ret = false
    const marks = makeArray(board)
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== word.charAt(0)) continue
            if (loop(marks, board, i, j, word, 0)) return true
        }
    }

    return ret
}

function makeArray(board: string[][]) {
    const arr = []
    for (let i = 0; i < board.length; i++) {
        arr[i] = []
        for (let j = 0; j < board[i].length; j++) {
            arr[i][j] = false
        }
    }
    return arr
}

function loop(marks: boolean[][], board: string[][], i: number, j: number, word: string, index: number): boolean {
    if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || marks[i][j]) {
        return false
    }

    if (board[i][j] !== word.charAt(index)) {
        return false
    } else if (index === word.length - 1) {
        return true
    }

    marks[i][j] = true
    index++

    let r = loop(marks, board, i - 1, j, word, index)
    if (r) return true

    r = loop(marks, board, i + 1, j, word, index)
    if (r) return true

    r = loop(marks, board, i, j - 1, word, index)
    if (r) return true

    r = loop(marks, board, i, j + 1, word, index)
    if (r) return true

    marks[i][j] = false
    return false
}

export { exist }
