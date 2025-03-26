// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Sorting #Two_Pointers #Linked_List
// #Divide_and_Conquer #Merge_Sort #Level_2_Day_4_Linked_List #Top_Interview_150_Divide_and_Conquer
// #Big_O_Time_O(log(N))_Space_O(log(N)) #2025_03_26_Time_36_ms_(44.94%)_Space_86.58_MB_(5.99%)

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

function sortList(head: ListNode | null): ListNode | null {
    if (!head) return null
    let array = []
    while (head) {
        array.push([head, head.val])
        head = head.next
    }
    array.sort((a, b) => {
        return a[1] - b[1]
    })
    for (let iter = 0; iter < array.length; iter++) {
        if (iter + 1 >= array.length) array[iter][0].next = null
        else array[iter][0].next = array[iter + 1][0]
    }
    return array[0][0]
}

export { sortList }
