import MerkleTree from "./src/MerkleTree";
import request from "request";

async function fetchTodos() {
  return new Promise((resolve, reject) => {
    request(
      "https://jsonplaceholder.typicode.com/todos",
      function (error, response, body) {
        if (error) reject(error);
        else resolve(body);
      }
    );
  });
}

async function init() {
  try {
    const todos: any = await fetchTodos();
    const list = JSON.parse(todos);
    const tree = MerkleTree.create(list.map((item: any) => item.title));
    const randPoint = Math.floor(Math.random() * list.length);
    console.log(
      `"${list[randPoint].title}" is${
        tree.verify(list[randPoint].title) ? "" : "not"
      } in the tree`
    );
  } catch (error) {
    console.error(error);
  }
}

init();
