// tslint:disable:no-magic-numbers
import { trailingZeroes } from 'src/main/ts/g0101_0200/s0172_factorial_trailing_zeroes/solution'
import { expect, test } from 'vitest'

test('trailingZeroes', () => {
    expect(trailingZeroes(3)).toEqual(0)
})

test('trailingZeroes2', () => {
    expect(trailingZeroes(5)).toEqual(1)
})

test('trailingZeroe3', () => {
    expect(trailingZeroes(0)).toEqual(0)
})
