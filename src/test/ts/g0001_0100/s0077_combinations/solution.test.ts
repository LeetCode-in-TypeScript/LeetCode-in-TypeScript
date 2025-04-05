// tslint:disable:no-magic-numbers
import { combine } from 'src/main/ts/g0001_0100/s0077_combinations/solution'
import { expect, test } from 'vitest'

test('combine', () => {
    expect(combine(4, 2)).toEqual([
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4],
    ])
})

test('combine2', () => {
    expect(combine(1, 1)).toEqual([[1]])
})
