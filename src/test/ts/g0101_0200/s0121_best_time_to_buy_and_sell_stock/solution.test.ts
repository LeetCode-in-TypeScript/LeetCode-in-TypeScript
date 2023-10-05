// tslint:disable:no-magic-numbers
import { maxProfit } from 'src/main/ts/g0101_0200/s0121_best_time_to_buy_and_sell_stock/solution'
import { expect, test } from 'vitest'

test('maxProfit', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5)
})

test('maxProfit2', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0)
})
