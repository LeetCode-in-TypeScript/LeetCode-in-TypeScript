// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { isSymmetric } from 'src/main/ts/g0101_0200/s0101_symmetric_tree/solution'
import { expect, test } from 'vitest'

test('isSymmetric', () => {
    expect(isSymmetric(createTreeNode([1, 2, 2, 3, 4, 4, 3]))).toEqual(true)
})

test('isSymmetric2', () => {
    expect(isSymmetric(createTreeNode([1, 2, 2, null, 3, null, 3]))).toEqual(false)
})
