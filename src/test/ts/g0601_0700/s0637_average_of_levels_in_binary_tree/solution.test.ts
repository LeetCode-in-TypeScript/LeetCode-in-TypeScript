// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { averageOfLevels } from 'src/main/ts/g0601_0700/s0637_average_of_levels_in_binary_tree/solution'
import { expect, test } from 'vitest'

test('averageOfLevels', () => {
    expect(averageOfLevels(createTreeNode([3, 9, 20, null, null, 15, 7]))).toEqual([3.0, 14.5, 11.0])
})

test('averageOfLevels2', () => {
    expect(averageOfLevels(createTreeNode([3, 9, 20, 15, 7]))).toEqual([3.0, 14.5, 11.0])
})
