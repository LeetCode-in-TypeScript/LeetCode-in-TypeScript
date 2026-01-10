// tslint:disable:no-magic-numbers
import { findMedianSortedArrays } from 'src/main/ts/g0001_0100/s0004_median_of_two_sorted_arrays/solution'
import { expect, test } from 'vitest'

test('findMedianSortedArrays', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toEqual(2)
})

test('findMedianSortedArrays2', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toEqual(2.5)
})
