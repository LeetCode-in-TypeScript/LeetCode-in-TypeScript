// tslint:disable:no-magic-numbers
import { moveZeroes } from 'src/main/ts/g0201_0300/s0283_move_zeroes/solution'
import { expect, test } from 'vitest'

test('moveZeroes', () => {
    const arr = [0, 1, 0, 3, 12]
    moveZeroes(arr)
    expect(arr).toEqual([1, 3, 12, 0, 0])
})

test('moveZeroes', () => {
    const arr = [0]
    moveZeroes(arr)
    expect(arr).toEqual([0])
})
