// #Hard #Array #Greedy #Top_Interview_150_Array/String
// #2025_04_07_Time_2_ms_(96.15%)_Space_61.00_MB_(33.47%)

function candy(ratings: number[]): number {
    const n = ratings.length
    const candies: number[] = new Array(n).fill(1)
    for (let i = 0; i < n - 1; i++) {
        if (ratings[i + 1] > ratings[i]) {
            candies[i + 1] = candies[i] + 1
        }
    }
    for (let i = n - 1; i > 0; i--) {
        if (ratings[i - 1] > ratings[i] && candies[i - 1] < candies[i] + 1) {
            candies[i - 1] = candies[i] + 1
        }
    }
    return candies.reduce((sum, c) => sum + c, 0)
}

export { candy }
