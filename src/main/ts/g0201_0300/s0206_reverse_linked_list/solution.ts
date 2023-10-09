// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Linked_List #Recursion
// #Data_Structure_I_Day_8_Linked_List #Algorithm_I_Day_10_Recursion_Backtracking
// #Level_1_Day_3_Linked_List #Udemy_Linked_List #Big_O_Time_O(N)_Space_O(1)
// #2023_10_09_Time_51_ms_(92.87%)_Space_44.3_MB_(96.03%)

import { ListNode } from '../../com_github_leetcode/listnode'

/*
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
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null
    let curr: ListNode | null = head
    while (curr !== null) {
        const next: ListNode | null = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

export { reverseList }
