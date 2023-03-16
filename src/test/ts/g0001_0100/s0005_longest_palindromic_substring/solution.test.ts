// tslint:disable:no-magic-numbers
import { longestPalindrome } from 'src/main/ts/g0001_0100/s0005_longest_palindromic_substring/solution'
import { expect, test } from 'vitest'

test('longestPalindrome', () => {
    expect(longestPalindrome('babad')).toEqual('bab')
})

test('longestPalindrome2', () => {
    expect(longestPalindrome('cbbd')).toEqual('bb')
})
