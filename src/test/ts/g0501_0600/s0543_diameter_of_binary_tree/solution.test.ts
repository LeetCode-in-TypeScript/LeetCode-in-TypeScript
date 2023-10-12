// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { diameterOfBinaryTree } from 'src/main/ts/g0501_0600/s0543_diameter_of_binary_tree/solution'
import { expect, test } from 'vitest'

test('diameterOfBinaryTree', () => {
    expect(diameterOfBinaryTree(createTreeNode([1, 2, 3, 4, 5]))).toEqual(3)
})

test('diameterOfBinaryTree2', () => {
    expect(diameterOfBinaryTree(createTreeNode([1, 2]))).toEqual(1)
})
