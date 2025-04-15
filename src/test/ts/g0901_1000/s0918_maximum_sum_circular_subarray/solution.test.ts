// tslint:disable:no-magic-numbers
import { maxSubarraySumCircular } from 'src/main/ts/g0901_1000/s0918_maximum_sum_circular_subarray/solution'
import { expect, test } from 'vitest'

test('maxSubarraySumCircular', () => {
    expect(maxSubarraySumCircular([1, -2, 3, -2])).toEqual(3)
})

test('maxSubarraySumCircular2', () => {
    expect(maxSubarraySumCircular([5, -3, 5])).toEqual(10)
})

test('maxSubarraySumCircular2', () => {
    expect(maxSubarraySumCircular([-3, -2, -3])).toEqual(-2)
})
