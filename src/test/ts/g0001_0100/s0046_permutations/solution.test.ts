// tslint:disable:no-magic-numbers
import { permute } from 'src/main/ts/g0001_0100/s0046_permutations/solution'
import { expect, test } from 'vitest'

test('permute', () => {
    expect(permute([1, 2, 3])).toEqual([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 2, 1],
        [3, 1, 2],
    ])
})

test('permute2', () => {
    expect(permute([0, 1])).toEqual([
        [0, 1],
        [1, 0],
    ])
})

test('permute3', () => {
    expect(permute([1])).toEqual([[1]])
})
