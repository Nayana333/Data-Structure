class priorityQueue{
    constructor(){
        this.heap=[]

    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    getparentIndex(index){
        return Math.floor((index-1)/2)
    }
    bubbleup(index){
        while(index>0&&this.heap[index.priority]<this.heap[this.getparentIndex(index)].priority){
            this.swap[index,this.getparentIndex(index)]
            index=this.getparentIndex(index)
        }
    }
    insert(value,priority){
        let element={value,priority}
        this.heap.push(element)
        this.bubbleup(this.heap.length-1)
    }
    getLeftChild(index){
        return index*2+1
    }
    getRightchild(index){
        return index*2+2
    }
    bubbledown(index){
        let leftchild=this.getLeftChild(index)
        let rightchild=this.getRightchild(index)
        let minIndex=index
        if(minIndex<this.heap.length&&this.heap[leftchild].priority<this.heap[minIndex].priority){
            minIndex=leftchild
        }
        if(minIndex<this.heap.length&&this.heap[rightchild].priority<this.heap[minIndex].priority){
            minIndex=rightchild
        }
        if(index!==minIndex){
            this.swap(index,minIndex)
            this.bubbledown(minIndex)
        }
    }

    extract(){
        let firstIndex=this.heap[0]
        let lastIndex=this.heap.pop()
        if(this.heap.length>0){
            this.heap[0]=lastIndex
            this.bubbledown(0)
        }
        return firstIndex
    }

    isEmpty(){
        return this.heap.length===0
    }
}

let priorityQ=new priorityQueue()
priority.insert("Apple",1)
priority.insert("dog",4)
priority.insert("car",3)
priority.insert('banana',2)
console.log(priority.isEmpty());
while (!priority.isEmpty()){
let element=priority.extract()
console.log(element.value,"->",element.priority);
}
