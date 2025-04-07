// #Easy #Top_Interview_Questions #Array #Tree #Binary_Tree #Binary_Search_Tree #Divide_and_Conquer
// #Data_Structure_II_Day_15_Tree #Level_2_Day_9_Binary_Search_Tree #Udemy_Tree_Stack_Queue
// #Top_Interview_150_Divide_and_Conquer #2025_04_05_Time_0_ms_(100.00%)_Space_59.64_MB_(37.39%)

import { TreeNode } from 'src/main/ts/com_github_leetcode/treenode'

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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return makeTree(nums, 0, nums.length - 1)
}

function makeTree(nums: number[], left: number, right: number): TreeNode | null {
    if (left > right) {
        return null
    }
    const mid = Math.floor((left + right) / 2)
    const midNode = new TreeNode(nums[mid])
    midNode.left = makeTree(nums, left, mid - 1)
    midNode.right = makeTree(nums, mid + 1, right)
    return midNode
}

export { sortedArrayToBST }
