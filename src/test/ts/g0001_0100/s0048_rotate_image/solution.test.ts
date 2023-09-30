// tslint:disable:no-magic-numbers
import { rotate } from 'src/main/ts/g0001_0100/s0048_rotate_image/solution'
import { expect, test } from 'vitest'

test('rotate', () => {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
    rotate(matrix)
    expect(matrix).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
    ])
})

test('rotate2', () => {
    const matrix = [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
    ]
    rotate(matrix)
    expect(matrix).toEqual([
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11],
    ])
})
