// #Medium #Array #Breadth_First_Search #Matrix #Top_Interview_150_Graph_BFS
// #2025_04_15_Time_5_ms_(98.27%)_Space_59.74_MB_(65.90%)

function snakesAndLadders(board: number[][]): number {
    const size = board.length
    const target = size * size

    const visited = new Array<boolean>(target).fill(false)
    const queue: number[] = [1]

    visited[0] = true
    let steps = 0

    while (queue.length > 0) {
        const levelSize = queue.length

        for (let i = 0; i < levelSize; i++) {
            const current = queue.shift()!

            if (current === target) {
                return steps
            }

            enqueueNextMoves(current, target, size, board, visited, queue)
        }

        steps++
    }

    return -1
}

function enqueueNextMoves(
    current: number,
    target: number,
    size: number,
    board: number[][],
    visited: boolean[],
    queue: number[],
): void {
    for (let next = current + 1; next <= Math.min(current + 6, target); next++) {
        if (visited[next - 1]) continue

        visited[next - 1] = true
        queue.push(resolveDestination(next, size, board))
    }
}

function resolveDestination(index: number, size: number, board: number[][]): number {
    const [row, col] = indexToPosition(index, size)
    return board[row][col] === -1 ? index : board[row][col]
}

function indexToPosition(index: number, size: number): [number, number] {
    const row = size - 1 - Math.floor((index - 1) / size)
    let col: number
    if ((size - row) % 2 === 1) {
        col = (index - 1) % size
    } else {
        col = size - 1 - ((index - 1) % size)
    }
    return [row, col]
}

export { snakesAndLadders }
