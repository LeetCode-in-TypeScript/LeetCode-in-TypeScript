// tslint:disable:no-magic-numbers
import { removeElement } from 'src/main/ts/g0001_0100/s0027_remove_element/solution'
import { expect, test } from 'vitest'

test('removeElement', () => {
    expect(removeElement([3,2,2,3], 3)).toEqual(2)
})

test('removeElement2', () => {
    expect(removeElement([0,1,2,2,3,0,4,2], 2)).toEqual(5)
})
