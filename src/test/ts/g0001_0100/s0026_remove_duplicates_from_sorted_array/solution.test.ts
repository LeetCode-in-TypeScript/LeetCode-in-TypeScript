// tslint:disable:no-magic-numbers
import { removeDuplicates } from 'src/main/ts/g0001_0100/s0026_remove_duplicates_from_sorted_array/solution'
import { expect, test } from 'vitest'

test('removeDuplicates', () => {
    expect(removeDuplicates([1,1,2])).toEqual(2)
})

test('removeDuplicates2', () => {
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual(5)
})
