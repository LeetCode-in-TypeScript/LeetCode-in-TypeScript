// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { invertTree } from 'src/main/ts/g0201_0300/s0226_invert_binary_tree/solution'
import { expect, test } from 'vitest'

test('invertTree', () => {
    const tree = createTreeNode([4, 2, 7, 1, 3, 6, 9])
    expect(invertTree(tree)).toEqual(createTreeNode([4, 7, 2, 9, 6, 3, 1]))
})

test('invertTree2', () => {
    const tree = createTreeNode([2, 1, 3])
    expect(invertTree(tree)).toEqual(createTreeNode([2, 3, 1]))
})

test('invertTree3', () => {
    const tree = createTreeNode([])
    expect(invertTree(tree)).toEqual(createTreeNode([]))
})
