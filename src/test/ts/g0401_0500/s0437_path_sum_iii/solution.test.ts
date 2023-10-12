// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { pathSum } from 'src/main/ts/g0401_0500/s0437_path_sum_iii/solution'
import { expect, test } from 'vitest'

test('pathSum', () => {
    expect(pathSum(createTreeNode([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8)).toEqual(3)
})

test('pathSum2', () => {
    expect(pathSum(createTreeNode([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]), 22)).toEqual(3)
})
