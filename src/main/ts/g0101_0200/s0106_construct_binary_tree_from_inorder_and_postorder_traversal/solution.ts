// #Medium #Array #Hash_Table #Tree #Binary_Tree #Divide_and_Conquer
// #Top_Interview_150_Binary_Tree_General #2025_04_05_Time_1_ms_(98.78%)_Space_59.57_MB_(88.16%)

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
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const inIndex: number[] = [inorder.length - 1]
    const postIndex: number[] = [postorder.length - 1]
    return helper(inorder, postorder, inIndex, postIndex, Number.MAX_VALUE)
}

function helper(
    inorder: number[],
    postorder: number[],
    inIndex: number[],
    postIndex: number[],
    target: number,
): TreeNode | null {
    if (inIndex[0] < 0 || inorder[inIndex[0]] === target) {
        return null
    }
    const root = new TreeNode(postorder[postIndex[0]--])
    root.right = helper(inorder, postorder, inIndex, postIndex, root.val)
    inIndex[0]--
    root.left = helper(inorder, postorder, inIndex, postIndex, target)
    return root
}

export { buildTree }
