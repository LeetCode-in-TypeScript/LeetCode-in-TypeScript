// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { inorderTraversal } from 'src/main/ts/g0001_0100/s0094_binary_tree_inorder_traversal/solution'
import { expect, test } from 'vitest'

test('inorderTraversal', () => {
    expect(inorderTraversal(createTreeNode([1, null, 2, 3]))).toEqual([1, 3, 2])
})

test('inorderTraversal2', () => {
    expect(inorderTraversal(createTreeNode([]))).toEqual([])
})

test('inorderTraversal3', () => {
    expect(inorderTraversal(createTreeNode([1]))).toEqual([1])
})
