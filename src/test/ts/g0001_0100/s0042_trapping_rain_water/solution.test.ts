// tslint:disable:no-magic-numbers
import { trap } from 'src/main/ts/g0001_0100/s0042_trapping_rain_water/solution'
import { expect, test } from 'vitest'

test('trap', () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6)
})

test('trap', () => {
    expect(trap([4, 2, 0, 3, 2, 5])).toEqual(9)
})
