// tslint:disable:no-magic-numbers
import { TreeNode, createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { lowestCommonAncestor } from 'src/main/ts/g0201_0300/s0236_lowest_common_ancestor_of_a_binary_tree/solution'
import { expect, test } from 'vitest'

test('lowestCommonAncestor', () => {
    expect(
        lowestCommonAncestor(createTreeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), new TreeNode(5), new TreeNode(1))
            .val,
    ).toEqual(3)
})

test('lowestCommonAncestor2', () => {
    expect(
        lowestCommonAncestor(createTreeNode([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]), new TreeNode(5), new TreeNode(4))
            .val,
    ).toEqual(5)
})

test('lowestCommonAncestor3', () => {
    expect(lowestCommonAncestor(createTreeNode([1, 2]), new TreeNode(1), new TreeNode(2)).val).toEqual(1)
})
