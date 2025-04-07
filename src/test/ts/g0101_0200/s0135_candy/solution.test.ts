// tslint:disable:no-magic-numbers
import { candy } from 'src/main/ts/g0101_0200/s0135_candy/solution'
import { expect, test } from 'vitest'

test('candy', () => {
    expect(candy([1, 0, 2])).toEqual(5)
})

test('candy2', () => {
    expect(candy([1, 2, 2])).toEqual(4)
})
