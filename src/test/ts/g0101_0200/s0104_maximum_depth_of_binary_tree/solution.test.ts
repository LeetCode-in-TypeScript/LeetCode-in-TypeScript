// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { maxDepth } from 'src/main/ts/g0101_0200/s0104_maximum_depth_of_binary_tree/solution'
import { expect, test } from 'vitest'

test('maxDepth', () => {
    expect(maxDepth(createTreeNode([3, 9, 20, null, null, 15, 7]))).toEqual(3)
})

test('maxDepth2', () => {
    expect(maxDepth(createTreeNode([1, null, 2]))).toEqual(2)
})
