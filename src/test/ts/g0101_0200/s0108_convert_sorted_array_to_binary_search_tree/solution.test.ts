// tslint:disable:no-magic-numbers
import { sortedArrayToBST } from 'src/main/ts/g0101_0200/s0108_convert_sorted_array_to_binary_search_tree/solution'
import { expect, test } from 'vitest'
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'

test('sortedArrayToBST', () => {
    expect(sortedArrayToBST([-10, -3, 0, 5, 9])).toEqual(createTreeNode([0, -10, 5, null, -3, null, 9]))
})

test('sortedArrayToBST2', () => {
    expect(sortedArrayToBST([1, 3])).toEqual(createTreeNode([1, null, 3]))
})
