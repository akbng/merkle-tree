import MerkleTree from "../src/MerkleTree";
import list from "./list";

test('should return "e3caa45a951457b84493e3adec8265f99311c3b1b4f28befbb067a1912efab9e"', () => {
  const tree = MerkleTree.create(list[0]);
  expect(tree.root.value).toBe(
    "e3caa45a951457b84493e3adec8265f99311c3b1b4f28befbb067a1912efab9e"
  );
});

test('should return "fcf69d8aabe9846da1a7e70b74595952cc817738fe9618d4b8e0d2bc8bc3b980"', () => {
  const tree = MerkleTree.create(list[1]);
  expect(tree.root.value).toBe(
    "fcf69d8aabe9846da1a7e70b74595952cc817738fe9618d4b8e0d2bc8bc3b980"
  );
});

test('should return "0d7ad7e793e6fd74203a8e82d97b38750a9b5a0655d3b72f1d64998a3ea7ea67"', () => {
  const tree = MerkleTree.create(list[2]);
  expect(tree.root.value).toBe(
    "0d7ad7e793e6fd74203a8e82d97b38750a9b5a0655d3b72f1d64998a3ea7ea67"
  );
});

test('should return "12dc8922811583d3fc203df5afacaf44390afed0773b924d6c0343bcdeb21088"', () => {
  const tree = MerkleTree.create(list[3]);
  expect(tree.root.value).toBe(
    "12dc8922811583d3fc203df5afacaf44390afed0773b924d6c0343bcdeb21088"
  );
});

test('should return "92788393914b00cc717c04a432b25793c184dc5202c45acdeee698eed7b62e3e"', () => {
  const tree = MerkleTree.create(list[4]);
  expect(tree.root.value).toBe(
    "92788393914b00cc717c04a432b25793c184dc5202c45acdeee698eed7b62e3e"
  );
});

test('should return "d7453de858877c7b9aaed17a8a601cd9aa66b6409b65aec725c50d71e70f3caa"', () => {
  const tree = MerkleTree.create(list[5]);
  expect(tree.root.value).toBe(
    "d7453de858877c7b9aaed17a8a601cd9aa66b6409b65aec725c50d71e70f3caa"
  );
});
