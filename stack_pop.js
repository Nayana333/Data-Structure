class Node{
    constructor(value){
        this.value=value
        this.top=null
    }
}

class Stack{
    constructor()
    {
        this.top=null;
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    push(value){
        let node = new Node(value);
        if(this.isEmpty()){
            this.top = node;
        } else {
            let curr = this.top;
            this.top = node;
            this.top.next = curr
        }
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            return null
        }else{
            this.top=this.top.next
            this.size--

        }
        if(this.size===0)
        {
            this.top=null
        }
       
    }
    print(){
        let curr=this.top;
        let listedValues=' ';
        if(this.isEmpty()){
       console.log('null');
        }else{
            while(curr){
                listedValues +=`${curr.value} `
                curr=curr.next
            }
            console.log(listedValues);
        }
    }
}



let stack=new Stack()
stack.push(10)
stack.push(30)
stack.pop()
console.log('empty:',stack.isEmpty());
console.log('size:',stack.getSize());
stack.print()