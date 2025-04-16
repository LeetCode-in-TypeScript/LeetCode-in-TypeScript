// #Medium #Top_Interview_Questions #Array #Depth_First_Search #Breadth_First_Search #Matrix
// #Union_Find #Algorithm_II_Day_8_Breadth_First_Search_Depth_First_Search
// #Top_Interview_150_Graph_General #2025_04_16_Time_1_ms_(99.18%)_Space_59.64_MB_(82.97%)

/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    if (board.length === 0) {
        return
    }
    const rows = board.length
    const cols = board[0].length
    const dfs = (board: string[][], row: number, col: number): void => {
        if (
            row < 0 || 
            row >= rows || 
            col < 0 || 
            col >= cols || 
            board[row][col] !== 'O'
        ) {
            return
        }
        board[row][col] = '#'
        dfs(board, row + 1, col)
        dfs(board, row - 1, col)
        dfs(board, row, col + 1)
        dfs(board, row, col - 1)
    };
    for (let i = 0; i < cols; i++) {
        if (board[0][i] === 'O') {
            dfs(board, 0, i)
        }
        if (board[rows - 1][i] === 'O') {
            dfs(board, rows - 1, i)
        }
    }
    for (let i = 0; i < rows; i++) {
        if (board[i][0] === 'O') {
            dfs(board, i, 0)
        }
        if (board[i][cols - 1] === 'O') {
            dfs(board, i, cols - 1)
        }
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }
            if (board[i][j] === '#') {
                board[i][j] = 'O'
            }
        }
    }
}

export { solve }
