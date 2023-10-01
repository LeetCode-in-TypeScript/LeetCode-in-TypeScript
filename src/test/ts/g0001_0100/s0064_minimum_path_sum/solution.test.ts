// tslint:disable:no-magic-numbers
import { minPathSum } from 'src/main/ts/g0001_0100/s0064_minimum_path_sum/solution'
import { expect, test } from 'vitest'

test('minPathSum', () => {
    expect(
        minPathSum([
            [1, 3, 1],
            [1, 5, 1],
            [4, 2, 1],
        ]),
    ).toEqual(7)
})

test('minPathSum2', () => {
    expect(
        minPathSum([
            [1, 2, 3],
            [4, 5, 6],
        ]),
    ).toEqual(12)
})
