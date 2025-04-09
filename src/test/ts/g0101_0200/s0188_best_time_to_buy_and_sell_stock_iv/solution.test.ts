// tslint:disable:no-magic-numbers
import { maxProfit } from 'src/main/ts/g0101_0200/s0188_best_time_to_buy_and_sell_stock_iv/solution'
import { expect, test } from 'vitest'

test('maxProfit', () => {
    expect(maxProfit(2, [2, 4, 1])).toEqual(2)
})

test('maxProfit2', () => {
    expect(maxProfit(2, [3, 2, 6, 5, 0, 3])).toEqual(7)
})
