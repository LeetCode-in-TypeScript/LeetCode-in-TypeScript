// tslint:disable:no-magic-numbers
import { uniquePathsWithObstacles } from 'src/main/ts/g0001_0100/s0063_unique_paths_ii/solution'
import { expect, test } from 'vitest'

test('uniquePathsWithObstacles', () => {
    expect(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])).toEqual(2)
})

test('uniquePathsWithObstacles2', () => {
    expect(uniquePathsWithObstacles([[0,1],[0,0]])).toEqual(1)
})
