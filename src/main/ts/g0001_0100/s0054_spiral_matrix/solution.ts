// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #Array #Matrix #Simulation
// #Programming_Skills_II_Day_8 #Level_2_Day_1_Implementation/Simulation #Udemy_2D_Arrays/Matrix
// #Top_Interview_150_Matrix #2025_04_01_Time_0_ms_(100.00%)_Space_55.71_MB_(30.13%)

function spiralOrder(matrix: number[][]): number[] {
    const result: number[] = []
    let r = 0,
        c = 0
    let bigR = matrix.length - 1
    let bigC = matrix[0].length - 1
    while (r <= bigR && c <= bigC) {
        for (let i = c; i <= bigC; i++) {
            result.push(matrix[r][i])
        }
        r++
        for (let i = r; i <= bigR; i++) {
            result.push(matrix[i][bigC])
        }
        bigC--
        for (let i = bigC; i >= c && r <= bigR; i--) {
            result.push(matrix[bigR][i])
        }
        bigR--
        for (let i = bigR; i >= r && c <= bigC; i--) {
            result.push(matrix[i][c])
        }
        c++
    }
    return result
}

export { spiralOrder }
