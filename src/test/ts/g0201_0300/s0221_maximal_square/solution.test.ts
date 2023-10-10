// tslint:disable:no-magic-numbers
import { maximalSquare } from 'src/main/ts/g0201_0300/s0221_maximal_square/solution'
import { expect, test } from 'vitest'

test('maximalSquare', () => {
    const matrix = [
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0'],
    ]
    expect(maximalSquare(matrix)).toEqual(4)
})

test('maximalSquare2', () => {
    const matrix = [
        ['0', '1'],
        ['1', '0'],
    ]
    expect(maximalSquare(matrix)).toEqual(1)
})

test('maximalSquare3', () => {
    const matrix = [['0']]
    expect(maximalSquare(matrix)).toEqual(0)
})
