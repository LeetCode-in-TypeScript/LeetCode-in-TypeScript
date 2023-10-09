// tslint:disable:no-magic-numbers
import { reverseKGroup } from 'src/main/ts/g0001_0100/s0025_reverse_nodes_in_k_group/solution'
import { expect, test } from 'vitest'
import { constructLinkedList } from '../../com_github_leetcode/linkedlistutils'

test('reverseKGroup', () => {
    const listNode = constructLinkedList([1, 2, 3, 4, 5])
    expect(reverseKGroup(listNode, 2).toString()).toEqual('2, 1, 4, 3, 5')
})

test('reverseKGroup2', () => {
    const listNode = constructLinkedList([1, 2, 3, 4, 5])
    expect(reverseKGroup(listNode, 3).toString()).toEqual('3, 2, 1, 4, 5')
})
