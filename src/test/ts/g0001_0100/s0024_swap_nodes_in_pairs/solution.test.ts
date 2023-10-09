// tslint:disable:no-magic-numbers
import { swapPairs } from 'src/main/ts/g0001_0100/s0024_swap_nodes_in_pairs/solution'
import { expect, test } from 'vitest'
import { createSinglyLinkedList } from '../../com_github_leetcode/linkedlistutils'
import { ListNode } from 'src/main/ts/com_github_leetcode/listnode'

test('swapPairs', () => {
    const listNode = createSinglyLinkedList([1, 2, 3, 4])
    expect(swapPairs(listNode).toString()).toEqual('2, 1, 4, 3')
})

test('swapPairs2', () => {
    expect(swapPairs(new ListNode(1)).toString()).toEqual('1')
})
