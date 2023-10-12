// tslint:disable:no-magic-numbers
import { findTargetSumWays } from 'src/main/ts/g0401_0500/s0494_target_sum/solution'
import { expect, test } from 'vitest'

test('findTargetSumWays', () => {
    expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toEqual(5)
})

test('findTargetSumWays2', () => {
    expect(findTargetSumWays([1], 1)).toEqual(1)
})
