// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Math #Linked_List #Recursion
// #Data_Structure_II_Day_10_Linked_List #Programming_Skills_II_Day_15
// #Top_Interview_150_Linked_List #Big_O_Time_O(max(N,M))_Space_O(max(N,M))
// #AI_can_be_used_to_solve_the_task #2025_03_22_Time_2_ms_(95.82%)_Space_62.80_MB_(21.07%)

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
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummyHead: ListNode = new ListNode(0)
    let p: ListNode | null = l1
    let q: ListNode | null = l2
    let curr: ListNode | null = dummyHead
    let carry: number = 0
    while (p !== null || q !== null) {
        const x: number = p === null ? 0 : p.val
        const y: number = q === null ? 0:  q.val
        const sum: number = carry + x + y
        carry = Math.floor(sum / 10)
        curr.next = new ListNode(sum % 10)
        curr = curr.next
        if (p !== null) {
            p = p.next
        }
        if (q !== null) {
            q = q.next
        }
    }
    if (carry > 0) {
        curr.next = new ListNode(carry)
    }
    return dummyHead.next
}

export { addTwoNumbers }
