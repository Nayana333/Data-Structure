class Node{
    constructor(value){
        this.value=value
        this.left=null;
        this.right=null;

    }
}
class binarySearchTree{
    constructor()
    {
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }
}
let bst=new binarySearchTree()
console.log('empty?:',bst.isEmpty());