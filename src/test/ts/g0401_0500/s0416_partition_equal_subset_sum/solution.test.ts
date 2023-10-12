// tslint:disable:no-magic-numbers
import { canPartition } from 'src/main/ts/g0401_0500/s0416_partition_equal_subset_sum/solution'
import { expect, test } from 'vitest'

test('canPartition', () => {
    expect(canPartition([1, 5, 11, 5])).toEqual(true)
})

test('canPartition2', () => {
    expect(canPartition([1, 2, 3, 5])).toEqual(false)
})
