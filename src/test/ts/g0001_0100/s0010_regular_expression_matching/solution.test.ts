// tslint:disable:no-magic-numbers
import { isMatch } from 'src/main/ts/g0001_0100/s0010_regular_expression_matching/solution'
import { expect, test } from 'vitest'

test('isMatch', () => {
    expect(isMatch('aa', 'a')).toEqual(false)
})

test('isMatch2', () => {
    expect(isMatch('aa', 'a*')).toEqual(true)
})

test('isMatch3', () => {
    expect(isMatch('ab', '.*')).toEqual(true)
})

test('isMatch4', () => {
    expect(isMatch('aab', 'c*a*b')).toEqual(true)
})

test('isMatch5', () => {
    expect(isMatch('mississippi', 'mis*is*p*.')).toEqual(false)
})
