// tslint:disable:no-magic-numbers
import { longestConsecutive } from 'src/main/ts/g0101_0200/s0128_longest_consecutive_sequence/solution'
import { expect, test } from 'vitest'

test('longestConsecutive', () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toEqual(4)
})

test('longestConsecutive2', () => {
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toEqual(9)
})
