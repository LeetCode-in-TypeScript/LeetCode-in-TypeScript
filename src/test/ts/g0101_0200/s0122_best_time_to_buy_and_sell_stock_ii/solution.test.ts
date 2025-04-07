// tslint:disable:no-magic-numbers
import { maxProfit } from 'src/main/ts/g0101_0200/s0122_best_time_to_buy_and_sell_stock_ii/solution'
import { expect, test } from 'vitest'

test('maxProfit', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(7)
})

test('maxProfit2', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toEqual(4)
})

test('maxProfit3', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0)
})
