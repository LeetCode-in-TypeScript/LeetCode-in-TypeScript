// tslint:disable:no-magic-numbers
import { search } from 'src/main/ts/g0001_0100/s0033_search_in_rotated_sorted_array/solution'
import { expect, test } from 'vitest'

test('search', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4)
})

test('search2', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1)
})

test('search3', () => {
    expect(search([1], 0)).toEqual(-1)
})

test('search4', () => {
    expect(search([5, 1, 3], 0)).toEqual(-1)
})

test('search5', () => {
    expect(search([5, 1, 3], 2)).toEqual(-1)
})
