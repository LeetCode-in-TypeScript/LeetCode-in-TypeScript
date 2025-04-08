// tslint:disable:no-magic-numbers
import { reverseWords } from 'src/main/ts/g0101_0200/s0151_reverse_words_in_a_string/solution'
import { expect, test } from 'vitest'

test('reverseWords', () => {
    expect(reverseWords('the sky is blue')).toEqual('blue is sky the')
})

test('reverseWords2', () => {
    expect(reverseWords('  hello world  ')).toEqual('world hello')
})

test('reverseWords3', () => {
    expect(reverseWords('a good   example')).toEqual('example good a')
})
