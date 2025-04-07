// tslint:disable:no-magic-numbers
import { zigzagLevelOrder } from 'src/main/ts/g0101_0200/s0103_binary_tree_zigzag_level_order_traversal/solution'
import { expect, test } from 'vitest'
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'

test('zigzagLevelOrder', () => {
    expect(zigzagLevelOrder(createTreeNode([3, 9, 20, null, null, 15, 7]))).toEqual([[3],[20, 9],[15, 7]])
})

test('zigzagLevelOrder2', () => {
    expect(zigzagLevelOrder(createTreeNode([1]))).toEqual([[1]])
})

test('zigzagLevelOrder3', () => {
    expect(zigzagLevelOrder(createTreeNode([]))).toEqual([])
})
