// tslint:disable:no-magic-numbers
import { myAtoi } from 'src/main/ts/g0001_0100/s0008_string_to_integer_atoi/solution'
import { expect, test } from 'vitest'

test('myAtoi', () => {
    expect(myAtoi('42')).toEqual(42)
})

test('myAtoi2', () => {
    expect(myAtoi('   -42')).toEqual(-42)
})

test('myAtoi3', () => {
    expect(myAtoi('4193 with words')).toEqual(4193)
})

test('myAtoi4', () => {
    expect(myAtoi('words and 987')).toEqual(0)
})

test('myAtoi5', () => {
    expect(myAtoi('-91283472332')).toEqual(-2147483648)
})
