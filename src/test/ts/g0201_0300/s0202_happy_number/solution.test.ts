// tslint:disable:no-magic-numbers
import { isHappy } from 'src/main/ts/g0201_0300/s0202_happy_number/solution'
import { expect, test } from 'vitest'

test('isHappy', () => {
    expect(isHappy(19)).toEqual(true)
})

test('isHappy2', () => {
    expect(isHappy(2)).toEqual(false)
})
