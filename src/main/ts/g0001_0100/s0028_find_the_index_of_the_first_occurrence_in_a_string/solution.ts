// #Easy #Top_Interview_Questions #String #Two_Pointers #String_Matching
// #Programming_Skills_II_Day_1 #Top_Interview_150_Array/String
// #2025_03_31_Time_0_ms_(100.00%)_Space_55.44_MB_(48.55%)

function strStr(haystack: string, needle: string): number {
    if (needle.length === 0) {
        return 0;
    }
    let m = haystack.length;
    let n = needle.length;
    for (let start = 0; start <= m - n; start++) {
        if (haystack.substring(start, start + n) === needle) {
            return start;
        }
    }
    return -1;
}

export { strStr }
