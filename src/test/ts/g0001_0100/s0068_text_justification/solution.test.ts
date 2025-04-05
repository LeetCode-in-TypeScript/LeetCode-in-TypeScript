// tslint:disable:no-magic-numbers
import { fullJustify } from 'src/main/ts/g0001_0100/s0068_text_justification/solution'
import { expect, test } from 'vitest'

test('fullJustify', () => {
    expect(fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16)).toEqual([
        'This    is    an',
        'example  of text',
        'justification.  ',
    ])
})

test('fullJustify2', () => {
    expect(fullJustify(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16)).toEqual([
        'What   must   be',
        'acknowledgment  ',
        'shall be        ',
    ])
})

test('fullJustify3', () => {
    expect(
        fullJustify(
            [
                'Science',
                'is',
                'what',
                'we',
                'understand',
                'well',
                'enough',
                'to',
                'explain',
                'to',
                'a',
                'computer.',
                'Art',
                'is',
                'everything',
                'else',
                'we',
                'do',
            ],
            20,
        ),
    ).toEqual([
        'Science  is  what we',
        'understand      well',
        'enough to explain to',
        'a  computer.  Art is',
        'everything  else  we',
        'do                  ',
    ])
})
