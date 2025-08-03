// Trie Node
class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEnd = true;
  }

  search(prefix) {
    let node = this.root;
    for (let ch of prefix) {
      if (!node.children[ch]) {
        return [];
      }
      node = node.children[ch];
    }

    return this._collectWords(node, prefix);
  }

  _collectWords(node, prefix) {
    const result = [];
    if (node.isEnd) {
      result.push(prefix);
    }

    for (let ch in node.children) {
      const childNode = node.children[ch];
      const newPrefix = prefix + ch;
      const childWords = this._collectWords(childNode, newPrefix);
      result.push(...childWords);
    }

    return result;
  }
}
