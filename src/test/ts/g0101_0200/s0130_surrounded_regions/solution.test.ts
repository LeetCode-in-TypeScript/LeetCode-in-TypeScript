// tslint:disable:no-magic-numbers
import { solve } from 'src/main/ts/g0101_0200/s0130_surrounded_regions/solution'
import { expect, test } from 'vitest'

test('solve', () => {
    const board: string[][] = [
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'O', 'X'],
        ['X', 'X', 'O', 'X'],
        ['X', 'O', 'X', 'X'],
    ]
    solve(board)
    expect(board).toEqual([
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
    ])
})

test('solve', () => {
    const board: string[][] = [['X']]
    solve(board)
    expect(board).toEqual([['X']])
})
