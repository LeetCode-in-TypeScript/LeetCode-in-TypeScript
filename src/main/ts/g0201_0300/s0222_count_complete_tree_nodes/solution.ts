// #Easy #Depth_First_Search #Tree #Binary_Search #Binary_Tree #Binary_Search_II_Day_10
// #Top_Interview_150_Binary_Tree_General #2025_04_12_Time_0_ms_(100.00%)_Space_75.06_MB_(64.02%)

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
function countNodes(root: TreeNode | null): number {
    if (root === null) {
        return 0
    }
    const leftHeight = getLeftHeight(root)
    const rightHeight = getRightHeight(root)
    if (leftHeight === rightHeight) {
        return (1 << leftHeight) - 1
    } else {
        return 1 + countNodes(root.left) + countNodes(root.right)
    }
}

function getLeftHeight(node: TreeNode | null): number {
    let height = 0
    while (node !== null) {
        height++
        node = node.left
    }
    return height
}

function getRightHeight(node: TreeNode | null): number {
    let height = 0
    while (node !== null) {
        height++
        node = node.right
    }
    return height
}

export { countNodes }
