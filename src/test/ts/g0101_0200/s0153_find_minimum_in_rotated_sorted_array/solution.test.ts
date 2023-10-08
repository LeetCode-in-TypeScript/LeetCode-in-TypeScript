// tslint:disable:no-magic-numbers
import { findMin } from 'src/main/ts/g0101_0200/s0153_find_minimum_in_rotated_sorted_array/solution'
import { expect, test } from 'vitest'

test('findMin', () => {
    expect(findMin([3, 4, 5, 1, 2])).toEqual(1)
})

test('findMin2', () => {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toEqual(0)
})

test('findMin3', () => {
    expect(findMin([11, 13, 15, 17])).toEqual(11)
})
