// tslint:disable:no-magic-numbers
import { ListNode } from 'src/main/ts/com_github_leetcode/listnode'
import { reverseList } from 'src/main/ts/g0201_0300/s0206_reverse_linked_list/solution'
import { expect, test } from 'vitest'

test('reverseList', () => {
    const headActual = new ListNode(1)
    headActual.next = new ListNode(2)
    headActual.next.next = new ListNode(3)
    headActual.next.next.next = new ListNode(4)
    headActual.next.next.next.next = new ListNode(5)
    expect(reverseList(headActual)?.toString()).toEqual('5, 4, 3, 2, 1')
})

test('reverseList2', () => {
    const headActual = new ListNode(1)
    headActual.next = new ListNode(2)
    expect(reverseList(headActual)?.toString()).toEqual('2, 1')
})

test('reverseList3', () => {
    expect(reverseList(null)).toEqual(null)
})
