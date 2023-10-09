// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Depth_First_Search
// #Breadth_First_Search #Matrix #Union_Find
// #Algorithm_II_Day_6_Breadth_First_Search_Depth_First_Search
// #Graph_Theory_I_Day_1_Matrix_Related_Problems #Level_1_Day_9_Graph/BFS/DFS #Udemy_Graph
// #Big_O_Time_O(M*N)_Space_O(M*N) #2023_10_09_Time_61_ms_(96.71%)_Space_44.5_MB_(99.30%)

function numIslands(grid: string[][]): number {
    let islands = 0
    if (grid !== null && grid.length !== 0 && grid[0].length !== 0) {
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === '1') {
                    dfs(grid, i, j)
                    islands++
                }
            }
        }
    }
    return islands
}

function dfs(grid: string[][], x: number, y: number): void {
    if (x < 0 || grid.length <= x || y < 0 || grid[0].length <= y || grid[x][y] !== '1') {
        return
    }
    grid[x][y] = 'x'
    dfs(grid, x + 1, y)
    dfs(grid, x - 1, y)
    dfs(grid, x, y + 1)
    dfs(grid, x, y - 1)
}

export { numIslands }
