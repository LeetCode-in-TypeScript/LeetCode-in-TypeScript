// tslint:disable:no-magic-numbers
import { solveNQueens } from 'src/main/ts/g0001_0100/s0051_n_queens/solution'
import { expect, test } from 'vitest'

test('solveNQueens', () => {
    expect(solveNQueens(4)).toEqual([
        ['.Q..', '...Q', 'Q...', '..Q.'],
        ['..Q.', 'Q...', '...Q', '.Q..'],
    ])
})

test('solveNQueens2', () => {
    expect(solveNQueens(1)).toEqual([['Q']])
})
