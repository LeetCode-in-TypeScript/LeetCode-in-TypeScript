// #Medium #Top_Interview_Questions #Math #Recursion #Udemy_Integers #Top_Interview_150_Math
// #2025_04_01_Time_0_ms_(100.00%)_Space_57.31_MB_(7.22%)

function myPow(x: number, n: number): number {
    let nn = BigInt(n);
    let res = 1.0;
    if (n < 0) {
        nn = -nn;
    }
    while (nn > 0) {
        if (nn % 2n === 1n) {
            nn--;
            res *= x;
        } else {
            x *= x;
            nn /= 2n;
        }
    }
    return n < 0 ? 1.0 / res : res;
}

export { myPow }
