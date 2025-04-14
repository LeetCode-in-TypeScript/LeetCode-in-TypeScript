// #Medium #Array #Tree #Matrix #Divide_and_Conquer #Top_Interview_150_Divide_and_Conquer

class _Node {
    val: boolean
    isLeaf: boolean
    topLeft: _Node | null
    topRight: _Node | null
    bottomLeft: _Node | null
    bottomRight: _Node | null

    constructor(
        val: boolean,
        isLeaf: boolean,
        topLeft: _Node | null = null,
        topRight: _Node | null = null,
        bottomLeft: _Node | null = null,
        bottomRight: _Node | null = null,
    ) {
        this.val = val
        this.isLeaf = isLeaf
        this.topLeft = topLeft
        this.topRight = topRight
        this.bottomLeft = bottomLeft
        this.bottomRight = bottomRight
    }

    toString(): string {
        return (
            this.getNode(this) +
            this.getNode(this.topLeft) +
            this.getNode(this.topRight) +
            this.getNode(this.bottomLeft) +
            this.getNode(this.bottomRight)
        )
    }

    private getNode(node: _Node | null): string {
        if (node === null) return 'null'
        return `[${node.isLeaf ? '1' : '0'},${node.val ? '1' : '0'}]`
    }
}

/**
 * Definition for _Node.
 * class _Node {
 *     val: boolean
 *     isLeaf: boolean
 *     topLeft: _Node | null
 * 	topRight: _Node | null
 * 	bottomLeft: _Node | null
 * 	bottomRight: _Node | null
 * 	constructor(val?: boolean, isLeaf?: boolean, topLeft?: _Node, topRight?: _Node, bottomLeft?: _Node, bottomRight?: _Node) {
 *         this.val = (val===undefined ? false : val)
 *         this.isLeaf = (isLeaf===undefined ? false : isLeaf)
 *         this.topLeft = (topLeft===undefined ? null : topLeft)
 *         this.topRight = (topRight===undefined ? null : topRight)
 *         this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
 *         this.bottomRight = (bottomRight===undefined ? null : bottomRight)
 *   }
 * }
 */
function construct(grid: number[][]): _Node | null {
    return build(grid, 0, 0, grid.length)
}

function build(grid: number[][], row: number, col: number, size: number): _Node {
    if (size === 1) {
        return new _Node(grid[row][col] === 1, true)
    }
    let isSame = true
    let firstVal = grid[row][col]
    for (let i = row; i < row + size; i++) {
        for (let j = col; j < col + size; j++) {
            if (grid[i][j] !== firstVal) {
                isSame = false
                break
            }
        }
        if (!isSame) break
    }
    if (isSame) {
        return new _Node(firstVal === 1, true)
    }
    let newSize = size / 2
    let topLeft = build(grid, row, col, newSize)
    let topRight = build(grid, row, col + newSize, newSize)
    let bottomLeft = build(grid, row + newSize, col, newSize)
    let bottomRight = build(grid, row + newSize, col + newSize, newSize)
    return new _Node(true, false, topLeft, topRight, bottomLeft, bottomRight)
}

export { construct }
