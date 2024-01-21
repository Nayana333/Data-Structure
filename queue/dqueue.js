class DoubleEndedQueue{
    constructor(){
    this.item=[]
    this.front=-1;
    this.rear=-1;
    this.size=0
    }
    isEmpty(){
        return this.front===-1 && this.rear===-1
    }
    getSize(){
        return this.size
    }

}

let dqueue=new DoubleEndedQueue()
console.log('empty?',dqueue.isEmpty());
console.log('size',dqueue.getSize());