// tslint:disable:no-magic-numbers
import { minSubArrayLen } from 'src/main/ts/g0201_0300/s0209_minimum_size_subarray_sum/solution'
import { expect, test } from 'vitest'

test('minSubArrayLen', () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toEqual(2)
})

test('minSubArrayLen2', () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toEqual(1)
})

test('minSubArrayLen3', () => {
    expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toEqual(0)
})
