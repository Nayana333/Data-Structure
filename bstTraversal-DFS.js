class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class binarySearchTree{
   constructor(){
    this.root=null
    this.size=0
   }
   isEmpty(){
    return this.root===null
    
   }
   getSize(){
    return this.size;
   }
   insert(value){
    const newNode=new Node(value)
    if(this.isEmpty()){
        this.root=newNode
    }else{
        let current=this.root
        while(current){
            if(value===current.value){
                return undefined
            }else{
                if(value<current.value){
                    if(current.left===null){
                        current.left=newNode
                        this.size++
                        return this
                    }
                    current=current.left
                }else{
                    if(current.right===null){
                        current.right=newNode
                        this.size++
                        return this
                    }
                    current=current.right
                }
            }
        }
    }
   }

   preOrderTraversal(node){
    if(node){
        console.log(node.value);
        this.preOrderTraversal(node.left)
        this.preOrderTraversal(node.right)
    }
   }
   inOrderTraversal(node){
    if(node){
        this.inOrderTraversal(node.left)
        console.log(node.value);
        this.inOrderTraversal(node.right)
    }
   }
   postOrderTraversal(node){
    if(node)
    {
        this.postOrderTraversal(node.left)
        this.postOrderTraversal(node.right)
        console.log(node.value);
    }
   }
}

let bst=new binarySearchTree()
bst.insert(50)
bst.insert(70)
bst.insert(10)
bst.insert(30)
bst.insert(45)
bst.insert(17)
console.log('is empty?:',bst.isEmpty(0));
console.log('size:',bst.getSize());
// console.log(bst.postOrderTraversal(bst.root));
// console.log(bst.preOrderTraversal(bst.root));
console.log(bst.inOrderTraversal(bst.root));