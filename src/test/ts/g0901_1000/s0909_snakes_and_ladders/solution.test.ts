// tslint:disable:no-magic-numbers
import { snakesAndLadders } from 'src/main/ts/g0901_1000/s0909_snakes_and_ladders/solution'
import { expect, test } from 'vitest'

test('snakesAndLadders', () => {
    expect(
        snakesAndLadders([
            [-1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, 35, -1, -1, 13, -1],
            [-1, -1, -1, -1, -1, -1],
            [-1, 15, -1, -1, -1, -1],
        ]),
    ).toEqual(4)
})

test('snakesAndLadders2', () => {
    expect(
        snakesAndLadders([
            [-1, -1],
            [-1, 3],
        ]),
    ).toEqual(1)
})
