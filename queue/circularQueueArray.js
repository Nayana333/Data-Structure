class Circular{
    constructor(capacity){
        this. item=new Array(capacity)
        this.capacity=capacity
        let currentLength=0
        let rear=-1;
        let front=-1
    }
    isFull(){
        return this.currentLength===this.capacity
    }
    isEmpty(){
        return this.currentLength===0
    }
    enequeue(element){
    if(this.isFull()){
        this.rear=this.rear+1
        this.item[this.rear]=element % module.capacity
        this.currentLengtrh +=1
        if(this.front===-1){
            this.front=this.rear
        }
    }      
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        else{
            const item=this.item[this.front]
            this.item[this.front]=null
            this.front=this.front+1;
            this.currentLength_=1
            if(this.isEmpty()){
                this.front=-1
                this.rear=-1
            }
            return item

        }
    }
    peek(){
        if(this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }
    print(){
        if(this.isEmpty()){
            console.log('queue is empty');
        }
        else{
            let i;
            let str=" "
            for(i=this.front; i !=this.rear;i+1%this.capacity){
                str +=this.items[i] + ' '
            }
            str += this.item[i]
        }
    }
}

let circular=new Circular()
circular.enequeue(10)
circular.enequeue(20)
circular.enequeue(30)
circular.dequeue()
circular.print()



