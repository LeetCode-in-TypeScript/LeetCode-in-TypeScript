import { TreeNode } from '../../com_github_leetcode/treenode'

// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Depth_First_Search #Breadth_First_Search
// #Tree #Binary_Tree #Data_Structure_I_Day_11_Tree #Level_2_Day_15_Tree
// #Big_O_Time_O(N)_Space_O(log(N)) #2023_10_04_Time_49_ms_(98.54%)_Space_45_MB_(59.02%)

/*
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
    if (!root.left && !root.right) return true
    const queue: [TreeNode, TreeNode][] = [[root.left, root.right]]
    while (queue.length > 0) {
        let qLen: number = queue.length
        while (qLen-- > 0) {
            const [leftNode, rightNode] = queue.shift()
            if (!leftNode && !rightNode) continue
            if (!leftNode || !rightNode || leftNode.val != rightNode.val) return false
            queue.push([leftNode.left, rightNode.right])
            queue.push([leftNode.right, rightNode.left])
        }
    }
    return true
}

export { isSymmetric }
