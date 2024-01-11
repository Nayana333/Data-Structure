class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class LinkedList{
    constructor(){
    this.head=null
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
            this.head=node
        }else{
            node.next=this.head
            this.head=node;

        }
        this.size++

    }
    search(value) {
        if (this.isEmpty()) {
            return -1;
        } else {
            let i = 0;
            let curr = this.head;
            while (curr !== null) {
                if (curr.value === value) {
                    return i;
                }
                curr = curr.next;
                i++;
            }
        }
        return -1;
    }
    
    
    }

    let list=new LinkedList()
    list.prepend(10)
    list.prepend(20)
    list.prepend(30)
   const index= list.search(20)
   console.log(index);
