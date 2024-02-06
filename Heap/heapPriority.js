class priorityQueue{
    constructor(){
        this.heap=[]
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]=this.heap[index2],this.heap[index1]]
    }
    getParentIndex(index){
        return ((index-1)/2)
    }
    bubbleUp(index){
      if(index >0 && this.heap[this.getParentIndex(index)].priority>this.heap[index].priority){
        this.swap(index,this.getParentIndex(index))
        this.bubbleUp(this.getParentIndex(index))
      }
        
    }

    getleftChildIndex(index){
        return 2 *index +1
    }
    getRightChildIndex(index){
        return 2*index +2
    }
    bubbleDown(index){
        let leftchild=this.getleftChildIndex(index)
        let rightchild=this.getRightChildIndex(index)
        let minIndex=index
        if(leftchild<this.heap.length && this.heap[leftchild].priority<this.heap[minIndex].priority){
            minIndex=leftchild
        }
        if(rightchild<this.heap.length && this.heap[rightchild].priority <this.heap[minIndex].priority){
            minIndex=rightchild
        }
        if(minIndex !==index){
            this.swap(index,minIndex)
            this.bubbleDown(minIndex)
        }
    }

insert(value,priority){
    let element={value,priority}
    this.heap.push(element)
    this.bubbleUp(this.heap.length-1)
}
extract(){
    let firstIndex=this.heap[0]
    let lastIndex=this.heap.pop()
    this.heap[0]=lastIndex
    if(this.heap.length>0){
    this.bubbleDown(0)
    }
    return firstIndex
    
}
}