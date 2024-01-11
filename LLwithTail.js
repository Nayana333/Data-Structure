class Node{
    constructor(value){
        this.value=value
        this.next=0;

    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    prepend(value){
        const node=new Node(value)
            if(this.isEmpty()){
                this.head=node;
                this.tail=node
            }
            else{
                node.next=this.head;
                this.head=node
            }
            this.size++
        }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node;
            this.tail=node
        }else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
    }
    removefront(){
        if(this.isEmpty()){
            return null
        }else{
            const value=this.head.value;
            this.head=this.head.next;
            this.size--
            return value
        }
    }

    removeEnd() {
        if (this.isEmpty()) {
            return null;
        }
    
        let value;
    
        if (this.size === 1) {
            value = this.head.value;
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            }
            value = this.tail.value;
            prev.next = null;
            this.tail = prev;
        }
    
        this.size--;
        return value;
    }
    
print(){
    let listedValue='';
    if(this.isEmpty()){
        return -1
    }else{
        let curr=this.head;
        
        while(curr){
            listedValue +=`${curr.value} `
            curr=curr.next
        }
        
    }
    console.log(listedValue);
}
    

}
let list=new LinkedList()
list.prepend(10);
list.append(30);
list.prepend(20)
list.append(40)
list.print()
list.removefront()
list.removeEnd()
list.print()