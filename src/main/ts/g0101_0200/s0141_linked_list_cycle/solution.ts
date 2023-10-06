import { ListNode } from '../../com_github_leetcode/listnode'

// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Hash_Table #Two_Pointers #Linked_List
// #Data_Structure_I_Day_7_Linked_List #Udemy_Linked_List #Big_O_Time_O(N)_Space_O(1)
// #2023_10_06_Time_59_ms_(93.37%)_Space_45.2_MB_(76.28%)

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

function hasCycle(head: ListNode | null): boolean {
    let fast = head
    while (fast && fast.next) {
        head = head.next
        fast = fast.next.next
        if (head === fast) return true
    }
    return false
}

export { hasCycle }
