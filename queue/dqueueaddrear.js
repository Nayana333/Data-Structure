class DoubleEndedQueue{
    constructor(){
        this.item=[]
        this.size=0
        this.rear=-1;
        this.front=-1

    }
    isEmpty(){
        return this.rear===-1 && this.front===-1
    }
    getSize(){
        return this.size
    }
    addrear(element){
        if(this.isEmpty()){
            this.front=0
        }
        this.rear++
        this.item[this.rear]=element
        this.size++
    }
   
}
      
let dqueue=new DoubleEndedQueue()
dqueue.addrear(10)
dqueue.addrear(20)
dqueue.addrear(30)
dqueue.addrear(40)
console.log('empty?',dqueue.isEmpty());
console.log('size',dqueue.getSize());


