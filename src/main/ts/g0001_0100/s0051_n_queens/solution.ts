// #Hard #Top_100_Liked_Questions #Array #Backtracking #Big_O_Time_O(N!)_Space_O(N)
// #2023_09_30_Time_57_ms_(93.84%)_Space_45_MB_(83.56%)

function solveNQueens(n: number): string[][] {
    const result: string[][] = []
    const board: number[] = []
    const BOARD_ROW = Array(n).fill('.').join('')
    const printBoard = () => board.map((col) => `${BOARD_ROW.slice(0, col)}Q${BOARD_ROW.slice(col + 1)}`)
    const isSafePlace = (c: number): boolean => {
        for (let row = 0; row < board.length; row++) {
            const col = board[row]
            if (c === col) {
                return false
            }
            const diff = board.length - row
            if (c === col + diff || c === col - diff) {
                return false
            }
        }
        return true
    }
    const backtrack = () => {
        if (board.length === n) {
            result.push(printBoard())
            return
        }
        for (let col = 0; col < n; col++) {
            if (isSafePlace(col)) {
                board.push(col)
                backtrack()
                board.pop()
            }
        }
    }
    backtrack()
    return result
}

export { solveNQueens }
