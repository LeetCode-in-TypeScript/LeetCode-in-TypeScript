// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { buildTree } from 'src/main/ts/g0101_0200/s0105_construct_binary_tree_from_preorder_and_inorder_traversal/solution'
import { expect, test } from 'vitest'

test('buildTree', () => {
    expect(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])).toEqual(createTreeNode([3, 9, 20, null, null, 15, 7]))
})

test('buildTree2', () => {
    expect(buildTree([-1], [-1])).toEqual(createTreeNode([-1]))
})
