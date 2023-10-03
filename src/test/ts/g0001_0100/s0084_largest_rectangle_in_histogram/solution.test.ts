// tslint:disable:no-magic-numbers
import { largestRectangleArea } from 'src/main/ts/g0001_0100/s0084_largest_rectangle_in_histogram/solution'
import { expect, test } from 'vitest'

test('largestRectangleArea', () => {
    expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toEqual(10)
})

test('largestRectangleArea2', () => {
    expect(largestRectangleArea([2, 4])).toEqual(4)
})
