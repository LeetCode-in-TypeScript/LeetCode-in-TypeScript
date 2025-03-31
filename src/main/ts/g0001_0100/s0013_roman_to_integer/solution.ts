// #Easy #Top_100_Liked_Questions #Top_Interview_Questions #String #Hash_Table #Math
// #Top_Interview_150_Array/String #2025_03_31_Time_3_ms_(94.58%)_Space_61.52_MB_(51.93%)

function romanToInt(s: string): number {
    let x = 0;
    let y: string;

    for (let i = 0; i < s.length; i++) {
        y = s.charAt(i);
        switch (y) {
            case 'I':
                x = getX(s, x, i, 1, 'V', 'X');
                break;
            case 'V':
                x += 5;
                break;
            case 'X':
                x = getX(s, x, i, 10, 'L', 'C');
                break;
            case 'L':
                x += 50;
                break;
            case 'C':
                x = getX(s, x, i, 100, 'D', 'M');
                break;
            case 'D':
                x += 500;
                break;
            case 'M':
                x += 1000;
                break;
            default:
                break;
        }
    }
    return x;
}

function getX(s: string, x: number, i: number, i2: number, v: string, x2: string): number {
    if (i + 1 === s.length) {
        x += i2;
    } else if (s.charAt(i + 1) === v || s.charAt(i + 1) === x2) {
        x -= i2;
    } else {
        x += i2;
    }
    return x;
}


export { romanToInt }
