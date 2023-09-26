// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Math #Linked_List #Recursion
// #Data_Structure_II_Day_10_Linked_List #Programming_Skills_II_Day_15
// #Big_O_Time_O(max(N,M))_Space_O(max(N,M)) #2023_08_26_Time_88_ms_(93.29%)_Space_48.2_MB_(57.93%)

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
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const result = new ListNode(null)
    let next = result
    let carryNum = 0
    let currSum = 0
    let num1 = 0
    let num2 = 0

    while (l1 !== null || l2 !== null) {
        // @ts-ignore
        num1 = l1 !== null ? l1.val : 0
        // @ts-ignore
        num2 = l2 !== null ? l2.val : 0
        currSum = (num1 + num2 + carryNum) % 10
        carryNum = Math.floor((num1 + num2 + carryNum) / 10)
        next.next = new ListNode(currSum)
        next = next.next
        l1 = l1 !== null ? l1.next : null
        l2 = l2 !== null ? l2.next : null
    }
    if (carryNum) {
        next.next = new ListNode(carryNum)
    }
    return result.next
}

export { addTwoNumbers }
