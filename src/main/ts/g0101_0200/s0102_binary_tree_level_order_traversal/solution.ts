// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Breadth_First_Search #Tree
// #Binary_Tree #Data_Structure_I_Day_11_Tree #Level_1_Day_6_Tree #Udemy_Tree_Stack_Queue
// #Top_Interview_150_Binary_Tree_BFS #Big_O_Time_O(N)_Space_O(N)
// #2023_10_04_Time_60_ms_(97.47%)_Space_47_MB_(77.89%)

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
function levelOrder(root: TreeNode | null): number[][] {
    if (root == null) return []
    let queue = [root]
    let result = []
    while (queue.length != 0) {
        let subResult = []
        let length = queue.length
        while (length > 0) {
            let node = queue.shift()
            subResult.push(node.val)
            if (node.left != null) queue.push(node.left)
            if (node.right != null) queue.push(node.right)
            length--
        }
        result.push(subResult)
    }
    return result
}

export { levelOrder }
