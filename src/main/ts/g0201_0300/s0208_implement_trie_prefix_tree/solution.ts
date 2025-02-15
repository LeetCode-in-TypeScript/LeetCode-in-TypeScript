// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #String #Hash_Table #Design #Trie
// #Level_2_Day_16_Design #Udemy_Trie_and_Heap #Top_Interview_150_Trie
// #Big_O_Time_O(word.length())_or_O(prefix.length())_Space_O(N)
// #2023_10_09_Time_168_ms_(80.99%)_Space_79.5_MB_(14.46%)

class TrieNode {
    children: TrieNode[]
    isWord: boolean

    constructor() {
        this.children = new Array<TrieNode>(26)
        this.isWord = false
    }
}

class Trie {
    private root: TrieNode
    private startWith: boolean

    private static readonly ALPHABET_SIZE = 26

    constructor() {
        this.root = new TrieNode()
        this.startWith = false
    }

    // Inserts a word into the trie.
    insert(word: string): void {
        this.insertRecursive(word, this.root, 0)
    }

    private insertRecursive(word: string, node: TrieNode, idx: number): void {
        if (idx === word.length) {
            node.isWord = true
            return
        }
        const charIndex = this.getCharIndex(word.charAt(idx))
        if (!node.children[charIndex]) {
            node.children[charIndex] = new TrieNode()
        }
        this.insertRecursive(word, node.children[charIndex], idx + 1)
    }

    // Returns if the word is in the trie.
    search(word: string): boolean {
        this.startWith = false
        return this.searchRecursive(word, this.root, 0)
    }

    private searchRecursive(word: string, node: TrieNode, idx: number): boolean {
        if (idx === word.length) {
            this.startWith = true
            return node.isWord
        }

        const charIndex = this.getCharIndex(word.charAt(idx))
        if (!node.children[charIndex]) {
            this.startWith = false
            return false
        }
        return this.searchRecursive(word, node.children[charIndex], idx + 1)
    }

    // Returns if there is any word in the trie
    // that starts with the given prefix.
    startsWith(prefix: string): boolean {
        this.search(prefix)
        return this.startWith
    }

    private getCharIndex(char: string): number {
        return char.charCodeAt(0) - 'a'.charCodeAt(0)
    }
}

/*
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export { Trie }
