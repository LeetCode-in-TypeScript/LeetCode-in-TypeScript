// tslint:disable:no-magic-numbers
import { isPalindrome } from 'src/main/ts/g0101_0200/s0125_valid_palindrome/solution'
import { expect, test } from 'vitest'

test('isPalindrome', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true)
})

test('isPalindrome2', () => {
    expect(isPalindrome('race a car')).toEqual(false)
})

test('isPalindrome3', () => {
    expect(isPalindrome(' ')).toEqual(true)
})
