// #Medium #Tree #Binary_Tree #Stack #Design #Binary_Search_Tree #Iterator
// #Data_Structure_II_Day_17_Tree #Programming_Skills_II_Day_16 #Level_2_Day_9_Binary_Search_Tree
// #Top_Interview_150_Binary_Tree_General #2025_04_09_Time_6_ms_(98.16%)_Space_69.76_MB_(29.04%)

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
class BSTIterator {
    private node: TreeNode | null

    constructor(root: TreeNode | null) {
        this.node = root
    }

    next(): number {
        let res = -1
        while (this.node !== null) {
            if (this.node.left === null) {
                res = this.node.val
                this.node = this.node.right
                return res
            } else {
                let rightMost = this.node.left
                while (rightMost.right !== null && rightMost.right !== this.node) {
                    rightMost = rightMost.right
                }

                if (rightMost.right === null) {
                    rightMost.right = this.node
                    this.node = this.node.left
                } else {
                    rightMost.right = null
                    res = this.node.val
                    this.node = this.node.right
                    return res
                }
            }
        }
        return res
    }

    hasNext(): boolean {
        return this.node !== null
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

export { BSTIterator }
