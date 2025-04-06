// tslint:disable:no-magic-numbers
import { deleteDuplicates } from 'src/main/ts/g0001_0100/s0082_remove_duplicates_from_sorted_list_ii/solution'
import { expect, test } from 'vitest'
import { constructLinkedList } from '../../com_github_leetcode/linkedlistutils'

test('deleteDuplicates', () => {
    expect(deleteDuplicates(constructLinkedList([1, 2, 3, 3, 4, 4, 5])).toString()).toEqual('1, 2, 5')
})

test('deleteDuplicates2', () => {
    expect(deleteDuplicates(constructLinkedList([1, 1, 1, 2, 3])).toString()).toEqual('2, 3')
})
