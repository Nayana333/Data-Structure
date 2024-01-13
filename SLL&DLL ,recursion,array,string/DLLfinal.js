class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null
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
        if(this.isEmpty()){
            this.head=node;
            this.tail=node
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
            this.head=node
            this.tail=node
        }
        else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=node
        }
        this.size++

    }
    print(){
        if(this.isEmpty()){
            console.log('empty');
        }else{
            let listedValue=''
            let curr=this.head
            while(curr){
                listedValue+=`${curr.value} `
                curr=curr.next

            }
           console.log(listedValue);
        }
    }
    removeFront(){
        if(this.isEmpty()){
            console.log('empty');
        }else{
            const value=this.head.value
            this.head=this.head.next
            this.size--
            return value
        }

    }
    removeEnd(){
        if(this.isEmpty()){
            console.log('null');
        }else{
        this.tail=this.tail.prev;
        this.tail.next=null
    }
        
    this.size++
    return value
    }
    reverse(){
        if(this.isEmpty()){
            console.log('empty');
        }else{
            let curr=this.tail
            let listedValue=''
            while(curr){
                listedValue +=`${curr.value} `
                curr=curr.prev
            }
            console.log(listedValue);
        }   
}

}
let list=new doubly()
list.prepend(10)
list.append(20)
list.removeFront()
console.log('empty',list.isEmpty());
console.log('size',list.getSize());
list.print()