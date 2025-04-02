// #Hard #Backtracking #Top_Interview_150_Backtracking
// #2025_04_01_Time_1_ms_(96.89%)_Space_56.94_MB_(52.17%)

function totalNQueens(n: number): number {
    function solve(r: number, cols: boolean[], diag: boolean[], antiDiag: boolean[]): number {
        if (r === n) {
            return 1
        }
        let count = 0
        for (let c = 0; c < n; c++) {
            if (!cols[c] && !diag[r + c] && !antiDiag[r - c + n - 1]) {
                cols[c] = diag[r + c] = antiDiag[r - c + n - 1] = true
                count += solve(r + 1, cols, diag, antiDiag)
                cols[c] = diag[r + c] = antiDiag[r - c + n - 1] = false
            }
        }
        return count
    }
    return solve(0, new Array(n).fill(false), new Array(2 * n - 1).fill(false), new Array(2 * n - 1).fill(false))
}

export { totalNQueens }
