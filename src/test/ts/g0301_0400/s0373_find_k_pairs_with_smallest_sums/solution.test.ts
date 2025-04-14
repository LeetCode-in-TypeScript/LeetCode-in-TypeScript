// tslint:disable:no-magic-numbers
import { kSmallestPairs } from 'src/main/ts/g0301_0400/s0373_find_k_pairs_with_smallest_sums/solution'
import { expect, test } from 'vitest'

test('kSmallestPairs', () => {
    expect(kSmallestPairs([1, 7, 11], [2, 4, 6], 3)).toEqual([
        [1, 2],
        [1, 4],
        [1, 6],
    ])
})

test('kSmallestPairs2', () => {
    expect(kSmallestPairs([1, 1, 2], [1, 2, 3], 2)).toEqual([
        [1, 1],
        [1, 1],
    ])
})
