// tslint:disable:no-magic-numbers
import { generateParenthesis } from 'src/main/ts/g0001_0100/s0022_generate_parentheses/solution'
import { expect, test } from 'vitest'

test('generateParenthesis', () => {
    expect(generateParenthesis(3)).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()'])
})

test('generateParenthesis2', () => {
    expect(generateParenthesis(1)).toEqual(['()'])
})
