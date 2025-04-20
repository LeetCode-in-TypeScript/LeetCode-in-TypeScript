// #Easy #Top_100_Liked_Questions #Two_Pointers #Stack #Linked_List #Recursion
// #Level_2_Day_3_Linked_List #Udemy_Linked_List #Big_O_Time_O(n)_Space_O(1)
// #2025_03_28_Time_3_ms_(92.85%)_Space_79.85_MB_(44.75%)

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
function isPalindrome(head: ListNode | null): boolean {
    if (head === null || head.next === null) {
        // Empty list or single element is considered a palindrome.
        return true
    }
    let len = 0
    let right = head
    // Calculate the length of the list.
    while (right !== null) {
        right = right.next
        len++
    }
    // Find the middle of the list.
    let middle = Math.floor(len / 2)
    // Reset the right pointer to the head.
    right = head
    // Move the right pointer to the middle of the list.
    for (let i = 0; i < middle; i++) {
        right = right.next
    }
    // Reverse the right half of the list.
    let prev = null
    while (right !== null) {
        const next = right.next
        right.next = prev
        prev = right
        right = next
    }
    // Compare the left and right halves.
    for (let i = 0; i < middle; i++) {
        if (prev !== null && head.val === prev.val) {
            head = head.next
            prev = prev.next
        } else {
            return false
        }
    }
    return true
}

export { isPalindrome }
