// tslint:disable:no-magic-numbers
import { MinStack } from 'src/main/ts/g0101_0200/s0155_min_stack/solution'
import { expect, test } from 'vitest'

test('minStack', () => {
    const minStack = new MinStack()
    minStack.push(-2)
    minStack.push(0) //NOSONAR
    minStack.push(-3) //NOSONAR
    expect(minStack.getMin()).toEqual(-3)
    minStack.pop()
    expect(minStack.top()).toEqual(0)
    expect(minStack.getMin()).toEqual(-2)
})
