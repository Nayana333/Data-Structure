//in this we dont ll because we dont print it
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor()
    {
        this.head=null;
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
    }else{
        node.next=this.head;
        this.head=node;
    }
    this.size++;

}
}

const list=new LinkedList()
list.prepend(10);
list.prepend(20);
console.log('empty?',list.isEmpty());
console.log('size',list.getSize());