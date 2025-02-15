// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #Linked_List #Recursion
// #Data_Structure_I_Day_7_Linked_List #Algorithm_I_Day_10_Recursion_Backtracking
// #Level_1_Day_3_Linked_List #Udemy_Linked_List #Top_Interview_150_Linked_List
// #Big_O_Time_O(m+n)_Space_O(m+n) #2023_08_29_Time_59_ms_(86.77%)_Space_44_MB_(98.03%)

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
function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let list = new ListNode(-1)
    let head = list
    while (l1 !== null || l2 !== null) {
        if (l1 !== null && l2 !== null) {
            if (l1.val <= l2.val) {
                list.next = new ListNode(l1.val)
                l1 = l1.next
            } else {
                list.next = new ListNode(l2.val)
                l2 = l2.next
            }
        } else if (l1 !== null) {
            list.next = new ListNode(l1.val)
            l1 = l1.next
        } else if (l2 !== null) {
            list.next = new ListNode(l2.val)
            l2 = l2.next
        }
        list = list.next!
    }
    return head.next
}

export { mergeTwoLists }
