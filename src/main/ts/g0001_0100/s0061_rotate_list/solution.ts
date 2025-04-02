// #Medium #Two_Pointers #Linked_List #Programming_Skills_II_Day_16 #Udemy_Linked_List
// #Top_Interview_150_Linked_List #2025_04_02_Time_0_ms_(100.00%)_Space_58.23_MB_(55.89%)

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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 0) {
        return head
    }

    let tail: ListNode | null = head
    let count = 1
    while (tail.next) {
        count++
        tail = tail.next
    }

    let times = k % count
    if (times === 0) {
        return head
    }

    let temp: ListNode | null = head
    for (let i = 1; i < count - times; i++) {
        temp = temp!.next
    }

    let newHead = temp!.next
    temp!.next = null
    tail!.next = head

    return newHead
}

export { rotateRight }
