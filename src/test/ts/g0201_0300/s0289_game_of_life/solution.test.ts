// tslint:disable:no-magic-numbers
import { gameOfLife } from 'src/main/ts/g0201_0300/s0289_game_of_life/solution'
import { expect, test } from 'vitest'

test('gameOfLife', () => {
    const board = [
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
    ]
    gameOfLife(board)
    expect(board).toEqual([
        [0, 0, 0],
        [1, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
    ])
})

test('gameOfLife2', () => {
    const board = [
        [1, 1],
        [1, 0],
    ]
    gameOfLife(board)
    expect(board).toEqual([
        [1, 1],
        [1, 1],
    ])
})
