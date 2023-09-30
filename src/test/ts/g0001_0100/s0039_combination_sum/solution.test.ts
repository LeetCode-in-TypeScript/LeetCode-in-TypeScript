// tslint:disable:no-magic-numbers
import { combinationSum } from 'src/main/ts/g0001_0100/s0039_combination_sum/solution'
import { expect, test } from 'vitest'

test('combinationSum', () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]])
})

test('combinationSum2', () => {
    expect(combinationSum([2, 3, 5], 8)).toEqual([
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
    ])
})

test('combinationSum3', () => {
    expect(combinationSum([2], 1)).toEqual([])
})
