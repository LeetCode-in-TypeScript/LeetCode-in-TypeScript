// tslint:disable:no-magic-numbers
import { isPalindrome } from 'src/main/ts/g0001_0100/s0009_palindrome_number/solution'
import { expect, test } from 'vitest'

test('isPalindrome', () => {
    expect(isPalindrome(121)).toEqual(true)
})

test('isPalindrome2', () => {
    expect(isPalindrome(-121)).toEqual(false)
})

test('isPalindrome3', () => {
    expect(isPalindrome(10)).toEqual(false)
})
