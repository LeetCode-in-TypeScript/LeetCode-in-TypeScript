// tslint:disable:no-magic-numbers
import { longestValidParentheses } from 'src/main/ts/g0001_0100/s0032_longest_valid_parentheses/solution'
import { expect, test } from 'vitest'

test('longestValidParentheses', () => {
    expect(longestValidParentheses('(()')).toEqual(2)
})

test('longestValidParentheses2', () => {
    expect(longestValidParentheses(')()())')).toEqual(4)
})

test('longestValidParentheses3', () => {
    expect(longestValidParentheses('')).toEqual(0)
})
