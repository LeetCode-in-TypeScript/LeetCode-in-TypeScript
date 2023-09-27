// tslint:disable:no-magic-numbers
import { searchInsert } from 'src/main/ts/g0001_0100/s0035_search_insert_position/solution'
import { expect, test } from 'vitest'

test('searchInsert', () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2)
})

test('searchInsert2', () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1)
})

test('searchInsert3', () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4)
})
