// tslint:disable:no-magic-numbers
import { hammingWeight } from 'src/main/ts/g0101_0200/s0191_number_of_1_bits/solution'
import { expect, test } from 'vitest'

test('hammingWeight', () => {
    expect(hammingWeight(11)).toEqual(3)
})

test('hammingWeight2', () => {
    expect(hammingWeight(128)).toEqual(1)
})

test('hammingWeight3', () => {
    expect(hammingWeight(2147483645)).toEqual(30)
})
