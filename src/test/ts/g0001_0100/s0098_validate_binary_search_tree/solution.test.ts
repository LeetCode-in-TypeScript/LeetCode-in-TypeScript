// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { isValidBST } from 'src/main/ts/g0001_0100/s0098_validate_binary_search_tree/solution'
import { expect, test } from 'vitest'

test('isValidBST', () => {
    expect(isValidBST(createTreeNode([2, 1, 3]))).toEqual(true)
})

test('isValidBST2', () => {
    expect(isValidBST(createTreeNode([5, 1, 4, null, null, 3, 6]))).toEqual(false)
})
