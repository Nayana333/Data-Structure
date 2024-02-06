class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      this.root = this.insertNode(this.root, value);
    }
  
    insertNode(root, value) {
      if (root === null) {
        
        return new Node(value);
      }
  
      
      if (value < root.value) {
        root.left = this.insertNode(root.left, value);
      }
      else if (value > root.value) {
        root.right = this.insertNode(root.right, value);
      }
  
      return root;
    }
  }
  

  const binaryTree = new BinaryTree;
  binaryTree.insert(-3);
  binaryTree.insert(5);
  binaryTree.insert(55);
 
 
  
  console.log(binaryTree);



  