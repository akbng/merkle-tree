# Merkle Tree

A hash tree or Merkle tree is a tree in which every "leaf" (node) is labelled with the cryptographic hash values of a data block, and every node that is not a leaf is labelled with the cryptographic hash of the labels of its child nodes. A hash tree allows efficient and secure verification of the contents of a large data structure.

The concept of the Hash tree is patented by [Ralph Merkle](https://en.wikipedia.org/wiki/Ralph_Merkle) in 1979 and it is named after him.

![Demo Merkle Tree](https://i.imgur.com/7vIN7Xm.jpg)

## File Structure

```
.
├── index.ts
├── jest.config.js
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── helper.ts
│   ├── MerkleNode.ts
│   └── MerkleTree.ts
├── tests
│   ├── list.ts
│   ├── root.test.ts
│   ├── sibling.test.ts
│   └── verify.test.ts
└── tsconfig.json
```

`index.ts` includes the code for generating a tree from a list of 200 fake todos.

`src/MerkleNode.ts` is the file that defines the MerkleNode class. This is the class that represents a single node of a tree.

`src/MerkleTree.ts` is the file that defines the MerkleTree class. This is the class used to generate the Merkle Tree.

`src/helper.ts` implements the functions that are required for the Merkle Tree to be generated. It includes a `getHash` function that is used to generate hash values from strings and `makeTree` function that accepts the child nodes and build the parent nodes until it gets to the top.

`test` directory contains the automated tests using Jest for the Merkle Tree.

`tsconfig.json` and `jest.config.js` are the configuration files for TypeScript and Jest respectively.

 <hr />

## Impementation

### Algorithm to construct the Merkle Tree

1. Calculate the hash values of each data in the list.

2. Group the hash values into pairs (2 hash values in a group) starting from left to right.

3. Concatenate the hash values in a group and calculate its hash value.

4. Repeat steps 2 & 3 until there's only one hash value left that will be the root of the tree.

### Algorithm to search the Merkle Tree

1. generate hash of the data to be searched. This will be the leaf node in our case.

2. Find the sibling of the node containing the given hash.

3. Generate the hash of the sibling and the given hash.

4. Repeat step 2 & 3 with the obtained hash until there's only one node left i.e. the Root node.
