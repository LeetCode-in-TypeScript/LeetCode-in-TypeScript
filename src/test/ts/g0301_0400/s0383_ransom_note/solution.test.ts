// tslint:disable:no-magic-numbers
import { canConstruct } from 'src/main/ts/g0301_0400/s0383_ransom_note/solution'
import { expect, test } from 'vitest'

test('canConstruct', () => {
    expect(canConstruct('a', 'b')).toEqual(false)
})

test('canConstruct2', () => {
    expect(canConstruct('aa', 'ab')).toEqual(false)
})

test('canConstruct3', () => {
    expect(canConstruct('aa', 'aab')).toEqual(true)
})
