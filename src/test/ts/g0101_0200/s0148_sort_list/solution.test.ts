// tslint:disable:no-magic-numbers
import { ListNode } from 'src/main/ts/com_github_leetcode/listnode'
import { sortList } from 'src/main/ts/g0101_0200/s0148_sort_list/solution'
import { expect, test } from 'vitest'

test('sortList', () => {
    const listNode1 = new ListNode(4)
    listNode1.next = new ListNode(2)
    listNode1.next.next = new ListNode(1)
    listNode1.next.next.next = new ListNode(3)
    expect(sortList(listNode1)?.toString()).toEqual('1, 2, 3, 4')
})

test('sortList2', () => {
    const listNode1 = new ListNode(-1)
    listNode1.next = new ListNode(5)
    listNode1.next.next = new ListNode(3)
    listNode1.next.next.next = new ListNode(4)
    listNode1.next.next.next.next = new ListNode(0)
    expect(sortList(listNode1)?.toString()).toEqual('-1, 0, 3, 4, 5')
})

test('sortList3', () => {
    expect(sortList(null)).toEqual(null)
})
