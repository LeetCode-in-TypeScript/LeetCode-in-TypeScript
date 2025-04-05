// tslint:disable:no-magic-numbers
import { reverseBetween } from 'src/main/ts/g0001_0100/s0092_reverse_linked_list_ii/solution'
import { expect, test } from 'vitest'
import { constructLinkedList } from '../../com_github_leetcode/linkedlistutils'

test('reverseBetween', () => {
    expect(reverseBetween(constructLinkedList([1,2,3,4,5]), 2, 4).toString()).toEqual('1, 4, 3, 2, 5')
})

test('reverseBetween2', () => {
    expect(reverseBetween(constructLinkedList([5]), 1, 1).toString()).toEqual('5')
})
