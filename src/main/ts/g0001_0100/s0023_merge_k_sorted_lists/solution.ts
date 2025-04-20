// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #Heap_Priority_Queue #Linked_List
// #Divide_and_Conquer #Merge_Sort #Top_Interview_150_Divide_and_Conquer
// #Big_O_Time_O(k*n*log(k))_Space_O(log(k)) #2025_03_22_Time_4_ms_(97.65%)_Space_64.08_MB_(30.06%)

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
const merge2Lists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
    if (!list1 || !list2) {
        return list1 ?? list2
    }
    const tempHead = new ListNode()
    let current = tempHead
    let l1 = list1
    let l2 = list2
    while (l1 || l2) {
        if (!l1) {
            current.next = l2
            break
        }
        if (!l2) {
            current.next = l1
            break
        }
        if (l1.val < l2.val) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }
    return tempHead.next
}

const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
    while (lists.length > 1) {
        const mergedLists = []
        for (let i = 0; i < lists.length; i += 2) {
            const list1 = lists[i]
            const list2 = lists[i + 1] ?? null
            mergedLists.push(merge2Lists(list1, list2))
        }
        lists = mergedLists
    }
    return lists[0] ?? null
}

export { mergeKLists }
