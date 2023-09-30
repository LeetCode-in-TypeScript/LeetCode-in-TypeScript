// tslint:disable:no-magic-numbers
import { maxSubArray } from 'src/main/ts/g0001_0100/s0053_maximum_subarray/solution'
import { expect, test } from 'vitest'

test('maxSubArray', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6)
})

test('maxSubArray2', () => {
    expect(maxSubArray([1])).toEqual(1)
})

test('maxSubArray3', () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toEqual(23)
})
