class Node{
    constructor(value){
        this.value=value
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
                if(current.value===value){
                 
                    return undefined
                   
                }
                else{
                    if(value<current.value){
                        if(current.left===null){
                            current.left=newNode
                            this.size++
                            return this;
                        }
                        current=current.left
                    }
                    else{
                        if(current.right===null){
                            current.right=newNode;
                            this.size++
                            return this;
                        }
                        current=current.right
                    }

                }
            }
        }
        }
        search(root,value){
            if(!root){
                return false;
            }
            if(value===root.value){
                return true;
            }
           else if(value<root.value){
            return this.search(root.left,value)
            }
            else{
                return this.search(root.right,value)
            }
        }
        closestValue(target){
            let currentNode=this.root;
            let closestValue=Infinity
            while(currentNode){
                if(Math.abs(currentNode.value-target)<Math.abs(target-closestValue)){
                    closestValue=currentNode.value
                }
                if(target<currentNode.value){
                    currentNode=currentNode.left

                }else if(target>currentNode.value){
                        currentNode=currentNode.right
                    }
                    else{
                        break;
                    }
                }
                return closestValue
                
            }
        }


let bst=new binarySearchTree()
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


