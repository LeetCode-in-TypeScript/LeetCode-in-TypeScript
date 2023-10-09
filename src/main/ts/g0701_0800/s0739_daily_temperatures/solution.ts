// #Medium #Top_100_Liked_Questions #Array #Stack #Monotonic_Stack #Programming_Skills_II_Day_6
// #Big_O_Time_O(n)_Space_O(n) #2023_09_30_Time_194_ms_(97.36%)_Space_66.2_MB_(69.52%)

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
