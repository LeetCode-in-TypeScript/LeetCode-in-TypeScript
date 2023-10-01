// tslint:disable:no-magic-numbers
import { minDistance } from 'src/main/ts/g0001_0100/s0072_edit_distance/solution'
import { expect, test } from 'vitest'

test('minDistance', () => {
    expect(minDistance('horse', 'ros')).toEqual(3)
})

test('minDistance2', () => {
    expect(minDistance('intention', 'execution')).toEqual(5)
})
