// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Two_Pointers #Linked_List
// #Algorithm_I_Day_5_Two_Pointers #Level_2_Day_3_Linked_List
// #2023_08_28_Time_54_ms_(87.87%)_Space_44.7_MB_(49.30%)

import { ListNode } from '../../com_github_leetcode/listnode'

let localN: number

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    localN = n
    const dummy = new ListNode(0)
    dummy.next = head
    removeNth(dummy)
    return dummy.next
}

function removeNth(node: ListNode | null): void {
    if (!node || !node.next) {
        return
    }
    removeNth(node.next)
    localN--

    if (localN === 0) {
        node.next = node.next?.next || null
    }
}

export { removeNthFromEnd }
