// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { maxPathSum } from 'src/main/ts/g0101_0200/s0124_binary_tree_maximum_path_sum/solution'
import { expect, test } from 'vitest'

test('maxPathSum', () => {
    expect(maxPathSum(createTreeNode([1, 2, 3]))).toEqual(6)
})

test('maxPathSum2', () => {
    expect(maxPathSum(createTreeNode([-10, 9, 20, null, null, 15, 7]))).toEqual(42)
})
