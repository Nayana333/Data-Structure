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

   
    


}
let bst=new binarySearchTree()
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
console.log('empty?:',bst.isEmpty());
console.log('size',bst.getSize());



