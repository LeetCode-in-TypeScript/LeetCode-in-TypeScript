// tslint:disable:no-magic-numbers
import { ListNode } from 'src/main/ts/com_github_leetcode/listnode'
import { hasCycle } from 'src/main/ts/g0101_0200/s0141_linked_list_cycle/solution'
import { expect, test } from 'vitest'

test('hasCycle', () => {
    const listNode1 = new ListNode(3)
    listNode1.next = new ListNode(2)
    listNode1.next.next = new ListNode(0)
    listNode1.next.next.next = new ListNode(-4)
    listNode1.next.next.next.next = listNode1.next
    expect(hasCycle(listNode1)).toEqual(true)
})

test('hasCycle2', () => {
    const listNode1 = new ListNode(1)
    listNode1.next = new ListNode(2)
    listNode1.next.next = listNode1
    expect(hasCycle(listNode1)).toEqual(true)
})

test('hasCycle3', () => {
    const listNode1 = new ListNode(1)
    expect(hasCycle(listNode1)).toEqual(false)
})
