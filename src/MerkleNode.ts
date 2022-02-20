class MerkleNode {
  value: string;
  left: MerkleNode | null;
  right: MerkleNode | null;
  constructor(
    value: string,
    left: MerkleNode | null = null,
    right: MerkleNode | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export default MerkleNode;
