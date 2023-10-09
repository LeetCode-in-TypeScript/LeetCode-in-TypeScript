// tslint:disable:no-magic-numbers
import { ListNode } from 'src/main/ts/com_github_leetcode/listnode'
import { mergeKLists } from 'src/main/ts/g0001_0100/s0023_merge_k_sorted_lists/solution'
import { expect, test } from 'vitest'
import { createSinglyLinkedList } from '../../com_github_leetcode/linkedlistutils'

test('mergeKLists', () => {
    const head1 = createSinglyLinkedList([1, 4, 5])
    const head2 = createSinglyLinkedList([1, 3, 4])
    const head3 = createSinglyLinkedList([2, 6])
    expect(mergeKLists([head1, head2, head3]).toString()).toEqual('1, 1, 2, 3, 4, 4, 5, 6')
})

test('mergeKLists2', () => {
    const head1 = createSinglyLinkedList([1, 3, 5, 7, 11])
    const head2 = createSinglyLinkedList([2, 8, 12])
    const head3 = createSinglyLinkedList([4, 6, 9, 10])
    expect(mergeKLists([head1, head2, head3])?.toString()).toEqual('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12')
})
