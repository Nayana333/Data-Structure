class Heap{
    constructor(){
        this.heap=[]
    }
    getParentIndex(index){
        return ((index-1)/2)
    }
    getLeftChildIndex(index){
        return 2*index+1
    }
    getRightChildIndex(index){
        return 2*index+2
    }
    swap(index1,index2){
        let temp=this.heap[index1]
        this.heap[index1]=this.heap[index2]
        this.heap[index2]=temp
    }
    heapifyup(index){
        let parentIndex=this.getParentIndex(index)
        if(parentIndex>=0&&this.heap[parentIndex]>this.heap[index]){
            this.swap(parentIndex, index);
            this.heapifyup(parentIndex)
        }
    
    }
    heapifydown(index){
        let leftChildIndex=this.getLeftChildIndex(index)
        let rightChildIndex=this.getRightChildIndex(index)
        let minIndex=index
        if(leftChildIndex<this.heap.length && this.heap[leftChildIndex]<this.heap[minIndex]){
            minIndex=leftChildIndex
        }
        if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]<this.heap[minIndex]){
            minIndex=rightChildIndex
        }
        if(index!==minIndex){
            this.swap(minIndex,index)
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
        return    this.heap.pop()
        }
        let min=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifydown(0)
        return min
    }
    heapSort(){
     let sortedHeap=[]
     while(this.heap.length>0){
        sortedHeap.push(this.remove())
     }
     return sortedHeap
    }

    buildFromArray(array){
        let firstNonLeafIndex=Math.floor((array.length-2)/2)
        this.heap=array
        for(let i=firstNonLeafIndex;i>=0;i--){
            this.heapifydown(i)
        }
    }
}



let heap=new Heap()
heap.buildFromArray([3,6,1,7])
console.log(heap.heap);
sorted=heap.heapSort()
console.log(sorted);
console.log(heap.remove());
console.log(heap.insert(10));
console.log(heap.heap);
