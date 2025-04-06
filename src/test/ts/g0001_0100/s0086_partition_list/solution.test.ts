// tslint:disable:no-magic-numbers
import { partition } from 'src/main/ts/g0001_0100/s0086_partition_list/solution'
import { expect, test } from 'vitest'
import { constructLinkedList } from '../../com_github_leetcode/linkedlistutils'

test('partition', () => {
    expect(partition(constructLinkedList([1, 4, 3, 2, 5, 2]), 3).toString()).toEqual('1, 2, 2, 4, 3, 5')
})

test('partition2', () => {
    expect(partition(constructLinkedList([2, 1]), 2).toString()).toEqual('1, 2')
})
