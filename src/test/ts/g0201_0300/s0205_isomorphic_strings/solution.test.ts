// tslint:disable:no-magic-numbers
import { isIsomorphic } from 'src/main/ts/g0201_0300/s0205_isomorphic_strings/solution'
import { expect, test } from 'vitest'

test('isIsomorphic', () => {
    expect(isIsomorphic('egg', 'add')).toEqual(true)
})

test('isIsomorphic2', () => {
    expect(isIsomorphic('foo', 'bar')).toEqual(false)
})

test('isIsomorphic3', () => {
    expect(isIsomorphic('paper', 'title')).toEqual(true)
})
