// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Linked_List #Recursion
// #LeetCode_75_LinkedList #Data_Structure_I_Day_8_Linked_List
// #Algorithm_I_Day_10_Recursion_Backtracking #Level_1_Day_3_Linked_List #Udemy_Linked_List
// #Big_O_Time_O(N)_Space_O(1) #2025_03_26_Time_0_ms_(100.00%)_Space_58.92_MB_(16.01%)

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
