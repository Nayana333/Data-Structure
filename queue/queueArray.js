class Queue{
    constructor(){
        this.item=[]
    }

enequeue(element){
    this.item.push(element)
}
dequeue(){
    this.item.shift()
}
isEmpty(){
    return this.item.length===0
}
peek(){
    if(this.isEmpty()){
        return this.item[0]
    }
    return null
}
print(){
    console.log(this.item.toString());
} 

}

let queue=new Queue()
queue.enequeue(10)
queue.enequeue(20)
queue.enequeue(30)
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek())
