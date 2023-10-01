// tslint:disable:no-magic-numbers
import { merge } from 'src/main/ts/g0001_0100/s0056_merge_intervals/solution'
import { expect, test } from 'vitest'

test('merge', () => {
    expect(
        merge([
            [1, 3],
            [2, 6],
            [8, 10],
            [15, 18],
        ]),
    ).toEqual([
        [1, 6],
        [8, 10],
        [15, 18],
    ])
})

test('merge2', () => {
    expect(
        merge([
            [1, 4],
            [4, 5],
        ]),
    ).toEqual([[1, 5]])
})
