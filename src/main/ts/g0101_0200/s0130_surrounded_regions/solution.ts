// #Medium #Top_Interview_Questions #Array #Depth_First_Search #Breadth_First_Search #Matrix
// #Union_Find #Algorithm_II_Day_8_Breadth_First_Search_Depth_First_Search
// #Top_Interview_150_Graph_General #2025_04_16_Time_1_ms_(99.18%)_Space_59.64_MB_(82.97%)

/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    if (!board.length) return

    const rows = board.length
    const cols = board[0].length
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]]

    const dfs = (r: number, c: number): void => {
        if (
            r < 0 || r >= rows ||
            c < 0 || c >= cols ||
            board[r][c] !== 'O'
        ) return

        board[r][c] = '#'
        for (const [dr, dc] of dirs) {
            dfs(r + dr, c + dc)
        }
    }

    // mark border-connected O's
    for (let i = 0; i < rows; i++) {
        dfs(i, 0)
        dfs(i, cols - 1)
    }
    for (let j = 0; j < cols; j++) {
        dfs(0, j)
        dfs(rows - 1, j)
    }

    // flip & restore
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            board[i][j] = board[i][j] === '#' ? 'O' : 'X'
        }
    }
}


export { solve }
