// tslint:disable:no-magic-numbers
import { removeDuplicates } from 'src/main/ts/g0001_0100/s0080_remove_duplicates_from_sorted_array_ii/solution'
import { expect, test } from 'vitest'

test('removeDuplicates', () => {
    expect(removeDuplicates([1,1,1,2,2,3])).toEqual(5)
})

test('removeDuplicates2', () => {
    expect(removeDuplicates([0,0,1,1,1,1,2,3,3])).toEqual(7)
})
