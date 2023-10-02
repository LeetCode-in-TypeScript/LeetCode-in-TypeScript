// tslint:disable:no-magic-numbers
import { sortColors } from 'src/main/ts/g0001_0100/s0075_sort_colors/solution'
import { expect, test } from 'vitest'

test('sortColors', () => {
    const arr = [2, 0, 2, 1, 1, 0]
    sortColors(arr)
    expect(arr).toEqual([0, 0, 1, 1, 2, 2])
})

test('sortColors2', () => {
    const arr = [2, 0, 1]
    sortColors(arr)
    expect(arr).toEqual([0, 1, 2])
})
