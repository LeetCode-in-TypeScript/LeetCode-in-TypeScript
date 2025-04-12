// tslint:disable:no-magic-numbers
import { isAnagram } from 'src/main/ts/g0201_0300/s0242_valid_anagram/solution'
import { expect, test } from 'vitest'

test('isAnagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toEqual(true)
})

test('isAnagram2', () => {
    expect(isAnagram('rat', 'car')).toEqual(false)
})
