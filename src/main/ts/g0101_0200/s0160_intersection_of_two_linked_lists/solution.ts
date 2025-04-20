// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Hash_Table #Two_Pointers #Linked_List
// #Data_Structure_II_Day_11_Linked_List #Udemy_Linked_List #Big_O_Time_O(M+N)_Space_O(1)
// #2025_03_26_Time_65_ms_(72.36%)_Space_63.62_MB_(41.12%)

import { ListNode } from '../../com_github_leetcode/listnode'

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function getNode(index: number, startNode: ListNode): ListNode {
    let node = startNode
    while (index > 0) {
        node = node.next
        --index
    }
    return node
}

function getListSize(node: ListNode): number {
    let size = 0

    while (node) {
        ++size
        node = node.next
    }

    return size
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const sizeA = getListSize(headA)
    const sizeB = getListSize(headB)
    let startA = headA
    let startB = headB
    let diff = Math.abs(sizeA - sizeB)
    if (sizeB > sizeA) {
        startB = getNode(diff, startB)
    }
    if (sizeA > sizeB) {
        startA = getNode(diff, startA)
    }
    while (startB && startA) {
        if (startA === startB) {
            return startA
        }
        startA = startA.next
        startB = startB.next
    }
    return null
}

export { getIntersectionNode }
