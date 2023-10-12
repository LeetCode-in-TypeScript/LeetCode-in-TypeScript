// tslint:disable:no-magic-numbers
import { longestCommonSubsequence } from 'src/main/ts/g1101_1200/s1143_longest_common_subsequence/solution'
import { expect, test } from 'vitest'

test('longestCommonSubsequence', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toEqual(3)
})

test('longestCommonSubsequence2', () => {
    expect(longestCommonSubsequence('abc', 'abc')).toEqual(3)
})

test('longestCommonSubsequence3', () => {
    expect(longestCommonSubsequence('abc', 'def')).toEqual(0)
})
