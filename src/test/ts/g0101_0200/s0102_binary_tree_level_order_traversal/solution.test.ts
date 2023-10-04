// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { levelOrder } from 'src/main/ts/g0101_0200/s0102_binary_tree_level_order_traversal/solution'
import { expect, test } from 'vitest'

test('levelOrder', () => {
    expect(levelOrder(createTreeNode([3, 9, 20, null, null, 15, 7]))).toEqual([[3], [9, 20], [15, 7]])
})

test('levelOrder2', () => {
    expect(levelOrder(createTreeNode([1]))).toEqual([[1]])
})

test('levelOrder3', () => {
    expect(levelOrder(createTreeNode([]))).toEqual([])
})
