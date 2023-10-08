// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Sorting #Two_Pointers #Linked_List
// #Divide_and_Conquer #Merge_Sort #Level_2_Day_4_Linked_List #Big_O_Time_O(log(N))_Space_O(log(N))
// #2023_10_08_Time_141_ms_(97.14%)_Space_71.9_MB_(47.35%)

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
