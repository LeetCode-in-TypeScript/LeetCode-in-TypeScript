// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Depth_First_Search #Tree #Binary_Tree
// #Stack #Data_Structure_I_Day_10_Tree #Udemy_Tree_Stack_Queue #Big_O_Time_O(n)_Space_O(n)
// #2023_10_03_Time_45_ms_(97.30%)_Space_42.9_MB_(96.73%)

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

import { TreeNode } from '../../com_github_leetcode/treenode'

function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return []
    if (!root.val) return []
    const result: number[] = []
    function traverse(node: TreeNode, arr: number[]) {
        if (node.left) {
            traverse(node.left, result)
        }
        result.push(node.val)
        if (node.right) {
            traverse(node.right, result)
        }
    }
    traverse(root, result)
    return result
}

export { inorderTraversal }
