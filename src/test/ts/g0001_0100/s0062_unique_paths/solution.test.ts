// tslint:disable:no-magic-numbers
import { uniquePaths } from 'src/main/ts/g0001_0100/s0062_unique_paths/solution'
import { expect, test } from 'vitest'

test('uniquePaths', () => {
    expect(uniquePaths(3, 7)).toEqual(28)
})

test('uniquePaths2', () => {
    expect(uniquePaths(3, 2)).toEqual(3)
})
