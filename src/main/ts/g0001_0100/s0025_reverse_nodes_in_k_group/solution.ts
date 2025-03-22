// #Hard #Top_100_Liked_Questions #Linked_List #Recursion #Data_Structure_II_Day_13_Linked_List
// #Udemy_Linked_List #Top_Interview_150_Linked_List #Big_O_Time_O(n)_Space_O(k)
// #2025_03_22_Time_0_ms_(100.00%)_Space_60.66_MB_(27.50%)

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
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (head === null || head.next === null || k === 1) {
        return head
    }
    let j = 0
    let len = head
    // Loop for checking the length of the linked list. If the linked list is less than k, then return as it is.
    while (j < k) {
        if (len === null) {
            return head
        }
        len = len.next
        j++
    }
    // Reverse linked list logic applied here.
    let c = head
    let n = null
    let prev = null
    let i = 0
    // Traverse the while loop for K times to reverse the nodes in K groups.
    while (i !== k) {
        n = c.next
        c.next = prev
        prev = c
        c = n
        i++
    }
    // 'head' now points to the last node of the reversed K-group.
    // Recursion for further remaining linked list.
    head.next = reverseKGroup(n, k)
    return prev
}

export { reverseKGroup }
