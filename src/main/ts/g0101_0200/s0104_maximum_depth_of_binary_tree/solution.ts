import { TreeNode } from '../../com_github_leetcode/treenode'

// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Depth_First_Search #Breadth_First_Search
// #Tree #Binary_Tree #Data_Structure_I_Day_11_Tree
// #Programming_Skills_I_Day_10_Linked_List_and_Tree #Udemy_Tree_Stack_Queue
// #Big_O_Time_O(N)_Space_O(H) #2023_10_04_Time_51_ms_(97.14%)_Space_46.1_MB_(68.29%)

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

function maxDepth(root: TreeNode | null): number {
    let max = 1
    if (!root) {
        return 0
    }
    const rec = (node: TreeNode | null, depht: number): void => {
        max = Math.max(max, depht)
        if (!node) {
            return
        }
        if (node.left) {
            rec(node.left, depht + 1)
        }

        if (node.right) {
            rec(node.right, depht + 1)
        }
    }
    rec(root, 1)
    return max
}

export { maxDepth }
