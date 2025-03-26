// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #Dynamic_Programming #Depth_First_Search
// #Tree #Binary_Tree #Udemy_Tree_Stack_Queue #Top_Interview_150_Binary_Tree_General
// #Big_O_Time_O(N)_Space_O(N) #2025_03_26_Time_2_ms_(71.11%)_Space_65.59_MB_(42.96%)

import { TreeNode } from '../../com_github_leetcode/treenode'

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
function maxPathSum(root: TreeNode | null): number {
    let max = { sum: Number.NEGATIVE_INFINITY }
    dfs(root, max)
    return max.sum
}

function dfs(root: TreeNode | null, max) {
    if (root == null) {
        return 0
    }
    let l = Math.max(0, dfs(root.left, max))
    let r = Math.max(0, dfs(root.right, max))
    max.sum = Math.max(max.sum, l + r + root.val)
    return root.val + Math.max(l, r)
}

export { maxPathSum }
