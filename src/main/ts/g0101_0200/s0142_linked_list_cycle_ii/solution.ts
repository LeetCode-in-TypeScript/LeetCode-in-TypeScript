import { ListNode } from '../../com_github_leetcode/listnode'

// #Medium #Top_100_Liked_Questions #Hash_Table #Two_Pointers #Linked_List
// #Data_Structure_II_Day_10_Linked_List #Level_1_Day_4_Linked_List #Udemy_Linked_List
// #Big_O_Time_O(N)_Space_O(1) #2023_10_06_Time_59_ms_(94.39%)_Space_45.5_MB_(60.71%)

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

function detectCycle(head: ListNode | null): ListNode | null {
    const set = new Set<ListNode>()
    while (head) {
        if (set.has(head)) return head
        set.add(head)
        head = head.next
    }
    return null
}

export { detectCycle }
