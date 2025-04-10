// tslint:disable:no-magic-numbers
import { rangeBitwiseAnd } from 'src/main/ts/g0201_0300/s0201_bitwise_and_of_numbers_range/solution'
import { expect, test } from 'vitest'

test('rangeBitwiseAnd', () => {
    expect(rangeBitwiseAnd(5, 7)).toEqual(4)
})

test('rangeBitwiseAnd2', () => {
    expect(rangeBitwiseAnd(0, 0)).toEqual(0)
})

test('rangeBitwiseAnd3', () => {
    expect(rangeBitwiseAnd(1, 2147483647)).toEqual(0)
})
