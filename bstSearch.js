class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
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
        return this.size
    }
    insert(value){
        const newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode;
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
                    return this
                }
                current=current.left
            }
                else{
                    if(current.right===null){
                        current.right=newNode
                        this.size++
                        return  this;
                    }
                    current=current.right
                }            
             }
            }
        }
    }
    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (root.value < value) {
                return this.search(root.right, value);
            } else {
                return this.search(root.left, value);
            }
        }
    }
    
}
let bst=new binarySearchTree()
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
let searchResult = bst.search(bst.root, 20);
console.log('Search 20:', searchResult);
console.log('isempty?:',bst.isEmpty());
console.log('size',bst.getSize());