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
        if(this.isEmpty()){
            this.root=newNode
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
    if(node){
    console.log(node.value);
    this.preOrderTraversal(node.left)
    this.preOrderTraversal(node.right)
    }
    return undefined
}
    inOrderTraversal(node){
    if(node){
    this.inOrderTraversal(node.left)
    console.log(node.value);
    this.inOrderTraversal(node.right)
    }
    return undefined
}
postOrderTraversal(node){
    if(node){
    this.postOrderTraversal(node.left)
    this.postOrderTraversal(node.right)
    console.log(node.value);
}
return undefined

}
}

let binary=new binarySearchTree()
binary.insert(60)
binary.insert(40)
binary.insert(20)
binary.insert(10)
let searched=binary.search(binary.root,40)
console.log('search',searched);
console.log(binary.postOrderTraversal(binary.root));
console.log(binary.preOrderTraversal(binary.root));