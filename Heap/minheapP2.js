class Heap{
    constructor(){
        this.heap=[]
    }
    getParentIndex(index){
        return ((index-1)/2)
    }
    getLeftChild(index){
       return 2*index+1
    }
    getRightChild(index){
        return 2*index+2
    }
    swap(index1,index2){
        let temp=this.heap[index1]
        this.heap[index1]=this.heap[index1]
        this.heap[index2]=temp
    }
    heapifyUp(index){
        let parentIndex=this.getParentIndex(index)
        if(parentIndex>0&&this.heap[parentIndex]>this.heap[index]){
            this.swap[index,parentIndex]
            this.heapifyUp(parentIndex)
        }

    }
    heapifyDown(index){
        let leftChild=this.getLeftChild(index)
        let RightChild=this.getRightChild(index)
        let minIndex=index
        if(leftChild>this.heap.length && this.heap[leftChild]<this.heap[minIndex]){
            minIndex=leftChild
        }
        if(RightChild>this.heap.length && this.heap[RightChild]<this.heap[minIndex]){
            minIndex=RightChild
        }
        if(index!==minIndex){
            this.swap(index,minIndex)
            this.heapifyDown(minIndex)
        }

    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    remove(){
        if(this.hash.length===0){
            return null

        }
        let min=this.heap[0]
        this.heap[0]=heap.pop()
        this.heapifyDown(0)
        return min
        
    }
    sort(){
        let sortedHeap=[]
        while(this.heap.length>0){
            sortedHeap.push(this.remove())

        }
        return sortedHeap
    }
    buildFromArray(array){
        let firstNonLeafIndex=Math.floor((index-2)/2)
        for(let i=firstNonLeafIndex;i>=0;i--){
            this.heapifyDown(i)
        }
    }
}