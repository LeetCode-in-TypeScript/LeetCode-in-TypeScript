// tslint:disable:no-magic-numbers
import { ListNode } from 'src/main/ts/com_github_leetcode/listnode'
import { detectCycle } from 'src/main/ts/g0101_0200/s0142_linked_list_cycle_ii/solution'
import { expect, test } from 'vitest'

test('detectCycle', () => {
    const listNode1 = new ListNode(3)
    listNode1.next = new ListNode(2)
    listNode1.next.next = new ListNode(0)
    listNode1.next.next.next = new ListNode(-4)
    listNode1.next.next.next.next = listNode1.next
    expect(detectCycle(listNode1) == listNode1.next).toEqual(true)
})

test('detectCycle2', () => {
    const listNode1 = new ListNode(1)
    listNode1.next = new ListNode(2)
    listNode1.next.next = listNode1
    expect(detectCycle(listNode1) == listNode1).toEqual(true)
})

test('detectCycle3', () => {
    const listNode1 = new ListNode(1)
    expect(detectCycle(listNode1)).toEqual(null)
})
