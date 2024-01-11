class Node{
    constructor(value){
        this.value=value;
        this.size=null
        this.next=null
    }
}

class doublyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
         return this.size
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node

        }
        this.size++

    }
}

let list=new doublyLinkedList()
list.append(10)
list.append(20)
console.log('size',list.getSize());