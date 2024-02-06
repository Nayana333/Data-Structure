class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null
    }
}
class Bst{
    constructor(){
        this.root=null;
        this.size++
    }
    isEmpty(){
        return this.root===null
    }
    getSize(){
        return this.size
    }
    insertValue(value){
        const newNode=new Node()
        if(this.isEmpty()){
            this.root=newNode
            this.size++
            return this
        }
        else{
            let current=this.root
            if(value===current.value){
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
                current.right=newNode
                this.size++
                return this
            }
            current=current.right
        }
    }
    search(root,value){
        if(this.isEmpty()){
            return null
        }
        if(value===this.root.value){
            return true
        }
        else if(value<root.value){
            return this.search(root.left,value)

        }
        else{
            return this.search(root.right,value)
        }
    }
    isValid(root,min,max){
        if(!root){
            return false
        }
        root.value>min && root.value<max
        return(this.isValid(rool.eft,min,root.value)&& this.isValid(root.right,max,root.value))

    }
    closest(target){
        let current=this.root
        let closestValue=Infinity
        if(Math.abs(current.value-target)<Math.abs(current.value-closestValue)){
            closestValue=current.value
        }
        while(current){
        if(target<current.value){
            current=current.left
        }
        if(target>current.value){
            current=current.value
        }
        else {
            break
        }
    }
    }

    postOrder(node){
        if(node){
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.value);
        }
    }
    preOrder(node){
        console.log(node.value);
        this.preOrder(node.left)
        this.preOrder(node.right)
            
        }
        inOrder(node){
            if(!node){
                this.inOrder(node.left)
                console.log(node.value);
                this.inOrder(node.right)
            }
        }
    }
 