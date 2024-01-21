class Priority{
    constructor(){
        this.item=[]
        this.front=0;
        this.rear=0
        this.size=0
    }
    isEmpty(){
       return this.front===this.rear
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
                   
                    break;
                }
            }
            if(!added){
                this.item[this.rear]=newValue
            }
        }
            this.rear++
            this.size++
        
    }
}
let priority=new Priority()
priority.enqueue(30,3)
priority.enqueue(10,1)
priority.enqueue(20,2)
console.log('empty:',priority.isEmpty());
console.log('size:',priority.getSize());






