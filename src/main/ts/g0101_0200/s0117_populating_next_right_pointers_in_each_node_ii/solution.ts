// #Medium #Depth_First_Search #Breadth_First_Search #Tree #Binary_Tree #Linked_List
// #Algorithm_II_Day_7_Breadth_First_Search_Depth_First_Search
// #Top_Interview_150_Binary_Tree_General #2025_04_07_Time_47_ms_(97.74%)_Space_61.19_MB_(53.38%)

import { _Node } from '../../com_github_leetcode/_node'

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function connect(root: _Node | null): _Node | null {
    if (!root) {
        return null
    }
    root.next = null
    let dummyHead = new _Node()
    let current: _Node | null = root
    while (current) {
        // reset dummyHead
        dummyHead.next = null
        let child = dummyHead
        // traverse the current level
        while (current) {
            if (current.left) {
                child.next = current.left
                child = child.next
            }
            if (current.right) {
                child.next = current.right
                child = child.next
            }
            current = current.next
        }
        // move on to the next level
        current = dummyHead.next
    }
    return root
}

export { connect }
