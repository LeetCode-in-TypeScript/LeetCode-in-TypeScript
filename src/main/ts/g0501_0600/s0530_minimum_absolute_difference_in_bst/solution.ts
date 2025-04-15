// #Easy #Depth_First_Search #Breadth_First_Search #Tree #Binary_Tree #Binary_Search_Tree
// #Top_Interview_150_Binary_Search_Tree #2025_04_15_Time_0_ms_(100.00%)_Space_61.15_MB_(83.13%)

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
function getMinimumDifference(root: TreeNode | null): number {
    let ans = Number.MAX_SAFE_INTEGER
    let prev: number | null = null
    function dfs(node: TreeNode | null) {
        if (!node) {
            return
        }
        dfs(node.left)
        if (prev !== null) {
            ans = Math.min(ans, Math.abs(node.val - prev))
        }
        prev = node.val
        dfs(node.right)
    }
    dfs(root)
    return ans
}

export { getMinimumDifference }
