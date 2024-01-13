class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
       return this.size;
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('linked list is empty');
        }else{
            let curr=this.head;
            let listedValue=''
            while(curr){
                listedValue +=`${curr.value} `
                curr=curr.next
            }
            console.log(listedValue)
        }
    }
}
const list=new LinkedList()
console.log('empty?',list.isEmpty());
console.log('size',list.getSize());
list.prepend(10)
list.prepend(50)
list.prepend(90)
list.print()
