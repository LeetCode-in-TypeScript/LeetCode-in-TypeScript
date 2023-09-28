// tslint:disable:no-magic-numbers
import { twoSum } from 'src/main/ts/g0001_0100/s0001_two_sum/solution'
import { expect, test } from 'vitest'

test('twoSum', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test('twoSum2', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
})

test('twoSum3', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
})

test('twoSum4', () => {
    expect(twoSum([3, 3], 7)).toEqual([-1, -1])
})
