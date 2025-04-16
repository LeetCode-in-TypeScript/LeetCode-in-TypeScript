// #Medium #Top_100_Liked_Questions #Array #Stack #Monotonic_Stack #LeetCode_75_Monotonic_Stack
// #Programming_Skills_II_Day_6 #Big_O_Time_O(n)_Space_O(n)
// #2025_03_28_Time_18_ms_(80.57%)_Space_78.12_MB_(62.08%)

function dailyTemperatures(temperatures: number[]): number[] {
    let stack: number[] = []
    let result: number[] = new Array(temperatures.length).fill(0)
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let index: number | undefined = stack.pop()
            result[index!] = i - index!
        }
        stack.push(i)
    }
    return result
}

export { dailyTemperatures }
