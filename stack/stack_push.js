class Node{
    constructor(value){
        this.value=value;

    }
}

class Stack{
    constructor(){
        this.top=null;
        this.size=0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    push(value){
      let node=new Node(value)
       if(this.size==0){
        this.top=node
       } else{
        let curr=this.top;
        this.top=node
        this.top.next=curr
        
       }
       this.size++
    }
    
 
}

let stack=new Stack()
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(60)
console.log('empty',stack.isEmpty());
console.log('size',stack.getSize());