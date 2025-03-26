// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Stack #Design
// #Data_Structure_II_Day_14_Stack_Queue #Programming_Skills_II_Day_18 #Level_2_Day_16_Design
// #Udemy_Design #Top_Interview_150_Stack #Big_O_Time_O(1)_Space_O(N)
// #2025_03_26_Time_5_ms_(99.10%)_Space_65.70_MB_(50.04%)

class MinStack {
    stack: number[]
    minStack: number[]

    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(val: number): void {
        this.stack.push(val)
        if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= val) {
            this.minStack.push(val)
        }
    }

    pop(): void {
        const popValue = this.stack.pop()
        if (popValue === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop()
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}

/*
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export { MinStack }
