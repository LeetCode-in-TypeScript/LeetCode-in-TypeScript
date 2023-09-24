// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #Heap_Priority_Queue #Linked_List
// #Divide_and_Conquer #Merge_Sort #2023_08_29_Time_75_ms_(97.06%)_Space_47.3_MB_(98.42%)

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
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) {
        return null
    }
    return mergeKListsRecursive(lists, 0, lists.length)
}

function mergeKListsRecursive(lists: Array<ListNode | null>, leftIndex: number, rightIndex: number): ListNode | null {
    if (rightIndex > leftIndex + 1) {
        const mid = Math.floor((leftIndex + rightIndex) / 2)
        const left = mergeKListsRecursive(lists, leftIndex, mid)
        const right = mergeKListsRecursive(lists, mid, rightIndex)
        return mergeTwoLists(left, right)
    } else {
        return lists[leftIndex]
    }
}

function mergeTwoLists(left: ListNode | null, right: ListNode | null): ListNode | null {
    if (left === null) {
        return right
    }
    if (right === null) {
        return left
    }
    let res: ListNode | null
    if (left.val <= right.val) {
        res = left
        left = left.next
    } else {
        res = right
        right = right.next
    }
    let node = res
    while (left !== null || right !== null) {
        if (left === null) {
            node.next = right
            right = right.next
        } else if (right === null || left.val <= right.val) {
            node.next = left
            left = left.next
        } else {
            node.next = right
            right = right.next
        }
        node = node.next
    }
    return res
}

export { mergeKLists }
