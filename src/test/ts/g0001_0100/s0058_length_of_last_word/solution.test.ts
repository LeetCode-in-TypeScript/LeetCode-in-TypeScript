// tslint:disable:no-magic-numbers
import { lengthOfLastWord } from 'src/main/ts/g0001_0100/s0058_length_of_last_word/solution'
import { expect, test } from 'vitest'

test('lengthOfLastWord', () => {
    expect(lengthOfLastWord('Hello World')).toEqual(5)
})

test('lengthOfLastWord2', () => {
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toEqual(4)
})

test('lengthOfLastWord3', () => {
    expect(lengthOfLastWord('luffy is still joyboy')).toEqual(6)
})
