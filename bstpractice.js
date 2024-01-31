class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class binarySearchTree{
    constructor(){
        this.root=null;
        this.size=0
    }
    isEmpty(){
        return this.root===null
    }
    getSize(){
        return this.size
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty){
            this.root=newNode(value)
            this.size++;
            return this
        }
        else{
            let current=this.root
            if(current.value===value){
                return undefined
            }
            if(value<current.value){
                if(current.left===null){
                    current.left=newNode
                    this.size++
                    return this
                }
                current=current.left
                
            }
            else{
                if(current.right===null){
                    current.right=newNode
                    this.size++
                    return this
                }
                current=current.right
            }
        }
    }
    search(root,value){
        if(!root){
            return null
        }
        if(root.value===value){
            return true
        }
        else if(value<root.value){
            return this.search(root.left,value)
        }
        else{
            return this.search(root.right,value)
        }
    }

    preOrderTraversal(node){
    if(node)
    console.log(node.value);
    this.preOrderTraversal(node.left)
    this.preOrderTraversal(node.right)
    }
    inOrderTraversal(node){
    if(node){
    this.inOrderTraversal(node.left)
    console.log(node);
    this.inOrderTraversal(node.right)
    }
}
postOrderTraversal(node){
    this.postOrderTraversal(node.left)
    this.postOrderTraversal(node.right)
    console.log(node.value);
}

}