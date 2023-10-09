// tslint:disable:no-magic-numbers
import { rotate } from 'src/main/ts/g0101_0200/s0189_rotate_array/solution'
import { expect, test } from 'vitest'

test('rotate', () => {
    const array1: number[] = [1, 2, 3, 4, 5, 6, 7]
    rotate(array1, 3)
    expect(array1).toEqual([5, 6, 7, 1, 2, 3, 4])
})

test('rotate2', () => {
    const array2: number[] = [-1, -100, 3, 99]
    rotate(array2, 2)
    expect(array2).toEqual([3, 99, -1, -100])
})
