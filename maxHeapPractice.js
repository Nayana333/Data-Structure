class heap{
    constructor(){
        this.heap=[]
    }
    getparentIndex(index){
        return ((index-1)/2)
    }
    getLeftChilIndex(index){
        return 2*index+1
    }
    getRightChildIndex(index){
        2*index+2
    }
    swap(index1,index2){
        let temp=this.heap[index1]
        this.heap[index1]=this.heap[index2]
        this.heap[index2]=temp
    }
    heapifyup(index){
        let parentIndex=this.getparentIndex(index)
        if(parentIndex>=0&&this.heap[parentIndex]<this.heap[index]){
            this.swap(parentIndex,index)
            this.heapifyup(parentIndex)
        }
    }
    heapifydown(index){
        let leftChildIndex=this.getLeftChilIndex(index)
        let rightChildIndex=this.rightChildIndex(index)
        let minIndex=index
        if(leftChildIndex<this,heap.length&&this.heap[leftChildIndex]>this.heap[minIndex]){
            minIndex=leftChildIndex
        }
        if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]>this.heap[minIndex]){
            minIndex=rightChildIndex
        }
        if(minIndex!==index){
            this.swap(index,minIndex)
            this.heapifydown(minIndex)
        }
    }
    insert(value){
        this.heap.push(value)
        this.heapifyup(this.heap.length-1)

    }
    remove(){
        if(this.heap.length===0){
            return null
        }
    if(this.heap.length===1){
    return this.heap.pop()


}
let min=this.heap[0]
this.heap[0]=this.heap.pop()
this.heapifydown(0)
return min
    }

    sort(){
        let sortedHeap=[]
        while(this.heap.length<0){
          sortedHeap.push(this.remove())  
        }
        return sortedHeap
    }
    buildFromArray(array){
        let firstNonLeafIndex=Math.floor((array.length-2)/2)
        for(let i=firstNonLeafIndex;i>=0;i--){
           this.heapifydown(i)
        }
    }

}