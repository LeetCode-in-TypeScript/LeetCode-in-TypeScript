import { ListNode } from '../../../main/ts/com_github_leetcode/listnode'

function constructLinkedList(nums: number[]): ListNode | null {
    if (!nums || nums.length === 0) {
        return null
    }
    const pre = new ListNode(-1)
    let head = new ListNode(nums[0])
    pre.next = head
    for (let i = 1; i < nums.length; i++) {
        head.next = new ListNode(nums[i])
        head = head.next
    }
    return pre.next
}

function createSinglyLinkedList(listValues: number[]): ListNode {
    if (!listValues || listValues.length === 0) {
        throw new Error("Please pass in a valid listValues to create a singly linked list.");
    }
    const head = new ListNode(listValues[0]);
    let current = head;
    for (let i = 1; i < listValues.length; i++) {
        const next = new ListNode(listValues[i]);
        current.next = next;
        current = current.next;
    }
    return head;
}

export { constructLinkedList, createSinglyLinkedList }
