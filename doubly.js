class Node{
    constructor(value){
        this.value=value;
        this.prev=null;
        this.size=0;
    }
}

class doublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;

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
            node.next=this.head;
            this.head.prev=node;
            this.head=node;
        }
        this.size++

    }
}
let list=new doublyLinkedList()
list.prepend(30)
list.prepend(20)
console.log('size',list.getSize());