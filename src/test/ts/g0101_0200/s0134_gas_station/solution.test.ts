// tslint:disable:no-magic-numbers
import { canCompleteCircuit } from 'src/main/ts/g0101_0200/s0134_gas_station/solution'
import { expect, test } from 'vitest'

test('canCompleteCircuit', () => {
    expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).toEqual(3)
})

test('canCompleteCircuit2', () => {
    expect(canCompleteCircuit([2, 3, 4], [3, 4, 3])).toEqual(-1)
})
