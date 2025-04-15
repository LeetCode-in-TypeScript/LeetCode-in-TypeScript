// tslint:disable:no-magic-numbers
import { findMinArrowShots } from 'src/main/ts/g0401_0500/s0452_minimum_number_of_arrows_to_burst_balloons/solution'
import { expect, test } from 'vitest'

test('findMinArrowShots', () => {
    expect(
        findMinArrowShots([
            [10, 16],
            [2, 8],
            [1, 6],
            [7, 12],
        ]),
    ).toEqual(2)
})

test('findMinArrowShots2', () => {
    expect(
        findMinArrowShots([
            [1, 2],
            [3, 4],
            [5, 6],
            [7, 8],
        ]),
    ).toEqual(4)
})

test('findMinArrowShots3', () => {
    expect(
        findMinArrowShots([
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
        ]),
    ).toEqual(2)
})
