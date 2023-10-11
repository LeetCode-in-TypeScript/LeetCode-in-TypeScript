// tslint:disable:no-magic-numbers
import { lengthOfLIS } from 'src/main/ts/g0201_0300/s0300_longest_increasing_subsequence/solution'
import { expect, test } from 'vitest'

test('lengthOfLIS', () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toEqual(4)
})

test('lengthOfLIS2', () => {
    expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toEqual(4)
})

test('lengthOfLIS3', () => {
    expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).toEqual(1)
})
