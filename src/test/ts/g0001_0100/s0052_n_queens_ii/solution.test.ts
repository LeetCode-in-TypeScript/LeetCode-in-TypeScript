// tslint:disable:no-magic-numbers
import { totalNQueens } from 'src/main/ts/g0001_0100/s0052_n_queens_ii/solution'
import { expect, test } from 'vitest'

test('totalNQueens', () => {
    expect(totalNQueens(4)).toEqual(2)
})

test('totalNQueens2', () => {
    expect(totalNQueens(1)).toEqual(1)
})
