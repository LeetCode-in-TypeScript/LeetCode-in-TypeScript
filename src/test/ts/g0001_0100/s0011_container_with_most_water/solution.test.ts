// tslint:disable:no-magic-numbers
import { maxArea } from 'src/main/ts/g0001_0100/s0011_container_with_most_water/solution'
import { expect, test } from 'vitest'

test('maxArea', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49)
})

test('maxArea2', () => {
    expect(maxArea([1, 1])).toEqual(1)
})
