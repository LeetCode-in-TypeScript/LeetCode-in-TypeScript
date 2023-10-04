// #Medium #Top_100_Liked_Questions #Depth_First_Search #Tree #Binary_Tree #Stack #Linked_List
// #Udemy_Linked_List #Big_O_Time_O(N)_Space_O(N)
// #2023_10_04_Time_55_ms_(90.66%)_Space_45.8_MB_(12.11%)

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

/**
 Do not return anything, modify root in-place instead.
 */
const flatten = (root: TreeNode | null): void => {
    if (root === null || (root.left === null && root.right === null)) {
        return
    }
    const vals: Array<number> = []
    const stack: Array<TreeNode> = []
    let next: TreeNode | null | undefined = root
    while (0 < stack.length || next != null) {
        while (next != null) {
            stack.push(next)
            vals.push(next.val)
            next = next.left
        }
        next = stack.pop()
        next = next?.right
    }
    let newHead: TreeNode | null = null
    let newTail: TreeNode | null = null
    for (let val of vals) {
        if (newHead == null) {
            newHead = new TreeNode(val)
            newTail = newHead
            continue
        }
        if (newTail != null) {
            newTail.right = new TreeNode(val)
            newTail = newTail.right
        }
    }
    if (newHead != null) {
        root.left = null
        root.val = newHead?.val
        root.right = newHead.right
    }
}

export { flatten }
