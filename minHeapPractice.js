class Heap{
    constructor(){
        this.heap=[]
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChildIndex(index){
        return 2  *index+1
    }
    getRightChildIndex(index){
        return 2 *index +2
    }
    swap(index1,index2){
        let temp=this.heap[index1]
        this.heap[index1]=this.heap[index2]
        this.heap[index2]=temp
    }
    heapifyUp(index){
        let parentIndex=this.getParentIndex(index)
        if(parentIndex>0 && this.heap[parentIndex]>this.heap[index]){
            this.swap(index,parentIndex)
            this.heapifyUp(parentIndex)
        }
    }
    heapifyDown(index){
        let leftChildIndex=this.getLeftChildIndex(index)
        let rightChildIndex=this.getRightChildIndex(index)
        let minIndex=index
        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex]<this.heap[minIndex]){
            minIndex=leftChildIndex
        }
        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex]<this.heap[minIndex]){
            minIndex=rightChildIndex
        }
        if(minIndex!==index){
            this.swap(index,minIndex)
            this.heapifyDown(minIndex)
        }
        
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
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
        this.heapifyDown(0)
        return min
    }

    heapSOrt(){
        let sortedHeap=[]
        while(this.heap.length>0){
            sortedHeap.push(this.remove())
        }
        return sortedHeap
    }

    buildFromArray(array){
        this.heap=array
        let firstNonLeafIndex=Math.floor((array.length-2)/2)
        for(let i=firstNonLeafIndex;i>=0;i--){
            this.heapifyDown(i)
        }
    }
}

let heap=new Heap()
heap.buildFromArray([3,2,1,5,6])
console.log(heap.heap);
console.log('removed item:',heap.remove());
console.log(heap.heap);
console.log(heap.heapSOrt());