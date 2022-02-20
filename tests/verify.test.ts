import MerkleTree from "../src/MerkleTree";
import list from "./list";

test("should return true", () => {
  const tree = MerkleTree.create(list[0]);
  expect(tree.verify(list[0][2])).toBe(true);
});

test("should return true", () => {
  const tree = MerkleTree.create(list[1]);
  expect(tree.verify(list[1][2])).toBe(true);
});

test("should return true", () => {
  const tree = MerkleTree.create(list[2]);
  expect(tree.verify(list[2][2])).toBe(true);
});

test("should return true", () => {
  const tree = MerkleTree.create(list[3]);
  expect(tree.verify(list[3][2])).toBe(true);
});

test("should return true", () => {
  const tree = MerkleTree.create(list[4]);
  expect(tree.verify(list[4][2])).toBe(true);
});

test("should return false", () => {
  const tree = MerkleTree.create(list[0]);
  expect(tree.verify(list[0][2] + "false")).toBe(false);
});
