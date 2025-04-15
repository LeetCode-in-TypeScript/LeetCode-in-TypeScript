// tslint:disable:no-magic-numbers
import { findMaximizedCapital } from 'src/main/ts/g0501_0600/s0502_ipo/solution'
import { expect, test } from 'vitest'

test('findMaximizedCapital', () => {
    expect(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1])).toEqual(4)
})

test('findMaximizedCapital2', () => {
    expect(findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2])).toEqual(6)
})
