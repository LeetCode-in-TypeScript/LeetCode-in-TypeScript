// #Medium #Bit_Manipulation #Algorithm_II_Day_19_Bit_Manipulation
// #Top_Interview_150_Bit_Manipulation #2025_04_10_Time_2_ms_(99.12%)_Space_64.48_MB_(7.02%)

function rangeBitwiseAnd(left: number, right: number): number {
    const MASKS: number[] = [
        0x00000000, 0x80000000, 0xc0000000, 0xe0000000, 0xf0000000, 0xf8000000, 0xfc000000, 0xfe000000, 0xff000000,
        0xff800000, 0xffc00000, 0xffe00000, 0xfff00000, 0xfff80000, 0xfffc0000, 0xfffe0000, 0xffff0000, 0xffff8000,
        0xffffc000, 0xffffe000, 0xfffff000, 0xfffff800, 0xfffffc00, 0xfffffe00, 0xffffff00, 0xffffff80, 0xffffffc0,
        0xffffffe0, 0xfffffff0, 0xfffffff8, 0xfffffffc, 0xfffffffe,
    ]
    if (left === right) {
        return left
    }
    const leadingZeros = Math.clz32(left ^ right)
    return right & MASKS[leadingZeros]
}

export { rangeBitwiseAnd }
