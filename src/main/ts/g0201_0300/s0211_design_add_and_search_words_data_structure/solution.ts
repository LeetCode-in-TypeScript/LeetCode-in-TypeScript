// #Medium #String #Depth_First_Search #Design #Trie #Top_Interview_150_Trie
// #2025_04_12_Time_450_ms_(92.88%)_Space_92.76_MB_(88.14%)

interface TrieNode {
    [key: string]: TrieNode | boolean
}

class WordDictionary {
    root: TrieNode

    constructor() {
        this.root = {}
    }

    addWord(word: string): void {
        let current = this.root
        for (let i = 0; i < word.length; i++) {
            const letter = word[i]
            if (!current.hasOwnProperty(letter)) {
                current[letter] = {}
            }
            current = current[letter] as TrieNode
        }
        current.end = true
    }

    search(word: string): boolean {
        const searchSubtree = (word: string, index: number, subtree: TrieNode) => {
            if (word.length === index) {
                return subtree.hasOwnProperty('end')
            }
            const currentLetter = word[index]
            index += 1
            if (currentLetter === '.') {
                return Object.keys(subtree).some((letter) => searchSubtree(word, index, subtree[letter] as TrieNode))
            } else {
                if (subtree.hasOwnProperty(currentLetter)) {
                    return searchSubtree(word, index, subtree[currentLetter] as TrieNode)
                } else {
                    return false
                }
            }
        }
        return searchSubtree(word, 0, this.root)
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

export { WordDictionary }
