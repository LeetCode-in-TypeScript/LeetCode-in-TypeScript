// #Easy #Top_Interview_Questions #String #Two_Pointers #Udemy_Two_Pointers
// #Top_Interview_150_Two_Pointers #2025_04_07_Time_0_ms_(100.00%)_Space_59.34_MB_(42.47%)

function isPalindrome(s: string): boolean {
    if (s.length < 2) {
        return true
    }
    let sFormated = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    let reversed = sFormated.split('').reverse().join('').replace(',', '')
    return sFormated === reversed
}

export { isPalindrome }
