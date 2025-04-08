// tslint:disable:no-magic-numbers
import { twoSum } from 'src/main/ts/g0101_0200/s0167_two_sum_ii_input_array_is_sorted/solution'
import { expect, test } from 'vitest'

test('twoSum', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2])
})

test('twoSum2', () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3])
})

test('twoSum3', () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2])
})
