class Node{
    constructor(value){
        this.value=value
        this.prev=null;
        this.next=null
    }
}
class doubly{
    constructor(){
        this.head=null;
        this.tail=null;
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
        if(this.isEmpty){
            this.head=node;
            this.tail=node
        }else{
            node.next=this.head
            this.head.prev=node.next
            this.head=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('empty list');
        }else{
            let curr=this.head;
            let listedValues=''
            while(curr){
                listedValues +=`${curr.value} `
                curr=curr.next
            }
            console.log(listedValues);
        }
    }

    reverse(){
        if(this.isEmpty()){
            console.log('empty');

        }else{
            let curr=this.tail
            let listedValue=''
            while(curr){
                listedValue += `${curr.value} `
                curr=curr.prev

            }
            console.log(listedValue);
        }
    }
}

let list=new doubly()
list.prepend(30)
list.prepend(20)
list.prepend(10)
console.log('empty',list.isEmpty());
console.log('size',list.getSize());
list.print()
list.reverse()
list.print()