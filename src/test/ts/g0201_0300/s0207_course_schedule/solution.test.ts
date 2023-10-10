// tslint:disable:no-magic-numbers
import { canFinish } from 'src/main/ts/g0201_0300/s0207_course_schedule/solution'
import { expect, test } from 'vitest'

test('canFinish', () => {
    expect(canFinish(2, [[1, 0]])).toEqual(true)
})

test('canFinish2', () => {
    expect(
        canFinish(2, [
            [1, 0],
            [0, 1],
        ]),
    ).toEqual(false)
})
