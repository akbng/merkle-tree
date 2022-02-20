import MerkleNode from "./MerkleNode";
import { getHash, makeRoot } from "./helper";

class MerkleTree {
  root: MerkleNode;
  size: number;
  constructor(root: MerkleNode, size: number) {
    this.root = root;
    this.size = size;
  }

  static create(transactions: Array<string>) {
    const size = Math.ceil(Math.log2(transactions.length)) + 1;
    const root = makeRoot(
      transactions.map((trn) => new MerkleNode(getHash(trn)))
    );
    return new MerkleTree(root, size);
  }

  findSiblingOf(hash: string, node: any = this.root): any {
    if (node.value === hash) return { node };
    if (!node.left && !node.right) return null;
    if (node.left?.value === hash) return { node: node.right, left: false };
    if (node.right?.value === hash) return { node: node.left, left: true };
    return (
      this.findSiblingOf(hash, node.left) ||
      this.findSiblingOf(hash, node.right)
    );
  }

  verify(data: string) {
    let hash = getHash(data);
    let sibling = this.findSiblingOf(hash);
    while (sibling !== null && sibling.node.value !== this.root.value) {
      const val = sibling.left
        ? sibling.node.value + hash
        : hash + sibling.node.value;
      hash = getHash(val);
      sibling = this.findSiblingOf(hash);
    }

    return sibling && sibling.node.value === this.root.value ? true : false;
  }
}

export default MerkleTree;
