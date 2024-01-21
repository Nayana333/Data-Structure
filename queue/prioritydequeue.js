class Priority{
    constructor(){
        this.item=[];
        this.rear=0;
        this.front=0
        this.size=0
    }
    isEmpty(){
        return this.rear===this.front
    }
    getSize(){
        return this.size
    }
    enqueue(value,priority){
        const newValue={value,priority}
        if(this.isEmpty()){
            this.item[this.rear]=newValue
        }else{
            let added=false
            for(let i=this.front;i<=this.rear;i++){
                if(newValue.priority<this.item[i].priority){
                    this.item.splice(i,0,newValue)
                    added=true
                }
            }
            if(!added){
                this.item[this.rear]=newValue
            }
        }
        this.rear++
        this.size++

    }
   
        dequeue() {
            if (this.isEmpty()) {
                return null;
            }
        
            const removedValue = this.item.shift();
            this.front++;
        
            if (this.front > this.rear) {
                this.front = 0;
                this.rear = 0;
            }
        
            console.log(removedValue.value);
            this.size--;
        
            return removedValue.value;
        }
        
    display(){
        if(this.isEmpty()){
            console.log('queue is empty');
        }else{
            console.log(this.item.map(item=>`${item.value}=>${item.priority} `).join(' '));
        }
        
    }

}

let priority=new Priority()
priority.enqueue(30,3)
priority.enqueue(10,1)
priority.enqueue(200,10)
priority.enqueue(20,2)

priority.display()
console.log('empty:',priority.isEmpty());
console.log('size:',priority.getSize());