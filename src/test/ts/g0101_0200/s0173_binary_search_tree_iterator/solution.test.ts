// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { BSTIterator } from 'src/main/ts/g0101_0200/s0173_binary_search_tree_iterator/solution'
import { expect, test } from 'vitest'

test('bSTIterator', () => {
    const bSTIterator = new BSTIterator(createTreeNode([7, 3, 15, null, null, 9, 20]))
    expect(bSTIterator.next()).toEqual(3)
    expect(bSTIterator.next()).toEqual(7)
    expect(bSTIterator.hasNext()).toBeTruthy()
    expect(bSTIterator.next()).toEqual(9)
    expect(bSTIterator.hasNext()).toBeTruthy()
    expect(bSTIterator.next()).toEqual(15)
    expect(bSTIterator.hasNext()).toBeTruthy()
    expect(bSTIterator.next()).toEqual(20)
    expect(bSTIterator.hasNext()).toBeFalsy()
})
