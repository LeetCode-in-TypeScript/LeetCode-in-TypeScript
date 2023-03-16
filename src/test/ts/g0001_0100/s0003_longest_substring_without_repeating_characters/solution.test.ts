// tslint:disable:no-magic-numbers
import { lengthOfLongestSubstring } from 'src/main/ts/g0001_0100/s0003_longest_substring_without_repeating_characters/solution'
import { expect, test } from 'vitest'

test('lengthOfLongestSubstring', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
})

test('lengthOfLongestSubstring2', () => {
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
})

test('lengthOfLongestSubstring3', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
})
