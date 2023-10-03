class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0
        this.left = left ?? null
        this.right = right ?? null
    }
}

function createTreeNode(treeValues: (number | null)[]): TreeNode | null {
    let root: TreeNode | null = treeValues.length === 0 ? null : new TreeNode(treeValues[0])
    const queue: TreeNode[] = []
    queue.push(root)
    let i: number = 1
    while (i < treeValues.length) {
        let curr: TreeNode | null = queue.shift()
        if (treeValues[i] !== null) {
            curr!.left = new TreeNode(treeValues[i])
            queue.push(curr!.left)
        }
        if (++i < treeValues.length && treeValues[i] !== null) {
            curr!.right = new TreeNode(treeValues[i])
            queue.push(curr!.right)
        }
        i++
    }
    return root
}

export { TreeNode, createTreeNode }
