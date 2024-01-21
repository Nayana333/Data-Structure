class Circular{
    constructor(size){
    this.item=new Array(size)
    this.size=size
    this.front=-1
    this.rear=-1
}
isEmpty(){
    return this.rear===-1 && this.front===-1
}
isFull(){
    return (this.rear+1)%this.size===this.front
}
enqueue(value){
    if(this.isFull){
        console.log('queue is full');
    }
    if(this.isEmpty()){
        this.front=0
    }
    this.rear=(this.rear+1)%this.size
    this.item[this.rear]=value
}
dequeue(){
    if(this.isEmpty()){
        console.log('queue is empty');
    }
    const removed=this.item[this.front]
    if(this.front===this.rear){
        this.front=-1;
        this.rear=-1

    }
    else{
    this.front=(this.front+1)%this.size
    }
    return removed

}
display(){
    if(this.isEmpty()){
        console.log('queue is empty');
    }
    else{
        for(let i=this.front;i<=this.rear;i++){
            console.log(this.item[i]);
        }
    }
}
}
let circular=new Circular(20)
circular.enqueue(10)
circular.enqueue(20)
circular.enqueue(30)
circular.enqueue(40)
circular.display()
console.log('   ');
circular.dequeue()
circular.display()
console.log('full?',circular.isFull());
console.log('empty>',circular.isEmpty());
