class minHeap{
    constructor(){
        this.heap=[]
    }
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
      }
    getLeftchildIndex(index){
        return 2*index+1
    }
    getRichtChildIndex(index){
        return 2*index+2
    }
    swap(index1,index2){
        let temp=this.heap[index1]
        this.heap[index1]=this.heap[index2]
        this.heap[index2]=temp
    }
    heapifyup(index){
        const parentIndex=this.getParentIndex(index)
        if(parentIndex>=0 && this.heap[parentIndex]>this.heap[index]){
            this.swap(index,parentIndex)
            this.heapifyup(parentIndex)
        }
    
    }
    

    heapifydown(index){
        const leftChildIndex=this.getLeftchildIndex(index)
        const rightChildIndex=this.getRichtChildIndex(index)
        let minIndex=index
        if(leftChildIndex <this.heap.length && this.heap[leftChildIndex]<this.heap[minIndex]){
            minIndex=leftChildIndex
        }
        if(rightChildIndex<this.heap.length && this.heap[rightChildIndex]<this.heap[minIndex]){
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
          return  this.heap.pop()
        }
        let min=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifydown(0)
        return min
    }
 
    sortHeap(){
        let sortedHeap=[]
        while(this.heap.length>0){
            sortedHeap.push(this.remove())

        }
        return sortedHeap
    }
    buildHeap(array){
    this.heap=array
    let firstNonLeafIndex=Math.floor((array.length-2)/2)
    for(let i=firstNonLeafIndex;i>=0;i--){
        this.heapifydown(i)
    }
    }
}

const Heap = new minHeap();

Heap.buildHeap([3, 7, 2, 1, 9, 8]);

 console.log(Heap.heap); // [1, 3, 2, 7, 9, 8]

 console.log(Heap.remove()); // 1

console.log(Heap.heap); // [2, 3, 8, 7, 9]

 console.log(Heap.sortHeap());