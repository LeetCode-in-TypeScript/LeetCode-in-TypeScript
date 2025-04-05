// #Medium #Two_Pointers #Linked_List #Data_Structure_II_Day_11_Linked_List
// #Algorithm_II_Day_3_Two_Pointers #Top_Interview_150_Linked_List
// #2025_04_05_Time_0_ms_(100.00%)_Space_58.58_MB_(53.51%)

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
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }
    const dummy = new ListNode(0)
    dummy.next = head
    let prev: ListNode = dummy
    let curr: ListNode | null = head
    while (curr) {
        let hasDuplicate = false
        while (curr.next && curr.val === curr.next.val) {
            hasDuplicate = true
            curr = curr.next
        }
        if (hasDuplicate) {
            prev.next = curr.next
        } else {
            prev = prev.next!
        }
        curr = curr.next
    }
    return dummy.next
}

export { deleteDuplicates }
