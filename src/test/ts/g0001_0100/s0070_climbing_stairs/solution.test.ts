// tslint:disable:no-magic-numbers
import { climbStairs } from 'src/main/ts/g0001_0100/s0070_climbing_stairs/solution'
import { expect, test } from 'vitest'

test('climbStairs', () => {
    expect(climbStairs(2)).toEqual(2)
})

test('climbStairs2', () => {
    expect(climbStairs(3)).toEqual(3)
})
