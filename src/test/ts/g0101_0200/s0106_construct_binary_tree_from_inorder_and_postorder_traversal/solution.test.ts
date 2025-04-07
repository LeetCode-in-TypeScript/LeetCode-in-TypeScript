// tslint:disable:no-magic-numbers
import { buildTree } from 'src/main/ts/g0101_0200/s0106_construct_binary_tree_from_inorder_and_postorder_traversal/solution'
import { expect, test } from 'vitest'
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'

test('buildTree', () => {
    expect(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])).toEqual(createTreeNode([3, 9, 20, null, null, 15, 7]))
})

test('buildTree', () => {
    expect(buildTree([-1], [-1])).toEqual(createTreeNode([-1]))
})
