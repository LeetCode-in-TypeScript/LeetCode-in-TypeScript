// #Medium #Top_Interview_Questions #Breadth_First_Search #Tree #Binary_Tree
// #Data_Structure_II_Day_15_Tree #Udemy_Tree_Stack_Queue #Top_Interview_150_Binary_Tree_BFS
// #2025_04_05_Time_0_ms_(100.00%)_Space_58.00_MB_(52.61%)

import { TreeNode } from '../../com_github_leetcode/treenode'

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return []

    const result: number[][] = []
    const queue: TreeNode[] = [root]
    let leftToRight = true

    while (queue.length) {
        const size = queue.length
        const level = new Array<number>(size)

        for (let i = 0; i < size; i++) {
            const node = queue.shift()!
            const index = leftToRight ? i : size - 1 - i
            level[index] = node.val

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }

        result.push(level)
        leftToRight = !leftToRight
    }

    return result
}


export { zigzagLevelOrder }
