// #Medium #Array #Matrix #Simulation #Top_Interview_150_Matrix
// #2025_04_12_Time_0_ms_(100.00%)_Space_53.84_MB_(79.20%)

/**
 * Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
    const m = board.length
    const n = board[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const liveNeighbors = countLives(board, i, j, m, n)
            if (board[i][j] === 0 && liveNeighbors === 3) {
                board[i][j] = 2
            } else if (board[i][j] === 1 && (liveNeighbors === 2 || liveNeighbors === 3)) {
                board[i][j] = 3
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] >>= 1
        }
    }
}

function countLives(board: number[][], i: number, j: number, m: number, n: number): number {
    let lives = 0
    for (let r = Math.max(0, i - 1); r <= Math.min(m - 1, i + 1); r++) {
        for (let c = Math.max(0, j - 1); c <= Math.min(n - 1, j + 1); c++) {
            lives += board[r][c] & 1
        }
    }
    lives -= board[i][j] & 1
    return lives
}

export { gameOfLife }
