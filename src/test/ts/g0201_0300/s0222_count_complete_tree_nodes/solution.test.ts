// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { countNodes } from 'src/main/ts/g0201_0300/s0222_count_complete_tree_nodes/solution'
import { expect, test } from 'vitest'

test('countNodes', () => {
    expect(countNodes(createTreeNode([1, 2, 3, 4, 5, 6]))).toEqual(6)
})

test('countNodes2', () => {
    expect(countNodes(createTreeNode([]))).toEqual(0)
})

test('countNodes3', () => {
    expect(countNodes(createTreeNode([1]))).toEqual(1)
})
