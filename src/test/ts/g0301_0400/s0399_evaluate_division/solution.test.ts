// tslint:disable:no-magic-numbers
import { calcEquation } from 'src/main/ts/g0301_0400/s0399_evaluate_division/solution'
import { expect, test } from 'vitest'

test('calcEquation', () => {
    const equations = [
        ["a", "b"],
        ["b", "c"]
    ] as [string, string][]
    const values = [2.0, 3.0]
    const queries = [
        ["a", "c"],
        ["b", "a"],
        ["a", "e"],
        ["a", "a"],
        ["x", "x"]
    ] as [string, string][]
    const expected = [6.0, 0.5, -1.0, 1.0, -1.0]
    expect(calcEquation(equations, values, queries)).toEqual(expected)
})

test('calcEquation2', () => {
    const equations = [
        ["a", "b"],
        ["b", "c"],
        ["bc", "cd"]
    ] as [string, string][]
    const values = [1.5, 2.5, 5.0]
    const queries = [
        ["a", "c"],
        ["c", "b"],
        ["bc", "cd"],
        ["cd", "bc"]
    ] as [string, string][]
    const expected = [3.75, 0.4, 5.0, 0.2]
    expect(calcEquation(equations, values, queries)).toEqual(expected)
})

test('calcEquation3', () => {
    const equations = [["a", "b"]] as [string, string][]
    const values = [0.5]
    const queries = [
        ["a", "b"],
        ["b", "a"],
        ["a", "c"],
        ["x", "y"]
    ] as [string, string][]
    const expected = [0.5, 2.0, -1.0, -1.0]
    expect(calcEquation(equations, values, queries)).toEqual(expected)
})
