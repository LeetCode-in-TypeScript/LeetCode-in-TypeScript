// #Easy #Depth_First_Search #Breadth_First_Search #Tree #Binary_Tree
// #Top_Interview_150_Binary_Tree_BFS #2025_04_15_Time_0_ms_(100.00%)_Space_61.24_MB_(69.52%)

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
function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) {
        return []
    }
    let res = []
    let queue = [root]
    while (queue.length) {
        let len = queue.length
        let sum = 0
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            sum += node.val
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        res.push(sum / len)
    }
    return res
}

export { averageOfLevels }
