// tslint:disable:no-magic-numbers
import { coinChange } from 'src/main/ts/g0301_0400/s0322_coin_change/solution'
import { expect, test } from 'vitest'

test('coinChange', () => {
    expect(coinChange([1, 2, 5], 11)).toEqual(3)
})

test('coinChange2', () => {
    expect(coinChange([2], 3)).toEqual(-1)
})

test('coinChange3', () => {
    expect(coinChange([1], 0)).toEqual(0)
})
