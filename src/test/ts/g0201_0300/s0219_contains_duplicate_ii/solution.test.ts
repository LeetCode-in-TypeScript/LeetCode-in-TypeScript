// tslint:disable:no-magic-numbers
import { containsNearbyDuplicate } from 'src/main/ts/g0201_0300/s0219_contains_duplicate_ii/solution'
import { expect, test } from 'vitest'

test('containsNearbyDuplicate', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toEqual(true)
})

test('containsNearbyDuplicate2', () => {
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toEqual(true)
})

test('containsNearbyDuplicate3', () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toEqual(false)
})
