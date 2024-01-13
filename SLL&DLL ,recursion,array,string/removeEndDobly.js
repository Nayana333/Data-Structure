class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.tail=null

    }
}
class doublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null
        this.size=0

    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
            
        }
        this.size++

    }

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.nex=node
            node.prev=this.tail
            this.tail=node
        }
        this.size++
    }
    removeEnd(){
        if(this.isEmpty()){
            return null
        }
        const value=this.tail.value
        if(this.size===1){
            this.head=null
            this.tail=null
        }
        else{
            this.tail=this.tail.prev;
            this.tail.next=null;

        }
        this.size--
        return value;
    }
}
let list=new doublyLinkedList()
list.append(10)
list.append(20)

list.prepend(5)
list.removeEnd()
console.log('size',list.getSize());