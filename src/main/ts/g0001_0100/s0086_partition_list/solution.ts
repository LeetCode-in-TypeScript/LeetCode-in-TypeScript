// #Medium #Two_Pointers #Linked_List #Top_Interview_150_Linked_List
// #2025_04_05_Time_0_ms_(100.00%)_Space_58.16_MB_(62.07%)

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

function partition(head: ListNode | null, x: number): ListNode | null {
    let beforeHead = new ListNode(0)
    let afterHead = new ListNode(0)
    let before = beforeHead
    let after = afterHead
    while (head !== null) {
        const nextNode = head.next
        if (head.val < x) {
            before.next = head
            before = before.next
        } else {
            after.next = head
            after = after.next
        }
        head = nextNode
    }
    after.next = null
    before.next = afterHead.next
    return beforeHead.next
}

export { partition }
