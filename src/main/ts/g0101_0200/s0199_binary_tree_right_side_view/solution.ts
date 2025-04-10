// #Medium #Top_100_Liked_Questions #Depth_First_Search #Breadth_First_Search #Tree #Binary_Tree
// #Data_Structure_II_Day_16_Tree #Level_2_Day_15_Tree #Top_Interview_150_Binary_Tree_BFS
// #2025_04_10_Time_0_ms_(100.00%)_Space_56.98_MB_(73.71%)

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
function rightSideView(root: TreeNode | null): number[] {
    const result: number[] = []
    function recurse(node: TreeNode | null, level: number): void {
        if (node !== null) {
            if (result.length === level) {
                result.push(node.val)
            }
            recurse(node.right, level + 1)
            recurse(node.left, level + 1)
        }
    }
    recurse(root, 0)
    return result
}

export { rightSideView }
