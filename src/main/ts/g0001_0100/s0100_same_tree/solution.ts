// #Easy #Depth_First_Search #Breadth_First_Search #Tree #Binary_Tree #Level_2_Day_15_Tree
// #Udemy_Tree_Stack_Queue #Top_Interview_150_Binary_Tree_General
// #2025_04_16_Time_0_ms_(100.00%)_Space_55.66_MB_(67.00%)

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
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null || q === null) {
        return p === null && q === null
    }
    const b1 = isSameTree(p.left, q.left)
    const b2 = isSameTree(p.right, q.right)
    return p.val === q.val && b1 && b2
}

export { isSameTree }
