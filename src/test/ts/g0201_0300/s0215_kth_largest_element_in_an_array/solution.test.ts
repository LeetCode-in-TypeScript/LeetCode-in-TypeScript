// tslint:disable:no-magic-numbers
import { findKthLargest } from 'src/main/ts/g0201_0300/s0215_kth_largest_element_in_an_array/solution'
import { expect, test } from 'vitest'

test('findKthLargest', () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5)
})

test('findKthLargest2', () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4)
})
