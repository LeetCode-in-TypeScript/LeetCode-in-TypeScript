// tslint:disable:no-magic-numbers
import { decodeString } from 'src/main/ts/g0301_0400/s0394_decode_string/solution'
import { expect, test } from 'vitest'

test('decodeString', () => {
    expect(decodeString('3[a]2[bc]')).toEqual('aaabcbc')
})

test('decodeString2', () => {
    expect(decodeString('3[a2[c]]')).toEqual('accaccacc')
})

test('decodeString3', () => {
    expect(decodeString('2[abc]3[cd]ef')).toEqual('abcabccdcdcdef')
})
