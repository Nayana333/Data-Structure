class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null;
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

                this.head=node
                
            }
            this.size++
        
    }
    print(){
        if(this.isEmpty()){
            console.log('empty')
        }else{
            let curr=this.head;
            let listedValues=''
            while(curr){
                listedValues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listedValues);

        }
    }

    reverse(){
        let curr=this.head;
        let prev=null;
        while(curr){
            let next=curr.next;
            curr.next=prev
            prev=curr
            curr=next
        }
        this.head=prev
    }
}

let list=new LinkedList()
list.prepend(60)
list.prepend(70)
list.prepend(80)
list.print()
list .reverse()
list.print()