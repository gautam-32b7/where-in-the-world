// Trie Node class representing each node in the Trie
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  // Insert a word into the Trie.
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Search for all words in the Trie that start with a given prefix.
  search(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }

    return this.findAllWords(node, prefix);
  }

  // Recursively find all words starting from a given node.
  findAllWords(node, prefix) {
    let result = [];
    if (node.isEndOfWord) {
      result.push(prefix);
    }
    for (let char in node.children) {
      result = result.concat(
        this.findAllWords(node.children[char], prefix + char)
      );
    }

    return result;
  }
}

export default Trie;
