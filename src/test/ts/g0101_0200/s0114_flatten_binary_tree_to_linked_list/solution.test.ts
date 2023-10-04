// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { flatten } from 'src/main/ts/g0101_0200/s0114_flatten_binary_tree_to_linked_list/solution'
import { expect, test } from 'vitest'

test('flatten', () => {
    const tree = createTreeNode([1, 2, 5, 3, 4, null, 6])
    flatten(tree)
    expect(tree).toEqual(createTreeNode([1, null, 2, null, 3, null, 4, null, 5, null, 6]))
})

test('flatten2', () => {
    const tree = createTreeNode([])
    flatten(tree)
    expect(tree).toEqual(createTreeNode([]))
})

test('flatten3', () => {
    const tree = createTreeNode([0])
    flatten(tree)
    expect(tree).toEqual(createTreeNode([0]))
})
