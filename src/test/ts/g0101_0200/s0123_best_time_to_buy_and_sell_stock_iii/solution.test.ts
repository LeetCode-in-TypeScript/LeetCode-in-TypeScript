// tslint:disable:no-magic-numbers
import { maxProfit } from 'src/main/ts/g0101_0200/s0123_best_time_to_buy_and_sell_stock_iii/solution'
import { expect, test } from 'vitest'

test('maxProfit', () => {
    expect(maxProfit([3,3,5,0,0,3,1,4])).toEqual(6)
})

test('maxProfit2', () => {
    expect(maxProfit([1,2,3,4,5])).toEqual(4)
})

test('maxProfit6', () => {
    expect(maxProfit([7,6,4,3,1])).toEqual(0)
})
