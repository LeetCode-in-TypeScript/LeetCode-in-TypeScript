// tslint:disable:no-magic-numbers
import { findDuplicate } from 'src/main/ts/g0201_0300/s0287_find_the_duplicate_number/solution'
import { expect, test } from 'vitest'

test('findDuplicate', () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toEqual(2)
})

test('findDuplicate2', () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toEqual(3)
})
