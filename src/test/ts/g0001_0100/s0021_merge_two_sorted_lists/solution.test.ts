// tslint:disable:no-magic-numbers
import { mergeTwoLists } from 'src/main/ts/g0001_0100/s0021_merge_two_sorted_lists/solution'
import { createSinglyLinkedList } from '../../com_github_leetcode/linkedlistutils'
import { ListNode } from 'src/main/ts/com_github_leetcode/listnode'
import { expect, test } from 'vitest'

test('mergeTwoLists', () => {
    const l1 = createSinglyLinkedList([1, 2, 4])
    const l2 = createSinglyLinkedList([1, 3, 4])
    expect(mergeTwoLists(l1, l2).toString()).toEqual('1, 1, 2, 3, 4, 4')
})

test('mergeTwoLists2', () => {
    expect(mergeTwoLists(new ListNode(), new ListNode()).toString()).toEqual('0, 0')
})
