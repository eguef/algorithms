const node = require("./DoubleNode");

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  insertNode(currentNode = this.root, newNode) {
    if (this.root == null) {
      this.root = this.node;
      return;
    }

    if (currentNode.value > newNode.value) {
      if (currentNode.left == null) {
        currentNode.left = newNode;
        return;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
    }
    if (currentNode.value < newNode.value) {
      if (currentNode.right == null) {
        currentNode.right = newNode;
        return;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    }

    this.size++;
  }

  remove(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) return null;
    else if (node.value > value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (node.value < value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const aux = this.findMinNode(node.right);
      node.value = aux.value;

      node.right = this.removeNode(node.right, aux.value);
      return node;
    }
  }

  search(node, value) {
    if (node === null) return null;
    else if (value < node.value) return this.search(node.left, value);
    else if (value > node.value) return this.search(node.right, value);
    else return node;
  }

  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  preorder(node) {
    if (node != null) {
      console.log(node.value);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }
}
