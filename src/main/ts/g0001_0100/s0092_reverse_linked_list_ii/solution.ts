// #Medium #Linked_List #Top_Interview_150_Linked_List
// #2025_04_05_Time_0_ms_(100.00%)_Space_55.58_MB_(58.46%)

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
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (left === right || head === null) {
        return head
    }
    let prev: ListNode | null = null
    let temp: ListNode | null = head
    let k = left
    while (temp !== null && k > 1) {
        prev = temp
        temp = temp.next
        k--
    }
    const start = temp
    let prev1: ListNode | null = null
    let tail: ListNode | null = temp
    for (let i = 0; i <= right - left && tail !== null; i++) {
        const next = tail.next
        tail.next = prev1
        prev1 = tail
        tail = next
    }
    if (prev !== null) {
        prev.next = prev1
    } else {
        head = prev1
    }
    if (start !== null) {
        start.next = tail
    }
    return head
}

export { reverseBetween }
