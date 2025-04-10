// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { rightSideView } from 'src/main/ts/g0101_0200/s0199_binary_tree_right_side_view/solution'
import { expect, test } from 'vitest'

test('rightSideView', () => {
    expect(rightSideView(createTreeNode([1, 2, 3, null, 5, null, 4]))).toEqual([1, 3, 4])
})

test('rightSideView2', () => {
    expect(rightSideView(createTreeNode([1, 2, 3, 4, null, null, null, 5]))).toEqual([1, 3, 4, 5])
})

test('rightSideView3', () => {
    expect(rightSideView(createTreeNode([1, null, 3]))).toEqual([1, 3])
})

test('rightSideView4', () => {
    expect(rightSideView(createTreeNode([]))).toEqual([])
})
