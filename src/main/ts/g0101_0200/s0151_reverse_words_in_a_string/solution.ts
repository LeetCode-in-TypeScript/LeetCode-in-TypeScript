// #Medium #String #Two_Pointers #LeetCode_75_Array/String #Udemy_Strings
// #Top_Interview_150_Array/String #2025_04_08_Time_0_ms_(100.00%)_Space_57.70_MB_(48.75%)

function reverseWords(s: string): string {
    return s
        ?.trim()
        ?.replaceAll(/\s{2,}/g, ' ')
        ?.split(' ')
        ?.reverse()
        .join(' ')
}

export { reverseWords }
