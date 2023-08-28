// tslint:disable:no-magic-numbers
import { removeNthFromEnd } from 'src/main/ts/g0001_0100/s0019_remove_nth_node_from_end_of_list/solution'
import { constructLinkedList } from '../../com_github_leetcode/linkedlistutils'
import { expect, test } from 'vitest'

test('removeNthFromEnd', () => {
    const list = constructLinkedList([1, 2, 3, 4, 5])
    const result = removeNthFromEnd(list, 2)
    expect(result.toString()).toEqual('1, 2, 3, 5')
})

test('removeNthFromEnd2', () => {
    const result = removeNthFromEnd(constructLinkedList([1]), 1)
    expect(result).toEqual(null)
})

test('removeNthFromEnd3', () => {
    const result = removeNthFromEnd(constructLinkedList([1, 2]), 1)
    expect(result.toString()).toEqual('1')
})
