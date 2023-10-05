// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Hash_Table #Union_Find
// #Big_O_Time_O(N_log_N)_Space_O(1) #2023_10_05_Time_92_ms_(93.69%)_Space_64_MB_(30.13%)

function longestConsecutive(nums: number[]): number {
    const set = new Set(nums)
    let max = 0
    for (const num of nums) {
        if (set.has(num + 1)) continue
        let counter = 1,
            current = num
        while (set.has(--current)) counter++
        max = Math.max(counter, max)
    }
    return max
}

export { longestConsecutive }
