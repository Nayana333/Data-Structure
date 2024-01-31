class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;

    }
}
class BinarySearchTree{
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
            this.root=newNode
            this.size++
            return this
            
        }
        else{
            let current=this.root
            while(true){
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
            }
        }
    }
    }
    search(root,value){
        if(!root){
            return null
        }
        if(root.value===value){
            return true;
        }
        else if(value<root.value){
            return this.search(root.left,value)
        }
        else{
            return this.search(root.right,value)
        }
    }

    isValid(root,min,max){
       if (!root){
            return false
        }else{
            root.value>min&&
            root.value<max
            return (this.isValid(root.left,min,root.value)&& this.isValid(root.right,max,root.value))
        }

    }
    closestValue(target){
        let currentNode=this.root
        let closestValue=Infinity
        while(currentNode){
        if(Math.abs(currentNode.value-target)<Math.abs(closestValue-target)){
            closestValue=currentNode.value
        }
        if(target<currentNode.value){
            currentNode=currentNode.left
        }
        else if(target>currentNode.value){
            currentNode=currentNode.right
        }
        
        else
        {
            break;
        }
    }
        return closestValue
    }

    minvalue(){
        let node=this.root
        if(!node){
            return null
        }
        while(node.left){
            node=node.left
        }
        return node.left
    }
    maxValue(){
        let node=this.root
        if(!node){
            return null
        }
        while(node.right){
            node=node.right
        }
        return node.right
    }
}
let bst=new BinarySearchTree()
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
let searchResult = bst.search(bst.root, 20);
let closest=bst.closestValue(33)
console.log('closestvalue=',closest);
console.log('Search 20:', searchResult);
console.log('isempty?:',bst.isEmpty());
console.log('size',bst.getSize());
console.log('Max',bst.maxValue());
console.log('min',bst.minvalue());