class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null

    }
}
class Binary{
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
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
        this.size++
    }
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left===null){
                root.left=node
            }else{
               this.insertNode(root.left,node)
            }
        }else{
            if(root.right===null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
        
    }
    search(root,value)
    {
        if(!root){
            return null
        }
        else{
            if(root.value===value){
                return true
            }
            else{
                if(root.value<value){
                    return this.search(root.left,value)
                }
                else{
                    return this.search(root.right,value)
                }
            }
        }
    }
    delete(data){
        this.root=this.deleteNode(this.root,data)
        this.size--
       
    }
    deleteNode(node,value){

            function findMinNode(node){
                while(node.left!=null){
                    node=node.left
                }
                return node;
            }
            if(node===null){
                return null
            }
            if(value===node.value){
            
            if(node.left===null && node.right===null){
                return null
            }
            if(node.right===null){
                return node.left
            }
            if(node.left===null){
                return node.right
            }
            const tempNode=findMinNode(node.right)
            node.value=tempNode.value
            node.right=deleteNode(node.right&&tempNode.value)
            return node
        }else if(value>node.value){
            node.right=deleteNode(node.right,value)

        }
        else{
            node.left=deleteNode(node.left,value)
        }
        this.root=deleteNode(this.root,value)
        this.size--
    return
    }
    

}

let bst=new Binary()
bst.insert(30)
 bst.insert(20)
 bst.insert(70)
 bst.insert(90)
 bst.insert(10)
 bst.delete(bst.root,30)
 console.log('empty?',bst.isEmpty());
 console.log('size?',bst.getSize());
 console.log('search 20:', bst.search(bst.root, 20));


 