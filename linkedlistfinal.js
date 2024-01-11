class Node{
    constructor(value){
        this.value=value;
        this.next=null
    }

}
class linkedList{
    constructor(){
        this.head=null;
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node           
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('empty');
        }else{
            let curr=this.head
            let listedValue=''
            while(curr){
                listedValue +=`${curr.value} `
                curr=curr.next
            }
            console.log(listedValue);
        }
    }
    insert(value,index){
        if(index<0 || index>this.size){
            return -1
        }
        if(index===0){
            this.prepend(value)
        }else{
            const node=new Node(value)
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next;
            prev.next=node
            this.size++
        }
    }
    removeindex(index){
        let removeNode;
        if(index<0 || index >this.size){
            return null
        }
        if(index===0){
            removeNode=this.head
            this.head=this.head.next

        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=removeNode.next

            this.size--
        }
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
            return value
        }
        else{
            let prev=this.head
            let removeNode;
            while(prev.next && prev.next.value !==value){
                prev.next=prev.next
            }
            removeNode=prev.next;
            prev.next=removeNode.next
            this.size--
            return value

        }

    }
    search(value){
        let i=0
        if(this.isEmpty()){
            console.log('empty list');
        }
        let curr=this.head
        while(curr !=null){
            if(curr.value===value){
               console.log(i);
               return i
            }
            curr=curr.next
            i++
        }
        return null
    }
    reverse(){
        if(this.isEmpty()){
            console.log('empty');
        }else{
            let curr=this.head
            let prev=null;
            while(curr){
                let next=curr.next;
                curr.next=prev;
                prev=curr;
                curr=next
            }
            this.head=prev
        }
    }
    
}
let list =new linkedList()
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.append(40)
list.insert(25,2)
list.removeindex(2)
list.removeValue(20)
const index=list.search(30)
console.log(index);
list.reverse()
console.log('empty?',list.isEmpty());
console.log('size',list.getSize());
list.print()