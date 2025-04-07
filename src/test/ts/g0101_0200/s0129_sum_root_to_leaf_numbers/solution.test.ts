// tslint:disable:no-magic-numbers
import { createTreeNode } from 'src/main/ts/com_github_leetcode/treenode'
import { sumNumbers } from 'src/main/ts/g0101_0200/s0129_sum_root_to_leaf_numbers/solution'
import { expect, test } from 'vitest'

test('sumNumbers', () => {
    expect(sumNumbers(createTreeNode([1,2,3]))).toEqual(25)
})

test('sumNumbers2', () => {
    expect(sumNumbers(createTreeNode([4,9,0,5,1]))).toEqual(1026)
})
