import { createHash } from "crypto";
import MerkleNode from "./MerkleNode";

export const getHash = (data: string): string => {
  return createHash("sha256").update(data.toString()).digest("hex");
};

export const makeRoot = (arr: Array<MerkleNode>): MerkleNode => {
  if (arr.length === 1) return arr[0];
  const list = [];
  const length = arr.length;
  for (let i = 0; i < length; i += 2) {
    const currentItem = arr[i];
    if (i + 1 >= length) {
      list.push(currentItem);
      break;
    }
    const nextItem = arr[i + 1];
    let value = currentItem.value + nextItem.value;
    const node = new MerkleNode(getHash(value), currentItem, nextItem);
    list.push(node);
  }
  return makeRoot(list);
};
