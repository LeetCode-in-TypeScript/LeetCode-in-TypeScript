// tslint:disable:no-magic-numbers
import { countBits } from 'src/main/ts/g0301_0400/s0338_counting_bits/solution'
import { expect, test } from 'vitest'

test('countBits', () => {
    expect(countBits(2)).toEqual([0, 1, 1])
})

test('countBits2', () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2])
})
