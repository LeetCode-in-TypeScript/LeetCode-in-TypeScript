// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Depth_First_Search #Tree #Binary_Tree
// #Binary_Search_Tree #Data_Structure_I_Day_14_Tree #Level_1_Day_8_Binary_Search_Tree
// #Udemy_Tree_Stack_Queue #Top_Interview_150_Binary_Search_Tree #Big_O_Time_O(N)_Space_O(log(N))
// #2025_03_23_Time_0_ms_(100.00%)_Space_60.76_MB_(21.74%)

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
function dfs(node: TreeNode | null, lowerBound: number, upperBound: number): boolean {
    if (!node) {
        return true
    }
    if (node.val <= lowerBound) {
        return false
    }
    if (node.val >= upperBound) {
        return false
    }
    return dfs(node.left, lowerBound, node.val) && dfs(node.right, node.val, upperBound)
}

function isValidBST(root: TreeNode | null): boolean {
    return dfs(root, -Infinity, Infinity)
}

export { isValidBST }
