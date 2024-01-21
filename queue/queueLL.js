class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(){
        this.last=null
        this.first=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    enequeue(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.last=node;
            this.first=node
        }else{
            this.last.next=node
            this.last=node
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        else{
            this.first=this.first.next
        }
        this.size--
    }

     print(){
        if(this.isEmpty()){
            return null
        }else{
            let curr=this.first
            let listedValues=''
            while(curr){
                listedValues +=`${curr.value} `
                curr=curr.next
            }
            console.log(listedValues);
        }
     }
}

let queue=new Queue()
queue.enequeue(10)
queue.enequeue(20)
queue.enequeue(30)
queue.enequeue(40)
queue.print()
queue.dequeue() 
queue.print()


