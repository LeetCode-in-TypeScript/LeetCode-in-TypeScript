// tslint:disable:no-magic-numbers
import { searchRange } from 'src/main/ts/g0001_0100/s0034_find_first_and_last_position_of_element_in_sorted_array/solution'
import { expect, test } from 'vitest'

test('searchRange', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toEqual([3, 4])
})

test('searchRange2', () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toEqual([-1, -1])
})

test('searchRange3', () => {
    expect(searchRange([], 0)).toEqual([-1, -1])
})
