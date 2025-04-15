// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { getMinimumDifference } from 'src/main/ts/g0501_0600/s0530_minimum_absolute_difference_in_bst/solution'
import { expect, test } from 'vitest'

test('getMinimumDifference', () => {
    expect(getMinimumDifference(createTreeNode([4, 2, 6, 1, 3]))).toEqual(1)
})

test('getMinimumDifference2', () => {
    expect(getMinimumDifference(createTreeNode([1, 0, 48, null, null, 12, 49]))).toEqual(1)
})
