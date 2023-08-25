// tslint:disable:no-magic-numbers
import { reverse } from 'src/main/ts/g0001_0100/s0007_reverse_integer/solution'
import { expect, test } from 'vitest'

test('reverse', () => {
    expect(reverse(123)).toEqual(321)
})

test('reverse2', () => {
    expect(reverse(-123)).toEqual(-321)
})

test('reverse3', () => {
    expect(reverse(120)).toEqual(21)
})
