// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Hash_Table #Union_Find
// #Top_Interview_150_Hashmap #Big_O_Time_O(N_log_N)_Space_O(1)
// #2025_03_26_Time_34_ms_(90.07%)_Space_82.70_MB_(18.54%)

function longestConsecutive(nums: number[]): number {
    let sset = new Set(nums)
    let maxLen = 0
    for (let num of sset) {
        // check its start of the sequence
        if (!sset.has(num-1)) {
            let len = 0;
            while (sset.has(num+len)) {
                len += 1
            }
            maxLen = Math.max(maxLen, len)
        }
    }
    return maxLen
}

export { longestConsecutive }
