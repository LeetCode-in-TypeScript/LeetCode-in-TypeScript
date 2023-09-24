// #Medium #Top_100_Liked_Questions #Linked_List #Recursion #Data_Structure_II_Day_12_Linked_List
// #Udemy_Linked_List #2023_08_29_Time_59_ms_(62.67%)_Space_44.7_MB_(26.03%)

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
function swapPairs(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null
    }
    const len = getLength(head)
    return reverse(head, len)
}

function getLength(curr: ListNode | null): number {
    let cnt = 0
    while (curr !== null) {
        cnt++
        curr = curr.next
    }
    return cnt
}

// Recursive function to reverse in groups
function reverse(head: ListNode | null, len: number): ListNode | null {
    // base case
    if (len < 2) {
        return head
    }
    let curr: ListNode | null = head
    let prev: ListNode | null = null
    let next: ListNode | null
    for (let i = 0; i < 2; i++) {
        // reverse linked list code
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    head.next = reverse(curr, len - 2)
    return prev
}

export { swapPairs }
