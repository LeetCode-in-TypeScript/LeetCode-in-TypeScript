// tslint:disable:no-magic-numbers
import { hasPathSum } from 'src/main/ts/g0101_0200/s0112_path_sum/solution'
import { expect, test } from 'vitest'
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'

test('hasPathSum', () => {
    expect(hasPathSum(createTreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22)).toEqual(true)
})

test('hasPathSum2', () => {
    expect(hasPathSum(createTreeNode([1, 2, 3]), 5)).toEqual(false)
})

test('hasPathSum3', () => {
    expect(hasPathSum(createTreeNode([]), 0)).toEqual(false)
})
