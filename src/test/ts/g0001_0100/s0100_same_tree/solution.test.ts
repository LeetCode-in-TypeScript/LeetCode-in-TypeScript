// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { isSameTree } from 'src/main/ts/g0001_0100/s0100_same_tree/solution'
import { expect, test } from 'vitest'

test('isSameTree', () => {
    expect(isSameTree(createTreeNode([1, 2, 3]), createTreeNode([1, 2, 3]))).toEqual(true)
})

test('isSameTree2', () => {
    expect(isSameTree(createTreeNode([1, 2, 3]), createTreeNode([1, null, 2]))).toEqual(false)
})

test('isSameTree3', () => {
    expect(isSameTree(createTreeNode([1, 2, 1]), createTreeNode([1, 1, 2]))).toEqual(false)
})
