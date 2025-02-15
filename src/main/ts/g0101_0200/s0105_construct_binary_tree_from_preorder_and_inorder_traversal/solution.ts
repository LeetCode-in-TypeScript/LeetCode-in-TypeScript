// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Hash_Table #Tree #Binary_Tree
// #Divide_and_Conquer #Data_Structure_II_Day_15_Tree #Top_Interview_150_Binary_Tree_General
// #Big_O_Time_O(N)_Space_O(N) #2023_10_04_Time_65_ms_(96.47%)_Space_45.9_MB_(80.00%)

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
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let preorderIdx = 0
    const inorderValIdxMap: Map<number, number> = new Map()
    for (let i = 0; i < inorder.length; i++) {
        inorderValIdxMap.set(inorder[i], i)
    }
    const constuctTreePreorder = (left: number, right: number): TreeNode | null => {
        if (left > right) {
            return null
        }
        const root = new TreeNode(preorder[preorderIdx++])
        const inorderRootIdx = inorderValIdxMap.get(root.val)
        root.left = constuctTreePreorder(left, inorderRootIdx - 1)
        root.right = constuctTreePreorder(inorderRootIdx + 1, right)
        return root
    }
    return constuctTreePreorder(0, preorder.length - 1)
}

export { buildTree }
