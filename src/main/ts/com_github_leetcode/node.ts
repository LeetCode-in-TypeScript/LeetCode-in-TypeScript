class Node {
    val: number
    next: Node | null
    random: Node | null
    constructor(val?: number, next?: Node, random?: Node) {
        this.val = val ?? 0
        this.next = next ?? null
        this.random = random ?? null
    }

    toString(): string {
        const result: string[] = []
        let curr: Node | null = this //NOSONAR
        while (curr !== null) {
            const result2: string[] = []
            result2.push(String(curr.val))
            if (curr.random === null) {
                result2.push('null')
            } else {
                let randomIndex = 0
                let curr2: Node | null = this //NOSONAR
                while (curr2?.next !== null && curr2 !== curr.random) {
                    randomIndex++
                    curr2 = curr2.next
                }
                result2.push(String(randomIndex))
            }
            result.push(`[${result2.join(',')}]`)
            curr = curr.next
        }
        return `[${result.join(',')}]`
    }
}

export { Node }
