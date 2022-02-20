import MerkleTree from "../src/MerkleTree";
import list from "./list";
import { getHash } from "../src/helper";

test(`should return ${getHash(list[3][2])}`, () => {
  const hash = getHash(list[3][2]);
  const tree = MerkleTree.create(list[3]);
  const sibling = tree.findSiblingOf(getHash(list[3][3]));
  expect(sibling.node.value).toBe(hash);
});

test(`should return ${getHash(list[4][5])}`, () => {
  const hash = getHash(list[4][5]);
  const tree = MerkleTree.create(list[4]);
  const sibling = tree.findSiblingOf(getHash(list[4][4]));
  expect(sibling.node.value).toBe(hash);
});

test(`should return null`, () => {
  const tree = MerkleTree.create(list[5]);
  const sibling = tree.findSiblingOf(getHash(list[5][0] + "null"));
  expect(sibling).toBe(null);
});
