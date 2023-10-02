// tslint:disable:no-magic-numbers
import { setZeroes } from 'src/main/ts/g0001_0100/s0073_set_matrix_zeroes/solution'
import { expect, test } from 'vitest'

test('setZeroes', () => {
    const matrix = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ]
    setZeroes(matrix)
    expect(matrix).toEqual([
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1],
    ])
})

test('setZeroes2', () => {
    const matrix = [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
    ]
    setZeroes(matrix)
    expect(matrix).toEqual([
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0],
    ])
})
