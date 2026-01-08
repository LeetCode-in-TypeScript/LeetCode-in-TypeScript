// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Depth_First_Search #Breadth_First_Search
// #Tree #Binary_Tree #Data_Structure_I_Day_11_Tree #Level_2_Day_15_Tree
// #Top_Interview_150_Binary_Tree_General #Big_O_Time_O(N)_Space_O(log(N))
// #2025_03_23_Time_0_ms_(100.00%)_Space_58.35_MB_(25.66%)

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
function isSymmetric(root: TreeNode | null): boolean {
    if (!root.left && !root.right) {
        return true
    }
    const queue: [TreeNode, TreeNode][] = [[root.left, root.right]]
    while (queue.length > 0) {
        let qLen: number = queue.length
        while (qLen-- > 0) {
            const [leftNode, rightNode] = queue.shift()
            if (!leftNode && !rightNode) {
                continue
            }
            if (!leftNode || !rightNode || leftNode.val != rightNode.val) {
                return false
            }
            queue.push([leftNode.left, rightNode.right], [leftNode.right, rightNode.left])
        }
    }
    return true
}

export { isSymmetric }
