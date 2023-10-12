// tslint:disable:no-magic-numbers
import { dailyTemperatures } from 'src/main/ts/g0701_0800/s0739_daily_temperatures/solution'
import { expect, test } from 'vitest'

test('dailyTemperatures', () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([1, 1, 4, 2, 1, 1, 0, 0])
})

test('dailyTemperatures2', () => {
    expect(dailyTemperatures([30, 40, 50, 60])).toEqual([1, 1, 1, 0])
})

test('dailyTemperatures3', () => {
    expect(dailyTemperatures([30, 60, 900])).toEqual([1, 1, 0])
})
