// #Medium #Depth_First_Search #Tree #Binary_Tree #Top_Interview_150_Binary_Tree_General
// #2025_04_07_Time_0_ms_(100.00%)_Space_57.72_MB_(19.07%)

import { TreeNode } from "../../com_github_leetcode/treenode"

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
function sumNumbers(root: TreeNode | null): number {
    let sum = 0
    function recurseSum(node: TreeNode | null, curNum: number): void {
        if (node === null) {
            return
        }
        const newNum = 10 * curNum + node.val
        if (node.left === null && node.right === null) {
            sum += newNum
            return
        }
        if (node.left !== null) {
            recurseSum(node.left, newNum)
        }
        if (node.right !== null) {
            recurseSum(node.right, newNum)
        }
    }
    recurseSum(root, 0)
    return sum
}

export { sumNumbers }
