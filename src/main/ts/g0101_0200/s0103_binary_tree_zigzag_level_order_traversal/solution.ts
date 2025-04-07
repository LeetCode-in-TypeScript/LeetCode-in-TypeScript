// #Medium #Top_Interview_Questions #Breadth_First_Search #Tree #Binary_Tree
// #Data_Structure_II_Day_15_Tree #Udemy_Tree_Stack_Queue #Top_Interview_150_Binary_Tree_BFS
// #2025_04_05_Time_0_ms_(100.00%)_Space_58.00_MB_(52.61%)

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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = []
    if (root === null) {
        return result
    }
    const q: (TreeNode | null)[] = [root, null]
    let zig = true
    let level: number[] = []
    while (q.length > 0) {
        const node = q.shift()
        if (node === null) {
            result.push(level)
            zig = !zig
            level = []
            if (q.length > 0) {
                q.push(null)
            }
        } else {
            if (zig) {
                level.push(node.val)
            } else {
                level.unshift(node.val)
            }
            if (node.left !== null) {
                q.push(node.left)
            }
            if (node.right !== null) {
                q.push(node.right)
            }
        }
    }
    return result
}

export { zigzagLevelOrder }
