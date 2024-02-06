class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
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
            this.size++
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
                            return this;
                        
                        }
                        current=current.left
                    }else{
                        if(current.right===null){
                            current.right=newNode
                            this.size++
                            return this;
                        }
                        current=current.right
                    }
                }
            }
        }
    }

    inOrderTraversal(node){
        if(node){
        this.inOrderTraversal(node.left)
        console.log(node.value);
        this.inOrderTraversal(node.right)
        }
    }

    isBST(root,min,max){
        if(!root){
            return true
        }
        else{
            root.value>min&&
            root.value<max
            return(
                this.isBST(root.left,min,root.value)&&
                this.isBST(root.right,max,root.value)
            )
        }
    }

}


let bst=new binarySearchTree()
bst.insert(80)
bst.insert(50)
bst.insert(20)
bst.insert(90)
bst.insert(40)
bst.insert(10)
bst.insert(30)
console.log(bst.inOrderTraversal(bst.root));
console.log('isBST?:',bst.isBST(bst.root,-Infinity,Infinity));
