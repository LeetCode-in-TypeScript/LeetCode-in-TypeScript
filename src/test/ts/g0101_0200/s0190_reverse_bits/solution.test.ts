// tslint:disable:no-magic-numbers
import { reverseBits } from 'src/main/ts/g0101_0200/s0190_reverse_bits/solution'
import { expect, test } from 'vitest'

test('reverseBits', () => {
    expect(reverseBits(0b00000010100101000001111010011100)).toEqual(964176192)
})

test('reverseBits2', () => {
    expect(reverseBits(0b11111111111111111111111111111101)).toEqual(3221225471)
})
