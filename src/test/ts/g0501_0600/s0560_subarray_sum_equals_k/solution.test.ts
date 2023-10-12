// tslint:disable:no-magic-numbers
import { subarraySum } from 'src/main/ts/g0501_0600/s0560_subarray_sum_equals_k/solution'
import { expect, test } from 'vitest'

test('subarraySum', () => {
    expect(subarraySum([1, 1, 1], 2)).toEqual(2)
})

test('subarraySum2', () => {
    expect(subarraySum([1, 2, 3], 3)).toEqual(2)
})
