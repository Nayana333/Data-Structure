class Node{
    constructor(value){
        this.top=null
        this.value=value
    }
}
class Stack{
    constructor(){
        this.top=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    push(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.top=node
        }else{
            let curr=this.top
            this.top=node
            this.top.next=curr
        }
        this.size++
    }
    pop(){
        if (this.isEmpty()){
            console.log('stack is empty');
        }
        else{
            this.top=this.top.next;
            this.size--
            
        }
    }
    print(value){
        if(this.isEmpty()){
            console.log('empty stack');
        }else{
            let listedValues='';
            let curr=this.top
            while(curr){
                listedValues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listedValues);
        }
    }
}
let stack=new Stack()
stack.push(10);
stack.push(20)
stack.push(30)
stack.push(40)
stack.pop()
stack.print()
console.log('empty',stack.isEmpty());
console.log('size',stack.getSize());